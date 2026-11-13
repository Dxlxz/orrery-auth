/// <reference types="electron" />

import { base64Url } from "@orrery/utils/base64";
import type { OrreryAuthOptions } from "orrery-auth";
import { orreryAuth } from "orrery-auth";
import type { FetchEsque } from "orrery-auth/client";
import { createAuthClient } from "orrery-auth/client";
import { getMigrations } from "orrery-auth/db/migration";
import { oAuthProxy } from "orrery-auth/plugins";
import Database from "better-sqlite3";
import { afterAll, afterEach, beforeAll, test, vi } from "vitest";
import { electronClient } from "../src/client";
import { electron } from "../src/index";
import { electronProxyClient } from "../src/proxy";
import type { ElectronClientOptions } from "../src/types/client";

export const it = test.extend<{
	setProcessType: (type: typeof process.type) => void;
}>({
	setProcessType: async ({}, use) => {
		const originalType = process.type;
		const originalVersions = process.versions;

		const assignProcessType = (type: typeof process.type) => {
			Object.defineProperties(process, {
				type: {
					configurable: true,
					get: () => type,
				},
				versions: {
					configurable: true,
					get: () => ({
						...originalVersions,
						electron: "some-version",
					}),
				},
			});
		};

		try {
			await use(assignProcessType);
		} finally {
			Object.defineProperties(process, {
				type: { configurable: true, value: originalType },
				versions: { configurable: true, value: originalVersions },
			});
		}
	},
});

function getTestInstance(overrideOpts?: OrreryAuthOptions) {
	const storage = new Map<string, any>();
	const options = {
		signInURL: "http://localhost:3000/sign-in",
		protocol: {
			scheme: "myapp",
		},
		storage: {
			getItem: (name) => {
				return storage.get(name) || null;
			},
			setItem: (name, value) => {
				storage.set(name, value);
			},
		},
	} satisfies ElectronClientOptions;

	const auth = orreryAuth({
		baseURL: "http://localhost:3000",
		database: new Database(":memory:"),
		emailAndPassword: {
			enabled: true,
		},
		socialProviders: {
			google: {
				clientId: "test",
				clientSecret: "test",
			},
		},
		plugins: [electron(), oAuthProxy()],
		trustedOrigins: ["myapp:/"],
		...(overrideOpts || {}),
	});

	const customFetchImpl: FetchEsque = (url, init) => {
		const req = new Request(url.toString(), init);
		return auth.handler(req);
	};

	const proxyClient = createAuthClient({
		baseURL: "http://localhost:3000",
		fetchOptions: {
			customFetchImpl,
		},
		plugins: [electronProxyClient(options)],
	});

	const client = createAuthClient({
		baseURL: "http://localhost:3000",
		fetchOptions: {
			customFetchImpl,
		},
		plugins: [electronClient(options)],
	});

	return {
		auth,
		proxyClient,
		client,
		options,
		customFetchImpl,
		storage,
	};
}

export function testUtils(overrideOpts?: OrreryAuthOptions) {
	const testInstance = getTestInstance(overrideOpts);

	beforeAll(async () => {
		const { runMigrations } = await getMigrations(testInstance.auth.options);
		await runMigrations();
		vi.useFakeTimers();
	});
	afterEach(() => {
		testInstance.storage.clear();
	});
	afterAll(() => {
		vi.useRealTimers();
	});

	return testInstance;
}

export function encodeRedirectToken(identifier: string, state: string) {
	return base64Url.encode(
		new TextEncoder().encode(JSON.stringify({ identifier, state })),
	);
}
