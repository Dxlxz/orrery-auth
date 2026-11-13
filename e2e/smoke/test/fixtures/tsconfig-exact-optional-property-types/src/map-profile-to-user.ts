/**
 * @see https://github.com/Dxlxz/orrery-auth/issues/6491
 */
import { orreryAuth } from "orrery-auth";
import { genericOAuth } from "orrery-auth/plugins";

export const auth = orreryAuth({
	socialProviders: {
		google: {
			clientId: "google-client-id",
			clientSecret: "google-client-secret",
			mapProfileToUser: () => ({ image: undefined }),
		},
	},
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: "example",
					clientId: "example-client-id",
					discoveryUrl: "https://example.com/.well-known/openid-configuration",
					mapProfileToUser: (profile) => ({
						name: profile.name,
						email: profile.email,
						image: profile.image,
					}),
				},
			],
		}),
	],
});
