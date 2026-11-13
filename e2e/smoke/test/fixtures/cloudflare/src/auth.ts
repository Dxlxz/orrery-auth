import { env } from "cloudflare:workers";
import { scim } from "@orrery/scim";
import { sso } from "@orrery/sso";
import { orreryAuth } from "orrery-auth";
import { jwt } from "orrery-auth/plugins/jwt";

export const auth = orreryAuth({
	baseURL: "http://localhost:4000",
	database: env.DB,
	emailAndPassword: {
		enabled: true,
	},
	logger: {
		level: "debug",
	},
	plugins: [
		jwt(),
		sso(),
		scim({
			connections: [
				{
					id: "workforce",
					credentials: [
						{ type: "bearer", id: "scim-token", token: "scim-token" },
					],
				},
			],
		}),
	],
});
