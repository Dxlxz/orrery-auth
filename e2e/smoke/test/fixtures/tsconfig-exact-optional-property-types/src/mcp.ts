/**
 * @see https://github.com/Dxlxz/orrery-auth/issues/10213
 */
import { mcp } from "@orrery/mcp";
import { orreryAuth } from "orrery-auth";

export const auth = orreryAuth({
	plugins: [
		mcp({
			resource: "https://example.com/mcp",
			loginPage: "/login",
			consentPage: "/consent",
		}),
	],
});
