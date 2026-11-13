//#region Re-exports necessaries from core module
export type { StandardSchemaV1 } from "@orrery/core";
export * from "@orrery/core";
export { getCurrentAdapter } from "@orrery/core/context";
export * from "@orrery/core/db";
export * from "@orrery/core/env";
export * from "@orrery/core/error";
export * from "@orrery/core/oauth2";
export * from "@orrery/core/utils/error-codes";
export * from "@orrery/core/utils/id";
export * from "@orrery/core/utils/json";
//#endregion
export { orreryAuth } from "./auth/full";
// @ts-expect-error
export * from "./types";
export * from "./utils";

// export this as we are referencing OAuth2Tokens in the `refresh-token` api as return type

// telemetry exports for CLI and consumers
export {
	createTelemetry,
	getTelemetryAuthConfig,
	type TelemetryEvent,
} from "@orrery/telemetry";
// re-export third party types
// @ts-expect-error
export type * from "better-call";
export type { JSONWebKeySet, JWTPayload } from "jose";
export type * from "zod";
export { APIError } from "./api";
