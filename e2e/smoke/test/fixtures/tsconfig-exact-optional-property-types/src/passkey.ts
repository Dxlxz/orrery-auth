/**
 * @see https://github.com/Dxlxz/orrery-auth/issues/9212
 */
import { passkey } from "@orrery/passkey";
import { passkeyClient } from "@orrery/passkey/client";
import { orreryAuth } from "orrery-auth";
import { createAuthClient } from "orrery-auth/react";

export const auth = orreryAuth({
	plugins: [
		passkey({
			rpID: "localhost",
			rpName: "App",
			origin: "http://localhost:3000",
		}),
	],
});

export const authWithoutSessionRequired = orreryAuth({
	plugins: [
		passkey({
			rpID: "localhost",
			rpName: "App",
			origin: "http://localhost:3000",
			registration: {
				requireSession: false,
			},
		}),
	],
});

export const authClient = createAuthClient({
	baseURL: "http://localhost:3000",
	plugins: [passkeyClient()],
});

authClient.signIn.passkey;
authClient.passkey.addPasskey;
