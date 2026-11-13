import { apiKey } from "@orrery/api-key";
import { orreryAuth } from "orrery-auth";

/**
 * @see https://github.com/Dxlxz/orrery-auth/issues/9757
 *
 * Declaration emit must not produce TS4023 for MiddlewareOptions
 * when using the api-key plugin.
 */
export const auth = orreryAuth({
	plugins: [apiKey()],
});
