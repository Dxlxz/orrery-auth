import { orreryAuth } from "orrery-auth";
import { memoryAdapter } from "orrery-auth/adapters/memory";

const database = {
	user: [],
	session: [],
	account: [],
	verification: [],
};

export const auth = orreryAuth({
	baseURL: {
		allowedHosts: ["127.0.0.1:*"],
		protocol: "http",
	},
	database: memoryAdapter(database),
	secret: "orrery-auth-nuxt-test-secret",
	emailAndPassword: {
		enabled: true,
	},
});
