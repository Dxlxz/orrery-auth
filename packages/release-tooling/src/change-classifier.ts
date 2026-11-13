const SCOPE_TO_DOMAIN = new Map(
	Object.entries({
		// core
		core: "core",
		api: "core",
		client: "core",
		cookies: "core",
		crypto: "core",
		account: "core",
		session: "core",
		instrumentation: "core",
		"last-login-method": "core",
		"redis-storage": "core",

		// database
		db: "database",
		adapters: "database",
		"drizzle-adapter": "database",
		"prisma-adapter": "database",
		"kysely-adapter": "database",
		"mongo-adapter": "database",
		"memory-adapter": "database",

		// oauth
		"oauth-proxy": "oauth",
		"one-tap": "oauth",
		"generic-oauth": "oauth",
		"social-provider": "oauth",

		// credentials
		"magic-link": "credentials",
		"email-otp": "credentials",
		"phone-number": "credentials",
		phone: "credentials",
		username: "credentials",
		anonymous: "credentials",
		siwe: "credentials",
		passkey: "credentials",

		// identity
		"oauth-provider": "identity",
		"oidc-provider": "identity",
		mcp: "identity",
		"device-authorization": "identity",
		cimd: "identity",

		// organization
		organization: "organization",
		admin: "organization",
		access: "organization",

		// security
		"two-factor": "security",
		"2fa": "security",
		captcha: "security",
		haveibeenpwned: "security",
		"rate-limiter": "security",

		// enterprise
		sso: "enterprise",
		scim: "enterprise",

		// payments
		stripe: "payments",
		"api-key": "payments",

		// platform
		expo: "platform",
		electron: "platform",

		// devtools
		cli: "devtools",
		telemetry: "devtools",
		i18n: "devtools",
		"test-utils": "devtools",
		"open-api": "devtools",

		// devops (filtered from release notes)
		build: "devops",
		ci: "devops",
		deps: "devops",
		"deps-dev": "devops",
		knip: "devops",

		// docs (filtered from release notes)
		docs: "docs",
		blog: "docs",
		landing: "docs",
	} as const),
);

const PATH_TO_DOMAIN = [
	["packages/oauth-provider/", "identity"],
	["packages/orrery-auth/src/plugins/oidc-provider/", "identity"],
	["packages/orrery-auth/src/plugins/mcp/", "identity"],
	["packages/orrery-auth/src/plugins/device-authorization/", "identity"],
	["packages/cimd/", "identity"],
	["packages/orrery-auth/src/plugins/magic-link/", "credentials"],
	["packages/orrery-auth/src/plugins/email-otp/", "credentials"],
	["packages/orrery-auth/src/plugins/phone-number/", "credentials"],
	["packages/orrery-auth/src/plugins/username/", "credentials"],
	["packages/orrery-auth/src/plugins/anonymous/", "credentials"],
	["packages/orrery-auth/src/plugins/siwe/", "credentials"],
	["packages/passkey/", "credentials"],
	["packages/orrery-auth/src/plugins/two-factor/", "security"],
	["packages/orrery-auth/src/api/rate-limiter/", "security"],
	["packages/orrery-auth/src/plugins/captcha/", "security"],
	["packages/orrery-auth/src/plugins/haveibeenpwned/", "security"],
	["packages/orrery-auth/src/plugins/organization/", "organization"],
	["packages/orrery-auth/src/plugins/admin/", "organization"],
	["packages/orrery-auth/src/plugins/access/", "organization"],
	["packages/orrery-auth/src/plugins/generic-oauth/", "oauth"],
	["packages/orrery-auth/src/plugins/oauth-proxy/", "oauth"],
	["packages/orrery-auth/src/plugins/one-tap/", "oauth"],
	["packages/orrery-auth/src/oauth2/", "oauth"],
	["packages/core/src/social-providers/", "oauth"],
	["packages/core/src/oauth2/", "oauth"],
	["packages/sso/", "enterprise"],
	["packages/scim/", "enterprise"],
	["packages/stripe/", "payments"],
	["packages/api-key/", "payments"],
	["packages/orrery-auth/src/db/", "database"],
	["packages/orrery-auth/src/adapters/", "database"],
	["packages/drizzle-adapter/", "database"],
	["packages/prisma-adapter/", "database"],
	["packages/mongo-adapter/", "database"],
	["packages/kysely-adapter/", "database"],
	["packages/memory-adapter/", "database"],
	["packages/expo/", "platform"],
	["packages/electron/", "platform"],
	["packages/orrery-auth/src/integrations/", "platform"],
	["packages/cli/", "devtools"],
	["packages/orrery-auth/src/plugins/open-api/", "devtools"],
	["packages/telemetry/", "devtools"],
	["packages/i18n/", "devtools"],
	["packages/test-utils/", "devtools"],
	// Session-related plugins → core
	["packages/orrery-auth/src/plugins/jwt/", "core"],
	["packages/orrery-auth/src/plugins/bearer/", "core"],
	["packages/orrery-auth/src/plugins/multi-session/", "core"],
	["packages/orrery-auth/src/plugins/custom-session/", "core"],
	["packages/redis-storage/", "core"],
	// Catch-all for orrery-auth and core packages
	["packages/orrery-auth/", "core"],
	["packages/core/", "core"],
	// Non-user-facing
	["docs/", "docs"],
	["demo/", "docs"],
	[".github/", "devops"],
	["e2e/", "devops"],
] as const;

