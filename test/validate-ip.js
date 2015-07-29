var assert = require("assert");
var validateIP = require("../lib/validate-ip");

describe("validate-ip", function() {
    describe("init", function() {
        it("should return true on valid IP address", function() {
            assert.equal(validateIP("46.19.37.108"), true, "IP address should be valid");
        });

        it("should return false on invalid IP address", function() {
            assert.equal(validateIP("46.19.37"), false, "IP address should be invalid");
        });
    });
});