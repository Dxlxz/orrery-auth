import { oauthProviderResourceClient } from "@orrery/oauth-provider/resource-client";
import { createAuthClient } from "orrery-auth/client";
import { auth } from "./auth";

export const serverClient = createAuthClient({
	plugins: [oauthProviderResourceClient(auth)],
});