function classifyDomain(filePath: string): string | undefined {
	for (const [prefix, domain] of PATH_TO_DOMAIN) {
		if (filePath.startsWith(prefix)) return domain;
	}
	return undefined;
}

export function resolveDomain(
	scope: string | undefined,
	changedFiles: string[],
): string {
	if (scope) {
		const domain = SCOPE_TO_DOMAIN.get(scope);
		if (domain) return domain;
	}

	const counts: Record<string, number> = {};
	for (const file of changedFiles) {
		const domain = classifyDomain(file);
		if (domain) {
			counts[domain] = (counts[domain] ?? 0) + 1;
		}
	}

	const domains = Object.keys(counts);
	if (domains.length === 0) return "devops";
	if (domains.length >= 3) return "core";

	return domains.sort((a, b) => (counts[b] ?? 0) - (counts[a] ?? 0))[0]!;
}

export function mapTypeToBump(
	type: string,
	breaking: boolean,
): "patch" | "minor" | "major" | "skip" {
	if (breaking) return "minor";
	switch (type) {
		case "fix":
		case "perf":
		case "refactor":
			return "patch";
		case "feat":
			return "minor";
		case "chore":
		case "docs":
		case "ci":
		case "test":
		case "style":
		case "build":
			return "skip";
		default:
			return "patch";
	}
}

export const DOMAIN_ORDER = [
	"core",
	"database",
	"oauth",
	"credentials",
	"identity",
	"organization",
	"security",
	"enterprise",
	"payments",
	"platform",
	"devtools",
] as const;

export const FILTERED_DOMAINS = new Set(["docs", "devops"]);

export function isMaintenanceBranch(branch: string): boolean {
	return /^v[0-9]+\.[0-9]+\.x$/u.test(branch);
}

const SCOPE_TO_PACKAGE = new Map(
	Object.entries({
		cimd: "@orrery/cimd",
		sso: "@orrery/sso",
		scim: "@orrery/scim",
		passkey: "@orrery/passkey",
		"oauth-provider": "@orrery/oauth-provider",
		stripe: "@orrery/stripe",
		"api-key": "@orrery/api-key",
		expo: "@orrery/expo",
		electron: "@orrery/electron",
		i18n: "@orrery/i18n",
		"test-utils": "@orrery/test-utils",
		"drizzle-adapter": "@orrery/drizzle-adapter",
		"prisma-adapter": "@orrery/prisma-adapter",
		"kysely-adapter": "@orrery/kysely-adapter",
		"mongo-adapter": "@orrery/mongo-adapter",
		"memory-adapter": "@orrery/memory-adapter",
		"redis-storage": "@orrery/redis-storage",
		cli: "auth",
	} as const),
);

/**
 * Maps file path prefixes to npm package names.
 * Order matters: more specific paths must come before catch-alls.
 */
const PATH_TO_PACKAGE = [
	["packages/cimd/", "@orrery/cimd"],
	["packages/sso/", "@orrery/sso"],
	["packages/scim/", "@orrery/scim"],
	["packages/passkey/", "@orrery/passkey"],
	["packages/oauth-provider/", "@orrery/oauth-provider"],
	["packages/stripe/", "@orrery/stripe"],
	["packages/api-key/", "@orrery/api-key"],
	["packages/expo/", "@orrery/expo"],
	["packages/electron/", "@orrery/electron"],
	["packages/i18n/", "@orrery/i18n"],
	["packages/redis-storage/", "@orrery/redis-storage"],
	["packages/test-utils/", "@orrery/test-utils"],
	["packages/telemetry/", "@orrery/telemetry"],
	["packages/drizzle-adapter/", "@orrery/drizzle-adapter"],
	["packages/prisma-adapter/", "@orrery/prisma-adapter"],
	["packages/kysely-adapter/", "@orrery/kysely-adapter"],
	["packages/mongo-adapter/", "@orrery/mongo-adapter"],
	["packages/memory-adapter/", "@orrery/memory-adapter"],
	// Catch-all: everything in orrery-auth or core maps to the main package
	["packages/orrery-auth/", "orrery-auth"],
	["packages/core/", "orrery-auth"],
	["packages/cli/", "auth"],
] as const;

export function resolvePackage(
	scope: string | undefined,
	changedFiles: string[],
): string {
	if (scope) {
		const pkg = SCOPE_TO_PACKAGE.get(scope);
		if (pkg) return pkg;
	}

	const counts: Record<string, number> = {};
	for (const file of changedFiles) {
		for (const [prefix, pkg] of PATH_TO_PACKAGE) {
			if (file.startsWith(prefix)) {
				counts[pkg] = (counts[pkg] ?? 0) + 1;
				break;
			}
		}
	}

	const packages = Object.keys(counts);
	if (packages.length === 0) return "orrery-auth";

	// If files span multiple external packages, return the one with the most hits.
	// If all files are in orrery-auth, return orrery-auth.
	return packages.sort((a, b) => {
		// Prefer non-orrery-auth packages (they're more specific)
		const aIsCore = a === "orrery-auth" ? 1 : 0;
		const bIsCore = b === "orrery-auth" ? 1 : 0;
		if (aIsCore !== bIsCore) return aIsCore - bIsCore;
		return (counts[b] ?? 0) - (counts[a] ?? 0);
	})[0]!;
}

export function classifyChangeType(
	type: string,
	breaking: boolean,
): "breaking" | "feat" | "fix" {
	if (breaking) return "breaking";
	if (type === "feat") return "feat";
	return "fix";
}
