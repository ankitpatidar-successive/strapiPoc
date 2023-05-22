'use strict';

/**
 * blue-frog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blue-frog.blue-frog');
