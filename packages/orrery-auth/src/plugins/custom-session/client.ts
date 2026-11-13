import type { Auth } from "orrery-auth";
import { InferServerPlugin } from "../../client/plugins";
import type { OrreryAuthOptions } from "../../types";

export const customSessionClient = <
	A extends
		| Auth
		| {
				options: OrreryAuthOptions;
		  },
>() => {
	return InferServerPlugin<A, "custom-session">();
};
