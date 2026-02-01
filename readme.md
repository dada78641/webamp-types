[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/) [![npm version](https://badge.fury.io/js/@dada78641%2Fwebamp-types.svg)](https://badge.fury.io/js/@dada78641%2Fwebamp-types)

# Webamp type declarations

This package contains single-file type declarations for Webamp.

Webamp contains types, but they are not built in a way that allows them to be resolved in TypeScript projects configured to use the NodeNext module resolution method. This package combines all type declaration files into single .d.mts output files, which does allow them to be used in this way.

## Usage

Install using npm:

```bash
npm i -D @dada78641/webamp-types@^2.2.0-types.1
```

Add a declaration file:

```ts
// webamp.d.mts
import type * as WebampTypes from '@dada78641/webamp-types';

declare module 'webamp' {
  export = WebampTypes.default;
}
```

## License

MIT license.
