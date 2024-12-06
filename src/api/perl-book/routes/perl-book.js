'use strict';

/**
 * perl-book router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::perl-book.perl-book');
