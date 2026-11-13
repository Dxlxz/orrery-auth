import type { DBFieldAttribute, DBTableIndex } from "./type";

export type OrreryAuthPluginDBSchema = {
	[table in string]: {
		fields: {
			[field: string]: DBFieldAttribute;
		};
		/** Table-level indexes, including compound indexes. */
		indexes?: readonly DBTableIndex[] | undefined;
		disableMigration?: boolean | undefined;
		modelName?: string | undefined;
	};
};
