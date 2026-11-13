import fs from "node:fs/promises";
import path from "node:path";
import type { OrreryAuthOptions } from "@orrery/core";

export const generateAuthConfigFile = async (_options: OrreryAuthOptions) => {
	const options = { ..._options };
	// biome-ignore lint/performance/noDelete: perf doesn't matter here.
	delete options.database;
	const code = `import { orreryAuth } from "../../../auth";
import { prismaAdapter } from "../prisma-adapter";		
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const auth = orreryAuth({
    database: prismaAdapter(db, {
	    provider: 'sqlite'
    }),
    ${JSON.stringify(options, null, 2).slice(1, -1)}
})`;

	await fs.writeFile(path.join(import.meta.dirname, "auth.ts"), code);
};
