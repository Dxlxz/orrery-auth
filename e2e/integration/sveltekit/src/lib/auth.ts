import { orreryAuth } from "orrery-auth";
import { memoryAdapter } from "orrery-auth/adapters/memory";
import { sveltekitCookies } from "orrery-auth/svelte-kit";
import { getRequestEvent } from "$app/server";

const database = {
	user: [],
	session: [],
	account: [],
	verification: [],
};

export const auth = orreryAuth({
	baseURL: {
		allowedHosts: ["localhost:*"],
		protocol: "http",
	},
	database: memoryAdapter(database),
	secret: "orrery-auth-sveltekit-test-secret",
	emailAndPassword: {
		enabled: true,
	},
	plugins: [sveltekitCookies(getRequestEvent)],
});
