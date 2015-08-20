# validate-ip for Node.js

Validate IPv4 and IPv6 addresses.

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]

[![NPM Package Statistics][npm-package-statistics-badge]][npm-package-url]

## Installation

`npm install validate-ip-node`

## Usage Example

```javascript
var validateIP = require("validate-ip-node");

console.log(validateIP("46.19.37.108"));
console.log(validateIP("46.19.37"));

console.log(validateIP("2a02:2770::21a:4aff:feb3:2ee"));
console.log(validateIP("2a02:2770"));
```

***

```javascript
true
false
true
false
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-package-url]: https://npmjs.org/package/validate-ip-node

[npm-package-version-badge]: https://img.shields.io/npm/v/validate-ip-node.svg?style=flat-square

[npm-package-license-badge]: https://img.shields.io/npm/l/validate-ip-node.svg?style=flat-square
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/validate-ip-node.svg?style=flat-square

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/validate-ip-node.svg?style=flat-square
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/validate-ip-node

[npm-package-statistics-badge]: https://nodei.co/npm/validate-ip-node.png?downloads=true&downloadRank=true&stars=true