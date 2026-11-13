import { orreryAuth } from "orrery-auth/minimal";
import { organization } from "orrery-auth/plugins";

export const auth = orreryAuth({ plugins: [organization()] });
