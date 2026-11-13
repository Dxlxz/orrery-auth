import { electronClient } from "@orrery/electron/client";
import { storage } from "@orrery/electron/storage";
import { createAuthClient } from "orrery-auth/client";

export const authClient = createAuthClient({
	baseURL: "http://localhost:3000/api/auth",
	plugins: [
		electronClient({
			protocol: {
				scheme: "com.orrery-auth.demo",
			},
			signInURL: "http://localhost:3000/sign-in",
			storage: storage(),
		}),
	],
});
