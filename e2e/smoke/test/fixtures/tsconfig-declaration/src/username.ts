import { orreryAuth } from "orrery-auth";
import { username } from "orrery-auth/plugins";
import { expectTypeOf } from "vitest";

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

type User = typeof auth.$Infer.Session.user;
expectTypeOf<User>().toEqualTypeOf<{
	createdAt: Date;
	displayUsername?: string | null | undefined;
	email: string;
	emailVerified: boolean;
	id: string;
	image?: string | null | undefined;
	name: string;
	updatedAt: Date;
	username?: string | null | undefined;
}>();
