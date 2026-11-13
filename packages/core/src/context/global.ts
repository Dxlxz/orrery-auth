import type { AsyncLocalStorage } from "@orrery/core/async_hooks";

interface OrreryAuthGlobal {
	/**
	 * The version of OrreryAuth.
	 */
	version: string;
	/**
	 * Used to track the number of OrreryAuth instances in the same process.
	 *
	 * Debugging purposes only.
	 */
	epoch: number;
	/**
	 * Stores the AsyncLocalStorage instances for each context.
	 */
	context: Record<string, AsyncLocalStorage<unknown>>;
}

const symbol = Symbol.for("orrery-auth:global");
let bind: OrreryAuthGlobal | null = null;

const __context: Record<string, AsyncLocalStorage<unknown>> = {};
const __orreryAuthVersion: string = import.meta.env
	.ORRERY_AUTH_VERSION as string;

/**
 * We store context instance in the globalThis.
 *
 * The reason we do this is that some bundlers, web framework, or package managers might
 * create multiple copies of OrreryAuth in the same process intentionally or unintentionally.
 *
 * For example, yarn v1, Next.js, SSR, Vite...
 *
 * @internal
 */
export function __getOrreryAuthGlobal(): OrreryAuthGlobal {
	if (!(globalThis as any)[symbol]) {
		(globalThis as any)[symbol] = {
			version: __orreryAuthVersion,
			epoch: 1,
			context: __context,
		};
		bind = (globalThis as any)[symbol] as OrreryAuthGlobal;
	}
	bind = (globalThis as any)[symbol] as OrreryAuthGlobal;
	if (bind.version !== __orreryAuthVersion) {
		bind.version = __orreryAuthVersion;
		// Different versions of OrreryAuth are loaded in the same process.
		bind.epoch++;
	}
	return (globalThis as any)[symbol] as OrreryAuthGlobal;
}

export function __getCurrentEndpointContext<T>(): T | undefined {
	const storage = __getOrreryAuthGlobal().context.endpointContextAsyncStorage as
		| AsyncLocalStorage<T>
		| undefined;
	return storage?.getStore();
}

export function getOrreryAuthVersion(): string {
	return __getOrreryAuthGlobal().version;
}
