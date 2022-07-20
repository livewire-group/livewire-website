import React from 'react';

const HeroBanner = ({ overline, title, underline, subtitle }) => (
	<div className="hero-banner">
		<picture>
			<source
				srcSet="
				https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_400,w_480/v1658282251/website/banners/hero-banner-bg_qd2baq.jpg,
				https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_600,w_960/v1658282251/website/banners/hero-banner-bg_qd2baq.jpg 1.5x
			"
				media="(max-width: 480px)"
			/>
			<source
				srcSet="
				https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_300,w_768/v1658282251/website/banners/hero-banner-bg_qd2baq.jpg,
				https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_600,w_1500/v1658282251/website/banners/hero-banner-bg_qd2baq.jpg 1.5x
			"
				media="(max-width: 768px)"
			/>
			<source
				srcSet="
				https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_300,w_1024/v1658282251/website/banners/hero-banner-bg_qd2baq.jpg,
				https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_600,w_2100/v1658282251/website/banners/hero-banner-bg_qd2baq.jpg 1.5x
			"
				media="(max-width: 1024px)"
			/>
			<source
				srcSet="
				https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_600,w_1920/v1658282251/website/banners/hero-banner-bg_qd2baq.jpg,
				https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco,h_600,w_2560/v1658282251/website/banners/hero-banner-bg_qd2baq.jpg 1.5x
			"
				media="(max-width: 1280px)"
			/>
			<img
				className="absolute inset-0 h-full w-full object-cover"
				src="https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco/v1658282251/website/banners/hero-banner-bg_qd2baq.jpg"
				alt="Livewire banner background"
			/>
		</picture>
		<div className="relative">
			<div className="text-center">
				{overline && <p className="max-w-xl mt-5 mx-auto uppercase">{overline}</p>}
				<h1 className="mt-1 font-display text-3xl md:text-4xl text-5xl sm:text-6xl sm:tracking-tight lg:text-7xl">
					<span className="inline-block bg-primary/75 py-1.5 px-3">{title}</span>
				</h1>
				{underline && <p className="max-w-xl mt-5 mx-auto uppercase">{underline}</p>}
				{subtitle && <p className="max-w-xl mt-5 mx-auto text-xl">{subtitle}</p>}
			</div>
		</div>
	</div>
);

export default HeroBanner;
