import type {
	OrreryAuthClientPlugin,
	OrreryAuthOptions,
} from "@orrery/core";
import { PACKAGE_VERSION } from "../../version";

export const InferServerPlugin = <
	AuthOrOption extends
		| OrreryAuthOptions
		| {
				options: OrreryAuthOptions;
		  },
	ID extends string,
>() => {
	type Option = AuthOrOption extends { options: infer O } ? O : AuthOrOption;
	type Plugin =
		Option["plugins"] extends Array<infer P>
			? P extends {
					id: ID;
				}
				? P
				: never
			: never;
	return {
		id: "infer-server-plugin",
		version: PACKAGE_VERSION,
		$InferServerPlugin: {} as Plugin,
	} satisfies OrreryAuthClientPlugin;
};
