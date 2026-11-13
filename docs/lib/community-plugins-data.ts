export interface CommunityPlugin {
	name: string;
	url: string;
	description: string;
	author: {
		name: string;
		github: string;
		avatar: string;
	};
}

export const communityPlugins: CommunityPlugin[] = [
	{
		name: "@dymo-api/orrery-auth",
		url: "https://github.com/TPEOficial/dymo-api-orrery-auth",
		description:
			"Sign Up Protection and validation of disposable emails (the world's largest database with nearly 14 million entries).",
		author: {
			name: "TPEOficial",
			github: "TPEOficial",
			avatar: "https://github.com/TPEOficial.png",
		},
	},
	{
		name: "orrery-auth-harmony",
		url: "https://github.com/gekorm/orrery-auth-harmony/",
		description:
			"Email & phone normalization and additional validation, blocking over 55,000 temporary email domains.",
		author: {
			name: "GeKorm",
			github: "GeKorm",
			avatar: "https://github.com/GeKorm.png",
		},
	},
	{
		name: "validation-orrery-auth",
		url: "https://github.com/Daanish2003/validation-orrery-auth",
		description:
			"Validate API request using any validation library (e.g., Zod, Yup)",
		author: {
			name: "Daanish2003",
			github: "Daanish2003",
			avatar: "https://github.com/Daanish2003.png",
		},
	},
	{
		name: "orrery-auth-localization",
		url: "https://github.com/marcellosso/orrery-auth-localization",
		description:
			"Localize and customize orrery-auth messages with easy translation and message override support.",
		author: {
			name: "marcellosso",
			github: "marcellosso",
			avatar: "https://github.com/marcellosso.png",
		},
	},
	{
		name: "orrery-auth-attio-plugin",
		url: "https://github.com/tobimori/orrery-auth-attio-plugin",
		description: "Sync your products Orrery Auth users & workspaces with Attio",
		author: {
			name: "tobimori",
			github: "tobimori",
			avatar: "https://github.com/tobimori.png",
		},
	},
	{
		name: "orrery-auth-cloudflare",
		url: "https://github.com/zpg6/orrery-auth-cloudflare",
		description:
			"Seamlessly integrate with Cloudflare Workers, D1, Hyperdrive, KV, R2, and geolocation services. Includes CLI for project generation, automated resource provisioning on Cloudflare, and database migrations. Supports Next.js, Hono, and more!",
		author: {
			name: "zpg6",
			github: "zpg6",
			avatar: "https://github.com/zpg6.png",
		},
	},
	{
		name: "expo-orrery-auth-passkey",
		url: "https://github.com/kevcube/expo-orrery-auth-passkey",
		description:
			"Better-auth client plugin for using passkeys on mobile platforms in expo apps. Supports iOS, macOS, Android (and web!) by wrapping the existing orrery-auth passkey client plugin.",
		author: {
			name: "kevcube",
			github: "kevcube",
			avatar: "https://github.com/kevcube.png",
		},
	},
	{
		name: "orrery-auth-credentials-plugin",
		url: "https://github.com/erickweil/orrery-auth-credentials-plugin",
		description: "LDAP authentication plugin for Orrery Auth.",
		author: {
			name: "erickweil",
			github: "erickweil",
			avatar: "https://github.com/erickweil.png",
		},
	},
	{
		name: "orrery-auth-opaque",
		url: "https://github.com/TheUntraceable/orrery-auth-opaque",
		description:
			"Provides database-breach resistant authentication using the zero-knowledge OPAQUE protocol.",
		author: {
			name: "TheUntraceable",
			github: "TheUntraceable",
			avatar: "https://github.com/theuntraceable.png",
		},
	},
	{
		name: "orrery-auth-firebase-auth",
		url: "https://github.com/yultyyev/orrery-auth-firebase-auth",
		description:
			"Firebase Authentication plugin for Orrery Auth with built-in email service, Google Sign-In, and password reset functionality.",
		author: {
			name: "yultyyev",
			github: "yultyyev",
			avatar: "https://github.com/yultyyev.png",
		},
	},
	{
		name: "orrery-auth-university",
		url: "https://github.com/LuyxLLC/orrery-auth-university",
		description:
			"University plugin for allowing only specific email domains to be passed through. Includes a University model with name and domain.",
		author: {
			name: "Fyrlex",
			github: "Fyrlex",
			avatar: "https://github.com/Fyrlex.png",
		},
	},
	{
		name: "orrery-auth-paystack",
		url: "https://github.com/alexasomba/orrery-auth-paystack",
		description:
			"Production-ready Paystack billing plugin for Orrery Auth with native and locally managed subscriptions, one-time payments, organization billing, trials, secure webhooks, automated limits, and more.",
		author: {
			name: "alexasomba",
			github: "alexasomba",
			avatar: "https://github.com/alexasomba.png",
		},
	},
	{
		name: "orrery-auth-flutterwave",
		url: "https://github.com/alexasomba/orrery-auth-flutterwave",
		description:
			"Flutterwave plugin for Orrery Auth — integrates Flutterwave payments, subscriptions, organization billing, marketplace split payments, webhooks, refunds, reconciliation, and more.",
		author: {
			name: "alexasomba",
			github: "alexasomba",
			avatar: "https://github.com/alexasomba.png",
		},
	},
	{
		name: "orrery-auth-solana-payments",
		url: "https://github.com/alexasomba/orrery-auth-solana-payments",
		description:
			"One-time Solana payment integration for Orrery Auth with Solana Pay checkout, server-side transfer verification, payment tracking, organization payments, and more.",
		author: {
			name: "alexasomba",
			github: "alexasomba",
			avatar: "https://github.com/alexasomba.png",
		},
	},
	{
		name: "orrery-auth-lark",
		url: "https://github.com/uselark/orrery-auth-lark",
		description:
			"Lark billing plugin that automatically creates customers and subscribes them to free plans on signup.",
		author: {
			name: "Vijit",
			github: "vijit-lark",
			avatar: "https://github.com/vijit-lark.png",
		},
	},
	{
		name: "stargate-orrery-auth",
		url: "https://github.com/neiii/stargate-orrery-auth",
		description:
			"Gate access to resources based on whether the user has starred a repository",
		author: {
			name: "neiii",
			github: "neiii",
			avatar: "https://github.com/neiii.png",
		},
	},
	{
		name: "@sequenzy/orrery-auth",
		url: "https://github.com/Sequenzy/sequenzy-orrery-auth",
		description:
			"Automatically add users to Sequenzy mailing lists on signup for seamless email marketing integration.",
		author: {
			name: "Sequenzy",
			github: "sequenzy",
			avatar: "https://sequenzy.com/logo.png",
		},
	},
	{
		name: "orrery-auth-nostr",
		url: "https://github.com/leon-wbr/orrery-auth-nostr",
		description: "Nostr authentication plugin for Orrery Auth (NIP-98).",
		author: {
			name: "leon-wbr",
			github: "leon-wbr",
			avatar: "https://github.com/leon-wbr.png",
		},
	},
	{
		name: "@ramiras123/orrery-auth-strapi",
		url: "https://github.com/Ramiras123/orrery-auth-strapi",
		description: "Plugin for authorization via strapi",
		author: {
			name: "Ramiras123",
			github: "ramiras123",
			avatar: "https://github.com/ramiras123.png",
		},
	},
	{
		name: "orrery-auth-razorpay",
		url: "https://github.com/iamjasonkendrick/orrery-auth-razorpay",
		description:
			"Razorpay payment plugin for Orrery Auth — integrates Razorpay payments, webhooks, and subscription flows.",
		author: {
			name: "iamjasonkendrick",
			github: "iamjasonkendrick",
			avatar: "https://github.com/iamjasonkendrick.png",
		},
	},
	{
		name: "orrery-auth-payu",
		url: "https://github.com/iamjasonkendrick/orrery-auth-payu",
		description:
			"PayU payment plugin for Orrery Auth — integrates PayU payments, webhooks, and subscription flows.",
		author: {
			name: "iamjasonkendrick",
			github: "iamjasonkendrick",
			avatar: "https://github.com/iamjasonkendrick.png",
		},
	},
	{
		name: "@agentaos/orrery-auth",
		url: "https://github.com/AgentaOS/agentaos/tree/main/packages/orrery-auth",
		description:
			"Orrery Auth plugin for AgentaOS merchant-of-record checkouts, subscriptions, and verified webhooks.",
		author: {
			name: "AgentaOS",
			github: "AgentaOS",
			avatar: "https://github.com/AgentaOS.png",
		},
	},
	{
		name: "better-invite",
		url: "https://github.com/better-invite/better-invite",
		description:
			"Easily create and manage user invitations, allowing you to invite users with customizable settings and track usage.",
		author: {
			name: "Sandy",
			github: "0-Sandy",
			avatar: "https://github.com/0-Sandy.png",
		},
	},
	{
		name: "orrery-auth-usos",
		url: "https://github.com/qamarq/orrery-auth-usos",
		description:
			"USOS plugin for Orrery Auth - allows students to authenticate using their university credentials via the USOS API. Using oauth 1a.",
		author: {
			name: "qamarq",
			github: "qamarq",
			avatar: "https://github.com/qamarq.png",
		},
	},
	{
		name: "orrery-auth-devtools",
		url: "https://github.com/C-W-D-Harshit/orrery-auth-devtools",
		description:
			"A devtools panel for Orrery Auth that lets you create managed test users from templates, switch between sessions instantly, inspect live session data, and edit fields like roles on the fly. All from a floating React UI that only runs in development.",
		author: {
			name: "C-W-D-Harshit",
			github: "C-W-D-Harshit",
			avatar: "https://github.com/C-W-D-Harshit.png",
		},
	},
	{
		name: "orrery-auth-audit-logs",
		url: "https://github.com/ejirocodes/orrery-auth-audit-logs",
		description:
			"Audit log plugin for Orrery Auth. Auto-captures auth events with severity inference, PII redaction, custom storage backends, and retention policies.",
		author: {
			name: "ejirocodes",
			github: "ejirocodes",
			avatar: "https://github.com/ejirocodes.png",
		},
	},
	{
		name: "better-near-auth",
		url: "https://github.com/elliotBraem/better-near-auth",
		description:
			"Sign in with NEAR plugin with built-in gasless relay for on-chain delegate actions.",
		author: {
			name: "efiz.near",
			github: "elliotBraem",
			avatar: "https://github.com/elliotBraem.png",
		},
	},
	{
		name: "ton-orrery-auth",
		url: "https://github.com/mhbdev/ton-orrery-auth",
		description: "Sign in with Ton Connect",
		author: {
			name: "mhbdev",
			github: "mhbdev",
			avatar: "https://github.com/mhbdev.png",
		},
	},
	{
		name: "@dbsc-toolkit/orrery-auth",
		url: "https://www.npmjs.com/package/@dbsc-toolkit/orrery-auth",
		description:
			"Device Bound Session Credentials (DBSC) — binds sessions to a device-resident key so a stolen cookie can't be replayed from another machine. Native binding via TPM or Secure Enclave on Chromium 145+, with a Web Crypto polyfill for Firefox, Safari, and older Chromium.",
		author: {
			name: "SulimanAbdulrazzaq",
			github: "SulimanAbdulrazzaq",
			avatar: "https://github.com/SulimanAbdulrazzaq.png",
		},
	},
	{
		name: "@marinedotsh/orrery-auth-referral",
		url: "https://github.com/marinedotsh/orrery-auth-referral",
		description: "A Orrery Auth plugin for adding user referrals to your app.",
		author: {
			name: "Shivam Gupta",
			github: "shivamrun",
			avatar: "https://github.com/shivamrun.png",
		},
	},
	{
		name: "@amank-root/orrery-auth-razorpay",
		url: "https://github.com/Amank-root/orrery-auth-razorpay",
		description:
			"Full Razorpay integration plugin for Orrery Auth — subscriptions, one-time payments, invoices, refunds, customers, add-ons, items, and webhook handling.",
		author: {
			name: "Aman Kushwaha",
			github: "Amank-root",
			avatar: "https://github.com/Amank-root.png",
		},
	},
	{
		name: "orrery-auth-instagram",
		url: "https://github.com/rajatsandeepsen/orrery-auth-instagram",
		description: "Instagram Provider for Orrery Auth",
		author: {
			name: "Rajat Sandeep",
			github: "rajatsandeepsen",
			avatar: "https://github.com/rajatsandeepsen.png",
		},
	},
	{
		name: "orrery-auth-zoho",
		url: "https://github.com/rajatsandeepsen/orrery-auth-zoho",
		description: "Zoho Provider for Orrery Auth",
		author: {
			name: "Rajat Sandeep",
			github: "rajatsandeepsen",
			avatar: "https://github.com/rajatsandeepsen.png",
		},
	},
	{
		name: "orrery-auth-snapchat",
		url: "https://github.com/rajatsandeepsen/orrery-auth-snapchat",
		description: "Snapchat Provider for Orrery Auth",
		author: {
			name: "Rajat Sandeep",
			github: "rajatsandeepsen",
			avatar: "https://github.com/rajatsandeepsen.png",
		},
	},
	{
		name: "BYO (byo-oss)",
		url: "https://byo.dev",
		description: "Open-source packages for orrery-auth apps.",
		author: {
			name: "byo-oss",
			github: "byo-oss",
			avatar: "https://github.com/byo-oss.png",
		},
	},
	{
		name: "orrery-auth-email-challenge",
		url: "https://github.com/lapluviosilla/orrery-auth-email-challenge",
		description:
			"Passwordless, multi-device email challenge — one challenge completable by an approval link or OTP, with browser-bound session issuance for safe cross-device sign-in.",
		author: {
			name: "lapluviosilla",
			github: "lapluviosilla",
			avatar: "https://github.com/lapluviosilla.png",
		},
	},
	{
		name: "@better-geetest/orrery-auth-plugin-gt4",
		url: "https://github.com/typed-sigterm/better-geetest/tree/main/packages/orrery-auth-plugin-gt4",
		description:
			"Integrate GeeTest gt4 bot protection by adding captcha verification for key endpoints.",
		author: {
			name: "Typed SIGTERM",
			github: "typed-sigterm",
			avatar: "https://github.com/typed-sigterm.png",
		},
	},
	{
		name: "orrery-auth-evp",
		url: "https://github.com/qamarq/orrery-auth-evp",
		description:
			"Email Verification Protocol (Chrome origin trial) plugin - lets a supporting browser verify mailbox ownership in the background and sign the user in, with automatic fallback to any other sign-in method when unsupported.",
		author: {
			name: "qamarq",
			github: "qamarq",
			avatar: "https://github.com/qamarq.png",
		},
	},
	{
		name: "@eusend_dev/orrery-auth",
		url: "https://github.com/eusend-dev/eusend-orrery-auth",
		description:
			"Auth emails (verification, password reset, OTP, magic link, organization invitations) through eusend, an EU-hosted email API, with brandable templates, non-blocking sends, and optional contact sync for verified users.",
		author: {
			name: "eusend",
			github: "eusend-dev",
			avatar: "https://github.com/eusend-dev.png",
		},
	},
	{
		name: "@stellartools/betterauth-adapter",
		url: "https://github.com/payrouteshq/stellartools",
		description:
			"Integrate Stellar blockchain payments to your Orrery Auth setup.",
		author: {
			name: "Emmanuel Odii",
			github: "devodii",
			avatar: "https://github.com/devodii.png",
		},
	},
	{
		name: "@octopi-ai/better-enrollment",
		url: "https://github.com/OctopiAI/better-enrollment",
		description:
			"Invite-only sign-ups, role-merging invite links, and organization invites. Supports private (email-bound) and public (shareable, capped, revocable) invites, organization seat limits, and an append-only audit trail.",
		author: {
			name: "Talat Mahmud",
			github: "FalconiZzare",
			avatar: "https://github.com/FalconiZzare.png",
		},
	},
	{
		name: "good-webhooks",
		url: "https://github.com/pplytas/good-webhooks",
		description:
			"Authenticated webhook endpoint management with typed client APIs, scoped permissions, signing-secret rotation, and optional self-hosted delivery.",
		author: {
			name: "Panagiotis Plytas",
			github: "pplytas",
			avatar: "https://github.com/pplytas.png",
		},
	},
	{
		name: "orrery-auth-saml-idp",
		url: "https://github.com/mmcintosh/orrery-auth-saml-idp",
		description:
			"Turn Orrery Auth into a SAML 2.0 identity provider for Microsoft 365, Google Workspace, Okta, Salesforce, AWS and other service providers. SP registry with metadata import, signed and encrypted assertions, Single Logout, and step-up MFA.",
		author: {
			name: "Mark McIntosh",
			github: "mmcintosh",
			avatar: "https://github.com/mmcintosh.png",
		},
	},
	{
		name: "orrery-auth-multi-tenant",
		url: "https://github.com/Weesofficial/orrery-auth-multi-tenant",
		description:
			"Multi-tenancy by subdomain, custom domain or path: resolves the tenant from the request, binds each session to its tenant, rejects cross-tenant requests and unbound sessions, and scopes the organization, admin, SSO and API key plugins to the tenant.",
		author: {
			name: "Weesofficial",
			github: "Weesofficial",
			avatar: "https://github.com/Weesofficial.png",
		},
	},
	{
		name: "orrery-auth-captcha",
		url: "https://github.com/klynglabs/orrery-auth-captcha",
		description:
			"Client half of the captcha plugin. Solves Cloudflare Turnstile, reCAPTCHA v3, hCaptcha, or CaptchaFox challenges in the background and attaches the token to protected requests automatically. Requires orrery-auth 1.7+.",
		author: {
			name: "aarmful",
			github: "aarmful",
			avatar: "https://github.com/aarmful.png",
		},
	},
	{
		name: "tauri-plugin-orrery-auth",
		url: "https://github.com/laakal/tauri-plugin-orrery-auth",
		description:
			"Orrery Auth for Tauri desktop apps: browser sign-in with PKCE handed back by deep link or loopback, a session held in Rust (OS keychain), and a webview that never sees a token. Tauri 2 (0.1) and Tauri 3 alpha (0.2).",
		author: {
			name: "Enes Koç",
			github: "laakal",
			avatar: "https://github.com/laakal.png",
		},
	},
	{
		name: "orrery-auth-loginllama",
		url: "https://github.com/joshghent/orrery-auth-loginllama",
		description:
			"Scores each email/password sign-in for account takeover risk (Tor, VPN, impossible travel, bots) with LoginLlama and blocks risky ones before the session is created. Fails open if the API is slow or down.",
		author: {
			name: "Josh Ghent",
			github: "joshghent",
			avatar: "https://github.com/joshghent.png",
		},
	},
	{
		name: "orrery-auth-waitlist",
		url: "https://github.com/slargat/orrery-auth-waitlist",
		description:
			"A complete waitlist: a live queue with positions, status links, referrals, single-use invites, manager tools, and invite-only sign-up across every sign-up method.",
		author: {
			name: "Seifeddine Largat",
			github: "slargat",
			avatar: "https://github.com/slargat.png",
		},
	},
	{
		name: "orrery-auth-trustware",
		url: "https://github.com/danielmerja/orrery-auth-trustware",
		description:
			"Crypto billing for Orrery Auth, settled through Trustware: subscriptions with renewal invoices and grace periods, one-time purchases, prorated plan changes, trials, organization billing, and feature and limit access control.",
		author: {
			name: "Daniel Merja",
			github: "danielmerja",
			avatar: "https://github.com/danielmerja.png",
		},
	},
	{
		name: "@mockatoo/connect-orrery-auth",
		url: "https://github.com/mockatoo/connectors/tree/main/packages/connectors/orrery-auth",
		description:
			"Hosted mock OAuth provider for development, E2E tests, CI and coding agents. Drop-in mocks of the Google, GitHub, Microsoft, Apple, Discord, LinkedIn, X and Facebook providers, so app code and the real token exchange stay unchanged, with no app registration or real accounts.",
		author: {
			name: "Tianhui Michael Li",
			github: "tianhuil",
			avatar: "https://github.com/tianhuil.png",
		},
	},
	{
		name: "@mailkite/orrery-auth-inbox",
		url: "https://github.com/mailkite/mailkite-orrery-auth-inbox",
		description:
			"Give your app a real mailbox. Receive inbound email as signature-verified webhooks, then list, read, thread and reply through session-scoped endpoints — scoped per user or per organization.",
		author: {
			name: "MailKite",
			github: "mailkite",
			avatar: "https://github.com/mailkite.png",
		},
	},
];
