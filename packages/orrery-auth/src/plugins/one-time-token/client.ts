import type { OrreryAuthClientPlugin } from "@orrery/core";
import { PACKAGE_VERSION } from "../../version";
import type { oneTimeToken } from "./index";

export const oneTimeTokenClient = () => {
	return {
		id: "one-time-token",
		version: PACKAGE_VERSION,
		$InferServerPlugin: {} as ReturnType<typeof oneTimeToken>,
	} satisfies OrreryAuthClientPlugin;
};

export type { OneTimeTokenOptions } from "./index";
