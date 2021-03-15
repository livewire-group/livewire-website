/**
 * SVG Spriter Script
 */

'use strict';

const glob = require('glob');

const SVGSpriter = require('svg-sprite'),
	path = require('path'),
	mkdirp = require('mkdirp'),
	fs = require('fs'),
	config = {
		dest: '../site/static/img',
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
	},
	spriter = new SVGSpriter(config);

// Register some SVG files with the spriter
glob.sync('../site/static/img/sprites/*.svg').forEach((file) => {
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
