import { env } from "cloudflare:workers";
import type { OrreryAuthOptions } from "orrery-auth";
import { orreryAuth } from "orrery-auth";
import { getMigrations } from "orrery-auth/db/migration";

const logs: string[] = [];

const options = {
	baseURL: "http://localhost:8787",
	secret: "module-scope-test-secret-at-least-32-characters",
	database: env.DB,
	logger: {
		level: "debug",
		log: (level, message) => {
			logs.push(`${level}: ${message}`);
		},
	},
} satisfies OrreryAuthOptions;

// Module scope, where I/O and random values throw.
const auth = orreryAuth(options);
const telemetryAuth = orreryAuth({
	...options,
	baseURL: undefined,
	telemetry: { enabled: true, debug: true },
});

export default {
	async fetch(request) {
		const url = new URL(request.url);
		if (url.pathname === "/logs") return Response.json(logs);
		if (url.pathname === "/setup") {
			const { runMigrations } = await getMigrations(options);
			await runMigrations();
			return new Response(null, { status: 204 });
		}
		if (url.searchParams.has("telemetry")) {
			return telemetryAuth.handler(request);
		}
		return auth.handler(request);
	},
} satisfies ExportedHandler<CloudflareBindings>;
