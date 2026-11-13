import { orreryAuth } from "orrery-auth";
import { organization } from "orrery-auth/plugins";

export const auth = orreryAuth({
	plugins: [organization({})],
});
