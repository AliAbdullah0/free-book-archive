'use strict';

/**
 * perl-book service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::perl-book.perl-book');
