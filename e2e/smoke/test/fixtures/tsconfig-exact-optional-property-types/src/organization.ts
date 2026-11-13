import { orreryAuth } from "orrery-auth";
import { organization } from "orrery-auth/plugins";

export const auth = orreryAuth({
	plugins: [
		organization({
			requireEmailVerificationOnInvitation: true,
			creatorRole: "owner",
			teams: {
				enabled: true,
			},
			dynamicAccessControl: {
				maximumRolesPerOrganization: 20,
				enabled: true,
			},
		}),
	],
});

export const auth2 = orreryAuth({
	plugins: [organization({})],
});
