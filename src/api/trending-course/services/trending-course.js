'use strict';

/**
 * trending-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trending-course.trending-course');
