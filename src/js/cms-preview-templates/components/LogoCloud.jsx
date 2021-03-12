/**
 * LogoCloud
 */

import React from 'react';

const LogoCloud = ({ title, logos }) => (
	<div className="bg-white text-black">
		<div className="max-w-7xl mx-auto pt-12 pb-16 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
			<h2 className="text-center text-3xl"> {title}</h2>
			<div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
				{logos?.map((logo, index) => {
					const url = logo.get('url');
					const image = logo.get('image');
					const name = logo.get('name');

					const L = image ? (
						<img className="h-12" src={image} alt={name} />
					) : (
						<span className="font-display">{name}</span>
					);
					return (
						<div
							key={index}
							className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
						>
							{url ? <a href={url}>{L}</a> : L}
						</div>
					);
				})}
			</div>
		</div>
	</div>
);

export default LogoCloud;
