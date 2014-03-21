/**
 * Watching for changes
 */
'use strict';

var config = require('../config');

module.exports = {
	scss: {
		files: config.sass.files,
		tasks: 'sass:dev'
	},

	js: {
		files: config.jsHintFiles,
		tasks: ['jshint', 'connect:test', 'karma:unit']
	},

	sprite: {
		files: config.sprite.src,
		tasks:['sprite:all']
	},

	karma: {
		files: [config.jsHintFiles, config.tests.src],
		tasks: ['connect:test', 'karma:unit']
	}
};
