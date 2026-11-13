import type { OrreryAuthOptions } from "@orrery/core";
import { init } from "../context/init";
import type { Auth } from "../types";
import { createOrreryAuth } from "./base";

/**
 * Orrery Auth initializer for full mode (with Kysely)
 *
 * @example
 * ```ts
 * import { orreryAuth } from "orrery-auth";
 *
 * const auth = orreryAuth({
 * 	database: new PostgresDialect({ connection: process.env.DATABASE_URL }),
 * });
 * ```
 *
 * For minimal mode (without Kysely), import from `orrery-auth/minimal` instead
 * @example
 * ```ts
 * import { orreryAuth } from "orrery-auth/minimal";
 *
 * const auth = orreryAuth({
 *	  database: drizzleAdapter(db, { provider: "pg" }),
 * });
 */
export const orreryAuth = <Options extends OrreryAuthOptions>(
	options: Options & {},
): Auth<Options> => {
	return createOrreryAuth(options, init);
};
