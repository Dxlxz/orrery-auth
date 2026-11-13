import { createAuthClient } from "orrery-auth/vue";

export * from "orrery-auth/client/plugins";

export const client = createAuthClient({
	baseURL: "http://localhost:3000",
});
