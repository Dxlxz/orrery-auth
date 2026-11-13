import type {
	AuthContext,
	OrreryAuthOptions,
	OrreryAuthPlugin,
} from "@orrery/core";

import type { OrreryAuthPluginDBSchema } from "@orrery/core/db";
import type {
	ExtractPluginField,
	InferPluginFieldFromTuple,
	UnionToIntersection,
} from "./helper";

export type InferOptionSchema<S extends OrreryAuthPluginDBSchema> =
	S extends Record<string, { fields: infer Fields }>
		? {
				[K in keyof S]?: {
					modelName?: string | undefined;
					fields?:
						| {
								[P in keyof Fields]?: string;
						  }
						| undefined;
				};
			}
		: never;

export type InferPluginErrorCodes<O extends OrreryAuthOptions> =
	O["plugins"] extends readonly [unknown, ...unknown[]]
		? InferPluginFieldFromTuple<O["plugins"], "$ERROR_CODES">
		: O["plugins"] extends Array<infer P>
			? UnionToIntersection<ExtractPluginField<P, "$ERROR_CODES">>
			: {};

export type InferPluginIDs<O extends OrreryAuthOptions> =
	O["plugins"] extends Array<infer P>
		? UnionToIntersection<P extends OrreryAuthPlugin ? P["id"] : never>
		: never;

type ExtractInitContext<P extends OrreryAuthPlugin> = P["init"] extends (
	...args: any[]
) => infer R
	? Awaited<R> extends { context?: infer C }
		? C extends Record<string, any>
			? Omit<C, keyof AuthContext>
			: {}
		: {}
	: {};

export type InferPluginContext<O extends OrreryAuthOptions> =
	O["plugins"] extends Array<infer P>
		? UnionToIntersection<
				P extends OrreryAuthPlugin ? ExtractInitContext<P> : {}
			>
		: {};
