import { createAuthClient } from "orrery-auth/react";

export const authClient = createAuthClient();

export const { signIn, signOut, useSession } = authClient;
