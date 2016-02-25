/**
 * @module index
 * @description Entry point for validate-ip-node module.
 * @version 1.0.6
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @description Expose function to validate IP addresses.
 * @returns {Function} - Function to validate IP addresses.
 */

module.exports = require('./lib/validate-ip');