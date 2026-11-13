import { expo } from "@orrery/expo";
import { orreryAuth } from "orrery-auth";
import { drizzleAdapter } from "orrery-auth/adapters/drizzle";

export const auth = orreryAuth({
	database: drizzleAdapter({}, { provider: "sqlite" }),
	plugins: [expo()],
});
