/**
 * @see https://github.com/Dxlxz/orrery-auth/issues/11899
 */

import { orreryAuth } from "orrery-auth";
import { testUtils } from "orrery-auth/plugins";

export const auth = orreryAuth({
	plugins: [testUtils()],
});

export const authWithCaptureOTP = orreryAuth({
	plugins: [testUtils({ captureOTP: true })],
});

const ctx = await auth.$context;
ctx.test.createUser();

const ctxWithCaptureOTP = await authWithCaptureOTP.$context;
ctxWithCaptureOTP.test.getOTP?.("user@example.com");
