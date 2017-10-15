<h1 align="center">
  <!-- Logo -->
  <br/>
  Content-Check
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg" alt="API Stability"/>
  </a>
  <!-- TypeScript -->
  <a href="http://typescriptlang.org">
    <img src="https://img.shields.io/badge/%3C%2F%3E-typescript-blue.svg" alt="TypeScript"/>
  </a>
  <!-- Prettier -->
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg" alt="Styled with prettier"/>
  </a>
  <!-- Travis build -->
  <a href="https://travis-ci.org/DylanPiercey/content-check">
  <img src="https://img.shields.io/travis/DylanPiercey/content-check.svg" alt="Build status"/>
  </a>
  <!-- Coveralls coverage -->
  <a href="https://coveralls.io/github/DylanPiercey/content-check">
    <img src="https://img.shields.io/coveralls/DylanPiercey/content-check.svg" alt="Test Coverage"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/content-check">
    <img src="https://img.shields.io/npm/v/content-check.svg" alt="NPM Version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/content-check">
    <img src="https://img.shields.io/npm/dm/content-check.svg" alt="Downloads"/>
  </a>
  <!-- Size -->
  <a href="https://npmjs.org/package/content-check">
    <img src="https://img.shields.io/badge/size-846b-green.svg" alt="Browser Bundle Size"/>
  </a>
</h1>

Utility for working with the `content-type` header isomorphically.

# Installation

```console
npm install content-check
```

# API

### check(data: any): string|undefined

Attempt to guess the content type for some data. Returns undefined if it could not be guessed.

```javascript
import * as fs from "fs";
import { check } from "content-check";

check("hello"); // "text/plain"
check("<body></body>"); // "text/html"
check({ a: 1 }); // "application/json"
check(new Buffer("hello")); // "application/octet-stream"
check(fs.createReadStream(__dirname + "/index.js")); // "application/javascript"
```

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
