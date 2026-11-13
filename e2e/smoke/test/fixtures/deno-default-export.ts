import { DatabaseSync } from "node:sqlite";
import { orreryAuth } from "orrery-auth";
import { getMigrations } from "orrery-auth/db/migration";

const database = new DatabaseSync(":memory:");

export const auth = orreryAuth({
	database,
	emailAndPassword: {
		enabled: true,
	},
	trustedOrigins: ["http://localhost:*"],
	logger: {
		level: "debug",
	},
});

const { runMigrations } = await getMigrations(auth.options);

await runMigrations();

// Deno: `deno serve` (Deno 1.43+) auto-mounts the default export's `fetch`
// handler. No explicit Deno.serve call needed.
// https://docs.deno.com/runtime/reference/cli/serve
export default auth;
