import React from 'react';

import HeroBanner from './components/HeroBanner.jsx';

const HomePreview = ({ entry, widgetsFor }) => {
	const title = entry.getIn(['data', 'title']);
	const heroProperties = {
		title,
	};

	return (
		<>
			<HeroBanner {...heroProperties} />

			{widgetsFor('sections').map((section, index) => {
				const title = section.getIn(['data', 'title']);
				const image = section.getIn(['data', 'image']);
				const imageAlt = section.getIn(['data', 'imageAlt']);

				const reverse = Boolean(index % 2);

				return (
					<div className={'py-12 ' + (reverse ? 'bg-alternate' : '')}>
						<div
							className={
								'flex flex-col px-8 justify-between items-center md:flex-row max-w-7xl mx-auto ' +
								(reverse ? 'md:flex-row-reverse' : '')
							}
						>
							<div className="w-56 md:w-4/12">
								{image && <img src={image} alt={imageAlt} className="mb-8 md:mb-0" />}
							</div>

							<div className="w-full md:w-7/12">
								{title && (
									<div className="mb-8">
										<h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary uppercase">{title}</h2>
									</div>
								)}

								<div
									className={
										'text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed ' + reverse
											? 'ml-auto'
											: ''
									}
								>
									<div>{section.getIn(['widgets', 'text'])}</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default HomePreview;
