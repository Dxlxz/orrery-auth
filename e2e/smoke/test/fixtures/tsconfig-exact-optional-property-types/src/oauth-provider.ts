/**
 * @see https://github.com/Dxlxz/orrery-auth/issues/10213
 */
import { oauthProvider } from "@orrery/oauth-provider";
import { orreryAuth } from "orrery-auth";

export const auth = orreryAuth({
	plugins: [
		oauthProvider({
			loginPage: "/login",
			consentPage: "/consent",
		}),
	],
});
