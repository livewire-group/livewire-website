/**
 * SVG Spriter Script
 */

'use strict';

const path = require('node:path');
const fs = require('node:fs');
const glob = require('fast-glob');
const mkdirp = require('mkdirp');
const SVGSpriter = require('svg-sprite');

const config = {
	dest: path.resolve(__dirname, '../static/img'),
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
for (const file of glob.sync(path.resolve(__dirname, '../static/img/sprites/*.svg'))) {
	spriter.add(path.resolve(file), path.basename(file), fs.readFileSync(path.resolve(file), { encoding: 'utf8' }));
}

// Compile the sprite
spriter.compile((error, result) => {
	// Run through all configured output modes
	for (const mode in result) {
		if (Object.prototype.hasOwnProperty.call(result, mode)) {
			// Run through all created resources and write them to disk
			for (const type in result[mode]) {
				if (Object.prototype.hasOwnProperty.call(result[mode], type)) {
					mkdirp.sync(path.dirname(result[mode][type].path));
					fs.writeFileSync(result[mode][type].path, result[mode][type].contents);
				}
			}
		}
	}
});
