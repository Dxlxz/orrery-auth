import type { OrreryAuthOptions } from "@orrery/core";
import { getAuthTables } from "@orrery/core/db";
import type { DBAdapter } from "@orrery/core/db/adapter";
import { logger } from "@orrery/core/env";
import type { MemoryDB } from "@orrery/memory-adapter";

export async function getBaseAdapter(
	options: OrreryAuthOptions,
	handleDirectDatabase: (
		options: OrreryAuthOptions,
	) => Promise<DBAdapter<OrreryAuthOptions>>,
): Promise<DBAdapter<OrreryAuthOptions>> {
	let adapter: DBAdapter<OrreryAuthOptions>;

	if (!options.database) {
		const tables = getAuthTables(options);
		const memoryDB = Object.keys(tables).reduce<MemoryDB>((acc, key) => {
			acc[key] = [];
			return acc;
		}, {});
		const { memoryAdapter } = await import("@orrery/memory-adapter");
		adapter = memoryAdapter(memoryDB)(options);
	} else if (typeof options.database === "function") {
		adapter = options.database(options);
	} else {
		adapter = await handleDirectDatabase(options);
	}

	// patch for 1.3.x to ensure we have a transaction function in the adapter
	if (!adapter.transaction) {
		logger.warn(
			"Adapter does not correctly implement transaction function, patching it automatically. Please update your adapter implementation.",
		);
		adapter.transaction = async (cb) => {
			return cb(adapter);
		};
	}

	return adapter;
}
