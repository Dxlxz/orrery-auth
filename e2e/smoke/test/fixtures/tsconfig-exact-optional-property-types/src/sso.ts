import { sso } from "@orrery/sso";
import { orreryAuth } from "orrery-auth";

export const auth = orreryAuth({
	plugins: [sso()],
});
