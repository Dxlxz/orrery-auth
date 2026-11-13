# Orrery Auth Passkey Plugin

## Installation

```bash
# Using npm
npm install orrery-auth @orrery/passkey

# Using yarn
yarn add orrery-auth @orrery/passkey

# Using pnpm
pnpm add orrery-auth @orrery/passkey

# Using bun
bun add orrery-auth @orrery/passkey
```

## Usage

### Server

```typescript
import { orreryAuth } from 'orrery-auth';
import { passkey } from '@orrery/passkey';

export const auth = orreryAuth({
  plugins: [
    passkey({
      rpID: 'example.com',
      rpName: 'My App',
    }),
  ],
});
```

### Client

```typescript
import { createAuthClient } from 'orrery-auth/client';
import { passkeyClient } from '@orrery/passkey/client';

export const authClient = createAuthClient({
  plugins: [passkeyClient()],
});
```

## Documentation

For more information, visit the [Orrery Auth Passkey documentation](https://orrery-auth.com/docs/plugins/passkey).

## License

MIT
