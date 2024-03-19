'use strict';

/**
 * university service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::university.university');
