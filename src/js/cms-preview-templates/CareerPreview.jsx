import React from 'react';

import HeroBanner from './components/HeroBanner.jsx';

const PostPreview = ({ entry, widgetFor }) => {
	const title = entry.getIn(['data', 'title']);
	const location = entry.getIn(['data', 'location']);
	const employment = entry.getIn(['data', 'employment']);
	// eslint-disable-next-line unicorn/prevent-abbreviations
	const heroProps = {
		title: 'Careers',
	};

	return (
		<>
			<HeroBanner {...heroProps} />
			<div className="bg-white text-black">
				<div className="max-w-prose mx-auto py-12 px-8 md:px-0">
					<h1 className="text-3xl mb-5">{title}</h1>
					<div className="prose-lg mb-5">
						<p>
							{location}
							{location && employment && <>&emsp;|&emsp;</>}
							{employment}
						</p>
					</div>
					<div className="prose">
						{widgetFor('body')}

						<p>
							Contact us: <a href="mailto:careers@livewire.group">careers@livewire.group</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostPreview;
