import type { OrreryAuthOptions } from "@orrery/core";
import type { DBAdapter } from "@orrery/core/db/adapter";
import { OrreryAuthError } from "@orrery/core/error";
import { getBaseAdapter } from "./adapter-base";

export async function getAdapter(
	options: OrreryAuthOptions,
): Promise<DBAdapter<OrreryAuthOptions>> {
	return getBaseAdapter(options, async (opts) => {
		const { createKyselyAdapter, kyselyAdapter } = await import(
			"../adapters/kysely-adapter"
		);
		const { kysely, databaseType, transaction } =
			await createKyselyAdapter(opts);
		if (!kysely) {
			throw new OrreryAuthError("Failed to initialize database adapter");
		}
		return kyselyAdapter(kysely, {
			type: databaseType || "sqlite",
			debugLogs:
				opts.database && "debugLogs" in opts.database
					? opts.database.debugLogs
					: false,
			transaction,
		})(opts);
	});
}
