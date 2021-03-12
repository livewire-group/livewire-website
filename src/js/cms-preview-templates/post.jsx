import React from 'react';
import format from 'date-fns/format';
import HeroSection from './components/HeroSection';

// export default class PostPreview extends React.Component {
//   render() {
//     const {entry, widgetFor, getAsset} = this.props;
//     let image = getAsset(entry.getIn(["data", "image"]));
//
//     return <div className="mw6 center ph3 pv4">
//       <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
//       <div className="flex justify-between grey-3">
//         <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
//         <p>Read in x minutes</p>
//       </div>
//       <div className="cms mw6">
//         <p>{ entry.getIn(["data", "description"]) }</p>
//         { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
//         { widgetFor("body") }
//       </div>
//     </div>;
//   }
// }

const PostPreview = ({ entry, widgetFor, getAsset }) => {
	const image = getAsset(entry.getIn(['data', 'image']));
	const title = entry.getIn(['data', 'title']);
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
					<div className="prose-lg mb-5">{widgetFor('description')}</div>
					<div className="prose">{widgetFor('body')}</div>
				</div>
			</div>
		</>
	);
};

export default PostPreview;
