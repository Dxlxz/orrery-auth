import type { OrreryAuthOptions } from "@orrery/core";

export function hasServerSessionStore(options: OrreryAuthOptions): boolean {
	return !!options.database || !!options.secondaryStorage;
}

function hasServerAccountStore(options: OrreryAuthOptions): boolean {
	return !!options.database;
}

export function shouldBindAccountCookieToSessionUser(
	options: OrreryAuthOptions,
): boolean {
	return hasServerAccountStore(options);
}
