'use strict';

/**
 * database-book service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::database-book.database-book');
