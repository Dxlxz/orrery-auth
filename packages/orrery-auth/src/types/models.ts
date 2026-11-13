import type { OrreryAuthOptions } from "@orrery/core";
import type {
	InferDBFieldsFromOptionsInput,
	InferDBFieldsFromPluginsInput,
} from "@orrery/core/db";
import type {
	ExtractPluginField,
	InferPluginFieldFromTuple,
	UnionToIntersection,
} from "./helper";

export type AdditionalUserFieldsInput<Options extends OrreryAuthOptions> =
	InferDBFieldsFromPluginsInput<"user", Options["plugins"]> &
		InferDBFieldsFromOptionsInput<Options["user"]>;

export type AdditionalSessionFieldsInput<Options extends OrreryAuthOptions> =
	InferDBFieldsFromPluginsInput<"session", Options["plugins"]> &
		InferDBFieldsFromOptionsInput<Options["session"]>;

export type InferPluginTypes<O extends OrreryAuthOptions> =
	O["plugins"] extends readonly [unknown, ...unknown[]]
		? InferPluginFieldFromTuple<O["plugins"], "$Infer">
		: O["plugins"] extends Array<infer P>
			? UnionToIntersection<ExtractPluginField<P, "$Infer">>
			: {};

export type {
	Account,
	RateLimit,
	Session,
	User,
	Verification,
} from "@orrery/core/db";
