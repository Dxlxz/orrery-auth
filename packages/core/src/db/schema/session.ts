import * as z from "zod";
import type { OrreryAuthOptions, Prettify } from "../../types";
import type {
	InferDBFieldsFromOptions,
	InferDBFieldsFromPlugins,
} from "../type";
import { coreSchema } from "./shared";

export const sessionSchema = coreSchema.extend({
	userId: z.coerce.string(),
	expiresAt: z.date(),
	token: z.string(),
	ipAddress: z.string().nullish(),
	userAgent: z.string().nullish(),
});

export type BaseSession = z.infer<typeof sessionSchema>;

/**
 * Session schema type used by orrery-auth, note that it's possible that session could have additional fields
 */
export type Session<
	DBOptions extends OrreryAuthOptions["session"] = OrreryAuthOptions["session"],
	Plugins extends OrreryAuthOptions["plugins"] = OrreryAuthOptions["plugins"],
> = Prettify<
	z.infer<typeof sessionSchema> &
		InferDBFieldsFromOptions<DBOptions> &
		InferDBFieldsFromPlugins<"session", Plugins>
>;
