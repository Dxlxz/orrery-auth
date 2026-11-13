import type { OrreryAuthOptions } from "@orrery/core";
import { initMinimal } from "../context/init-minimal";
import type { Auth } from "../types";
import { createOrreryAuth } from "./base";

export type { OrreryAuthOptions };

/**
 * Orrery Auth initializer for minimal mode (without Kysely)
 */
export const orreryAuth = <Options extends OrreryAuthOptions>(
	options: Options & {},
): Auth<Options> => {
	return createOrreryAuth(options, initMinimal);
};
