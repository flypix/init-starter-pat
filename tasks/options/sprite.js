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
        padding: 10,
        algorithm: 'binary-tree'
      }
};
