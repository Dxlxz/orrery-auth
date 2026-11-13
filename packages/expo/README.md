# Orrery Auth Expo Plugin

This plugin integrates Orrery Auth with Expo, allowing you to easily add
authentication to your Expo (React Native) applications.
It supports both Expo native and web apps.

## Installation

To get started, install the necessary packages:

```bash
# Using npm
npm install orrery-auth @orrery/expo

# Using yarn
yarn add orrery-auth @orrery/expo

# Using pnpm
pnpm add orrery-auth @orrery/expo

# Using bun
bun add orrery-auth @orrery/expo
```

You will also need to install `expo-secure-store` for secure session and cookie
storage in your Expo app:

```bash
npm install expo-secure-store
# or
yarn add expo-secure-store
# or
pnpm add expo-secure-store
# or
bun add expo-secure-store
```

## Basic Usage

### Configure the Orrery Auth Backend

Ensure you have a Orrery Auth backend set up.
You can follow the main [Installation Guide][].

Then, add the Expo plugin to your Orrery Auth server configuration (e.g., in
your `auth.ts` or `lib/auth.ts` file):

```typescript
// lib/auth.ts
import { orreryAuth } from 'orrery-auth';
import { expo } from '@orrery/expo'; // Import the server plugin

export const auth = orreryAuth({
  // ...your other Orrery Auth options
  baseURL: 'http://localhost:8081', // The base URL of your application server where the routes are mounted.
  plugins: [expo()], // Add the Expo server plugin
  emailAndPassword: {
    enabled: true,
  },
  // Add other configurations like trustedOrigins
  trustedOrigins: ['myapp://'], // Replace "myapp" with your app's scheme
});
```

### Initialize the Orrery Auth Client in Expo

In your Expo app, initialize the client (e.g., in `lib/auth-client.ts`):

```typescript
// lib/auth-client.ts
import { createAuthClient } from 'orrery-auth/react';
import { expoClient } from '@orrery/expo/client'; // Import the client plugin
import * as SecureStore from 'expo-secure-store';

export const authClient = createAuthClient({
  baseURL: 'http://localhost:8081', // Your Orrery Auth backend URL
  plugins: [
    expoClient({
      scheme: 'myapp', // Your app's scheme (defined in app.json)
      storagePrefix: 'myapp', // A prefix for storage keys
      storage: SecureStore, // Pass SecureStore for token storage
    }),
  ],
});

// You can also export specific methods if you prefer:
// export const { signIn, signUp, useSession } = authClient;
```

Make sure your app’s scheme (e.g., “myapp”) is defined in your `app.json`.

## Documentation

For more detailed information and advanced configurations, please refer to the
documentation:

* **Main Orrery Auth Installation:** [Installation Guide][]
* **Expo Integration Guide:** [Expo Integration Guide][]

## License

MIT

[expo integration guide]: https://www.orrery-auth.com/docs/integrations/expo

[installation guide]: https://www.orrery-auth.com/docs/installation
