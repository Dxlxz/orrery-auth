import { expoClient } from "@orrery/expo/client";
import { createAuthClient } from "orrery-auth/client";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
	baseURL: "http://localhost:8081",
	disableDefaultFetchPlugins: true,
	plugins: [
		expoClient({
			scheme: "orrery-auth",
			storage: SecureStore,
		}),
	],
});
