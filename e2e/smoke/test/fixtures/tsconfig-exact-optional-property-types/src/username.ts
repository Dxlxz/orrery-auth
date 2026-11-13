import { orreryAuth } from "orrery-auth";
import { username } from "orrery-auth/plugins";

export const auth = orreryAuth({
	emailAndPassword: {
		enabled: true,
	},
	plugins: [
		username({
			minUsernameLength: 4,
			maxUsernameLength: 15,
		}),
	],
});
