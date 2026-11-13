import type { CookieOptions } from "better-call";
import type { Session, User } from "../db";

export type OrreryAuthCookie = { name: string; attributes: CookieOptions };

export type OrreryAuthCookies = {
	sessionToken: OrreryAuthCookie;
	sessionData: OrreryAuthCookie;
	accountData: OrreryAuthCookie;
	dontRememberToken: OrreryAuthCookie;
};

/**
 * A validated cookie-cache payload, including legacy payloads without a version.
 */
export type CookieCachePayload = {
	session: Session & Record<string, unknown>;
	user: User & Record<string, unknown>;
	updatedAt: number;
	version?: string | undefined;
};
