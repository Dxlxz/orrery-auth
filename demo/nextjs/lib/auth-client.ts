import { electronProxyClient } from "@orrery/electron/proxy";
import { dashClient } from "@orrery/infra/client";
import { oauthProviderClient } from "@orrery/oauth-provider/client";
import { passkeyClient } from "@orrery/passkey/client";
import { ssoClient } from "@orrery/sso/client";
import { stripeClient } from "@orrery/stripe/client";
import {
	adminClient,
	customSessionClient,
	deviceAuthorizationClient,
	lastLoginMethodClient,
	multiSessionClient,
	oneTapClient,
	organizationClient,
	twoFactorClient,
} from "orrery-auth/client/plugins";
import { createAuthClient } from "orrery-auth/react";
import { toast } from "sonner";
import type { auth } from "./auth";

export const authClient = createAuthClient({
	plugins: [
		dashClient(),
		ssoClient(),
		organizationClient(),
		twoFactorClient({
			onTwoFactorRedirect() {
				window.location.href = "/two-factor";
			},
		}),
		passkeyClient(),
		adminClient(),
		multiSessionClient(),
		oneTapClient({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
			promptOptions: {
				maxAttempts: 1,
			},
		}),
		oauthProviderClient(),
		stripeClient({
			subscription: true,
		}),
		customSessionClient<typeof auth>(),
		deviceAuthorizationClient(),
		lastLoginMethodClient(),
		electronProxyClient({
			protocol: {
				scheme: "com.orrery-auth.demo",
			},
		}),
	],
	fetchOptions: {
		onError(e) {
			if (e.error.status === 429) {
				toast.error("Too many requests. Please try again later.");
			}
		},
	},
});
