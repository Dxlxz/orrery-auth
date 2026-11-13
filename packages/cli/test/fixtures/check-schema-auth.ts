import { DatabaseSync } from "node:sqlite";
import { orreryAuth } from "orrery-auth";

export const auth = orreryAuth({
	baseURL: "https://auth.example.com",
	database: new DatabaseSync(":memory:"),
	secret: "check-schema-test-secret-at-least-32-characters",
	logger: { disabled: true },
	advanced: {
		database: {
			validateSchema: false,
		},
	},
});
