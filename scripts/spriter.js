/**
 * SVG Spriter Script
 */

'use strict';

const glob = require('glob');
const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');
const SVGSpriter = require('svg-sprite');

const config = {
	dest: path.resolve(__dirname, '../site/static/img'),
	shape: {},
	svg: {
		xmlDeclaration: false,
		doctypeDeclaration: false,
		namespaceIDs: false,
		dimensionAttributes: false,
	},
	mode: {
		symbol: {
			dest: '',
			sprite: 'sprites.svg',
		},
	},
};

const spriter = new SVGSpriter(config);

// Register some SVG files with the spriter
glob
	.sync(path.resolve(__dirname, '../site/static/img/sprites/*.svg'))
	.forEach((file) => {
		spriter.add(
			path.resolve(file),
			path.basename(file),
			fs.readFileSync(path.resolve(file), { encoding: 'utf-8' })
		);
	});

// Compile the sprite
spriter.compile(function (error, result, cssData) {
	// Run through all configured output modes
	for (let mode in result) {
		// Run through all created resources and write them to disk
		for (let type in result[mode]) {
			mkdirp.sync(path.dirname(result[mode][type].path));
			fs.writeFileSync(result[mode][type].path, result[mode][type].contents);
		}
	}
});
