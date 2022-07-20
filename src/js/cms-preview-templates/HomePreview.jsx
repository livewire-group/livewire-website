import React from 'react';
import LogoCloud from './components/LogoCloud.jsx';

const HomePreview = ({ entry, getAsset, ...rest }) => {
	const heroVideo = getAsset(entry.getIn(['data', 'heroVideo']));
	const heroFallback = getAsset(entry.getIn(['data', 'heroFallback']));

	const title = entry.getIn(['data', 'title']);
	const subtitle = entry.getIn(['data', 'subtitle']);
	const intros = entry.getIn(['data', 'intros']);
	const brands = entry.getIn(['data', 'brands']);
	console.log('brands', brands);

	return (
		<div>
			<div className="aspect aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-w-10 xl:aspect-h-5">
				<h1 className="sr-only">Livewire Group</h1>
				{heroVideo ? (
					<video
						preload="true"
						playsInline
						autoPlay
						loop
						muted
						className="transform scale-150 md:scale-125 lg:scale-100"
					>
						<source src={heroVideo} />
						{heroFallback && <img src={heroFallback} alt="Livewire" />}
					</video>
				) : (
					heroFallback && <img src={heroFallback} alt="Livewire" />
				)}
			</div>

			<div
				className="bg-white text-black relative"
				style={{
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'top left',
					backgroundImage:
						"url('https://res.cloudinary.com/livewire-group/image/upload/q_auto,f_auto/v1615286400/vi/pattern/BlackWhite/Fragment/Livewire_Pattern_Fragment_3_BlackWhite_riuxss.png')",
					backgroundSize: '20vw',
				}}
			>
				<div className="max-w-7xl mx-auto py-24 md:py-36 px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="mt-1 font-display text-3xl md:text-4xl lg:text-5xl sm:text-6xl sm:tracking-tight lg:text-7xl">
							{title}
						</h1>
						{subtitle && <p className="max-w-xl mt-5 mx-auto text-lg md:text-xl lg:text-2xl lg:text-3xl">{subtitle}</p>}
					</div>
				</div>
				<img
					className="not-sr-only absolute right-0 bottom-0 md:bottom-7 w-1/4 md:w-40 lg:w-60 transform translate-y-1/2 rotate-90"
					src="https://res.cloudinary.com/livewire-group/image/upload/q_auto,f_auto/v1615286412/vi/pattern/BlackWhite/Fragment/Livewire_Pattern_Fragment_6_BlackWhite_irv8xa.png"
				/>
			</div>

			{Boolean(intros?.size) && (
				<div className="max-w-4xl mx-auto py-8 md:py-12 lg:py-24 flex flex-wrap home:intros">
					{intros.map((intro, index) => (
						<div className="md:w-1/2" key={index}>
							<div className="p-8">
								<h2 className="text-3xl mb-4">{intro.get('heading')}</h2>
								<p className="text-xl leading-relaxed">{intro.get('text')}</p>
							</div>
						</div>
					))}
				</div>
			)}

			<div className="bg-primary text-black text-center py-12 px-4 lg:px-16">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-4xl mb-8">What we do</h2>
					<p className="my-8 text-lg leading-relaxed">
						Our services encompass end to end brand services, including talent engagement, programmatic and digital
						advertising, gaming and esports marketing, direct publisher opportunities and more to deliver integrated
						strategies that deliver market leading results.
					</p>
					{/* {{ partial "services-list-block"(where.Site.RegularPages "Section" "==" "services")}} */}
				</div>
			</div>

			<LogoCloud title={brands.get('text')} logos={brands.get('logos')} />
		</div>
	);
};

export default HomePreview;
