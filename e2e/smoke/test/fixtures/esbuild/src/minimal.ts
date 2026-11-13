import { expo } from "@orrery/expo";
import { drizzleAdapter } from "orrery-auth/adapters/drizzle";
import { orreryAuth } from "orrery-auth/minimal";

export const auth = orreryAuth({
	database: drizzleAdapter({}, { provider: "sqlite" }),
	plugins: [expo()],
});
