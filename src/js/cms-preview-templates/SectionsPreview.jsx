import React from 'react';
import LogoCloud from './components/LogoCloud.jsx';
import HeroSection from './components/HeroSection.jsx';

const HomePreview = ({ entry, widgetsFor }) => {
	const title = entry.getIn(['data', 'title']);
	const heroProps = {
		title,
	};

	return (
		<>
			<HeroSection {...heroProps} />

			{widgetsFor('sections').map((section, index) => {
				const title = section.getIn(['data', 'title']);
				const isDark = Boolean(section.getIn(['data', 'dark']));

				const reverse = Boolean(index % 2);

				const classes = isDark ? 'bg-black text-white py-24' : 'bg-white text-black py-24';
				let innerClasses = 'max-w-7xl text-xl md:text-xl lg:text-2xl prose-xl md:prose-2xl lg:prose-3';

				if (reverse) innerClasses += ' text-right ml-auto';

				return (
					<div className={classes}>
						{title && (
							<div className="max-w-7xl mx-auto px-8 mb-8">
								<div className={innerClasses}>
									<h2>{title}</h2>
								</div>
							</div>
						)}

						<div className="max-w-7xl mx-auto px-8 mb-8">
							<div className={innerClasses}>
								<div>{section.getIn(['widgets', 'text'])}</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default HomePreview;
