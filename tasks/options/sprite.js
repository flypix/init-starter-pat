/**
 * Lossless image optimization
 */
'use strict';

var config = require('../config');

module.exports = {
	all: {
        src: config.sprite.src,
        destImg: config.sprite.dest,
        destCSS: config.sprite.spriteCSS,
        cssFormat: 'css',
        'cssOpts': {
	        // Some templates allow for skipping of function declarations
	        'functions': false,

	        // CSS template allows for overriding of CSS selectors
	        'cssClass': function (item) {
	        	return '.ico-' + item.name;
	        }
        },
        padding: 10,
        algorithm: 'binary-tree'
      }
};
