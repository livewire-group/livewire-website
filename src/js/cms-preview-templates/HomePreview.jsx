import React from 'react';

const HomePreview = ({ entry }) => {
	const statement = entry.getIn(['data', 'statement']);
	const statementSub = entry.getIn(['data', 'statementSub']);
	const intros = entry.getIn(['data', 'intros']);
	const brands = entry.getIn(['data', 'brands']);
	console.log('brands', brands);

	return (
		<div>
			<div className="hero-banner hero-banner--large">
				<picture>
					<source
						srcSet="
							https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_500,w_480/v1658282252/website/banners/hero-banner-large-bg_it94q2.jpg,
							https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_1000,w_960/v1658282252/website/banners/hero-banner-large-bg_it94q2.jpg 1.5x
						"
						media="(max-width: 480px)"
					/>
					<source
						srcSet="
							https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_500,w_768/v1658282252/website/banners/hero-banner-large-bg_it94q2.jpg,
							https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_1000,w_1500/v1658282252/website/banners/hero-banner-large-bg_it94q2.jpg 1.5x
						"
						media="(max-width: 768px)"
					/>
					<source
						srcSet="
							https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_500,w_1024/v1658282252/website/banners/hero-banner-large-bg_it94q2.jpg,
							https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_1000,w_2100/v1658282252/website/banners/hero-banner-large-bg_it94q2.jpg 1.5x
						"
						media="(max-width: 1024px)"
					/>
					<source
						srcSet="
							https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_1000,w_1920/v1658282252/website/banners/hero-banner-large-bg_it94q2.jpg,
							https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_1000,w_2560/v1658282252/website/banners/hero-banner-large-bg_it94q2.jpg 1.5x
						"
						media="(max-width: 1280px)"
					/>
					<img
						className="absolute inset-0 h-full w-full object-cover"
						src="https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco/v1658282252/website/banners/hero-banner-large-bg_it94q2.jpg"
						alt="Livewire banner background"
					/>
				</picture>
				<h1 className="relative px-4 z-10 text-white w-full max-w-[24rem] sm:max-w-full sm:w-[24rem] md:w-[28rem] lg:w-[32rem]">
					<span className="inline-block w-full min-w-[8rem]">
						<svg className="fill-current" viewBox="0 0 480 170">
							<use href="/img/logo.svg#logo"></use>
						</svg>
					</span>
				</h1>
			</div>

			<div className="bg-white text-black relative">
				<div className="max-w-7xl mx-auto py-24 md:py-36 px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="mt-1 font-display font-bold text-5xl md:text-6xl lg:text-7xl sm:tracking-tight">
							{statement}
						</h1>
						{statementSub && <p className="max-w-xl mt-5 mx-auto text-2xl md:text-2xl lg:text-3xl">{statementSub}</p>}
					</div>
				</div>
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
					<h2 className="text-4xl mb-8">Gaming Marketing & Gametech</h2>
					<p className="my-8 text-lg leading-relaxed">
						Our services encompass end to end brand services, including talent engagement, programmatic and digital
						advertising, gaming and esports marketing, direct publisher opportunities and more to deliver integrated
						strategies that deliver market leading results.
					</p>
					{/* {{ partial "services-list-block"(where.Site.RegularPages "Section" "==" "services")}} */}
				</div>
			</div>
		</div>
	);
};

export default HomePreview;
