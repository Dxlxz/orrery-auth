import type {
	OrreryAuthClientPlugin,
	OrreryAuthOptions,
	OrreryAuthPlugin,
} from "@orrery/core";
import type { DBFieldAttribute } from "@orrery/core/db";
import { PACKAGE_VERSION } from "../../version";

export const inferAdditionalFields = <
	T,
	S extends {
		user?:
			| {
					[key: string]: DBFieldAttribute;
			  }
			| undefined;
		session?:
			| {
					[key: string]: DBFieldAttribute;
			  }
			| undefined;
	} = {},
>(
	schema?: S | undefined,
) => {
	type Opts = T extends OrreryAuthOptions
		? T
		: T extends {
					options: OrreryAuthOptions;
				}
			? T["options"]
			: never;

	type Plugin = Opts extends never
		? S extends {
				user?:
					| {
							[key: string]: DBFieldAttribute;
					  }
					| undefined;
				session?:
					| {
							[key: string]: DBFieldAttribute;
					  }
					| undefined;
			}
			? {
					id: "additional-fields-client";
					version: string;
					schema: {
						user: {
							fields: S["user"] extends object ? S["user"] : {};
						};
						session: {
							fields: S["session"] extends object ? S["session"] : {};
						};
					};
				}
			: never
		: Opts extends OrreryAuthOptions
			? {
					id: "additional-fields";
					version: string;
					schema: {
						user: {
							fields: Opts["user"] extends {
								additionalFields: infer U;
							}
								? U
								: {};
						};
						session: {
							fields: Opts["session"] extends {
								additionalFields: infer U;
							}
								? U
								: {};
						};
					};
				}
			: never;

	return {
		id: "additional-fields-client",
		version: PACKAGE_VERSION,
		$InferServerPlugin: {} as Plugin extends OrreryAuthPlugin
			? Plugin
			: undefined,
	} satisfies OrreryAuthClientPlugin;
};
