/**
 * @module validate-ip
 * @description Provides function to validate IPv4 addresses.
 * @version 1.0.0
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015 Anatoliy Gatt
 * @license MIT
 */

/**
 * @public
 * @function validateIP
 * @description Validate IPv4 address.
 * @param {String} ip - IPv4 address.
 * @returns {Boolean} - Determine whether IPv4 address is valid.
 */

function validateIP(ip) {
    return !!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);
}

/**
 * @public
 * @description Expose function to validate IPv4 addresses.
 * @param {String} ip - IPv4 address.
 * @returns {Boolean} - Determine whether IPv4 address is valid.
 */

module.exports = function(ip) {
    return validateIP(ip);
};