import React from 'react';
import format from 'date-fns/format';
import HeroSection from './components/HeroSection';

const PostPreview = ({ entry, widgetFor, getAsset }) => {
	const image = getAsset(entry.getIn(['data', 'image']));
	const title = entry.getIn(['data', 'title']);
	const description = entry.getIn(['data', 'description']) || '';
	const dateString = format(entry.getIn(['data', 'date']), 'ddd, MMM D, YYYY');
	const heroProps = {
		title: 'News',
		underline: dateString,
	};

	return (
		<>
			<HeroSection {...heroProps} />
			<div className="bg-white text-black">
				<div className="max-w-prose mx-auto py-12 px-8 md:px-0">
					<h1 className="text-3xl mb-5">{title}</h1>
					<div className="prose-lg mb-5">
						{description.split('\n\n').map((p) => (
							<p>{p}</p>
						))}
					</div>
					<img className="my-8 mx-auto" src={image} />
					<div className="prose">{widgetFor('body')}</div>
				</div>
			</div>
		</>
	);
};

export default PostPreview;
