import type { OrreryAuthOptions } from "@orrery/core";
import { OrreryAuthError } from "@orrery/core/error";
import { getBaseAdapter } from "../db/adapter-base";
import { createAuthContext } from "./create-context";

export const initMinimal = async (options: OrreryAuthOptions) => {
	const adapter = await getBaseAdapter(options, async () => {
		throw new OrreryAuthError(
			"Direct database connection requires Kysely. Please use `orrery-auth` instead of `orrery-auth/minimal`, or provide an adapter (drizzleAdapter, prismaAdapter, etc.)",
		);
	});

	// Without Kysely, we can't detect database type, so always return "unknown"
	const getDatabaseType = (_database: OrreryAuthOptions["database"]) =>
		"unknown";

	// Use base context creation
	const ctx = await createAuthContext(adapter, options, getDatabaseType);

	// Add runMigrations that throws error (migrations require Kysely)
	ctx.runMigrations = async function () {
		throw new OrreryAuthError(
			"Migrations are not supported in 'orrery-auth/minimal'. Please use 'orrery-auth' for migration support.",
		);
	};

	return ctx;
};
