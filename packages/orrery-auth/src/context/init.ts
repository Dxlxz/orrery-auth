import { OrreryAuthError } from "@orrery/core/error";
import { getKyselyDatabaseType } from "@orrery/kysely-adapter";
import { getAdapter } from "../db/adapter-kysely";
import { getMigrations } from "../db/get-migration";
import type { OrreryAuthOptions } from "../types";
import { createAuthContext } from "./create-context";

export const init = async (options: OrreryAuthOptions) => {
	const adapter = await getAdapter(options);

	// Get database type using Kysely's dialect detection
	const getDatabaseType = (database: OrreryAuthOptions["database"]) =>
		getKyselyDatabaseType(database) || "unknown";

	// Use base context creation
	const ctx = await createAuthContext(adapter, options, getDatabaseType);

	// Add runMigrations with Kysely support
	ctx.runMigrations = async function () {
		// only run migrations if database is provided and it's not an adapter
		if (!options.database || "updateMany" in options.database) {
			throw new OrreryAuthError(
				"Database is not provided or it's an adapter. Migrations are only supported with a database instance.",
			);
		}
		const { runMigrations } = await getMigrations(options);
		await runMigrations();
	};

	return ctx;
};
