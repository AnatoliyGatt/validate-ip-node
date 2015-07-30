# validate-ip for Node.js

Validate IPv4 and IPv6 addresses.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license]][license-url]
[![Travis Build][travis-image]][travis-url]

[![NPM Statistics][npm-statistics-image]][npm-url]

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

[npm-image]: https://img.shields.io/npm/v/validate-ip-node.svg
[npm-url]: https://npmjs.org/package/validate-ip-node
[downloads-image]: https://img.shields.io/npm/dm/validate-ip-node.svg
[downloads-url]: https://npmjs.org/package/validate-ip-node
[license]: https://img.shields.io/npm/l/validate-ip-node.svg
[license-url]: https://github.com/AnatoliyGatt/validate-ip-node/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/validate-ip-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/validate-ip-node
[npm-statistics-image]: https://nodei.co/npm/validate-ip-node.png?downloads=true&downloadRank=true&stars=true