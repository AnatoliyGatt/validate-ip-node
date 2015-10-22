var assert = require('assert');
var validateIP = require('../lib/validate-ip');

describe('validate-ip', function () {
    describe('init', function () {
        it('should return true on valid IPv4 address', function () {
            assert.equal(validateIP('46.19.37.108'), true, 'IPv4 address should be valid');
        });

        it('should return false on invalid IPv4 address', function () {
            assert.equal(validateIP('46.19.37'), false, 'IPv4 address should be invalid');
        });

        it('should return true on valid IPv6 address', function () {
            assert.equal(validateIP('2a02:2770::21a:4aff:feb3:2ee'), true, 'IPv6 address should be valid');
        });

        it('should return false on invalid IPv6 address', function () {
            assert.equal(validateIP('2a02:2770'), false, 'IPv6 address should be invalid');
        });
    });
});