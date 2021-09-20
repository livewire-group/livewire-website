import React from 'react';
import format from 'date-fns/format';
import HeroSection from './components/HeroSection';

const PostPreview = ({ entry, widgetFor, getAsset }) => {
	const title = entry.getIn(['data', 'title']);
	const location = entry.getIn(['data', 'location']);
	const employment = entry.getIn(['data', 'employment']);
	const heroProps = {
		title: 'Careers',
	};

	return (
		<>
			<HeroSection {...heroProps} />
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
