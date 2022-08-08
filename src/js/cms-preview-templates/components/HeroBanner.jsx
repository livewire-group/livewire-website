import React from 'react';

const HeroBanner = ({ overline, title, underline, subtitle }) => (
	<div className="hero-banner">
		<picture>
			<source
				srcSet="
				https://res.cloudinary.com/livewire-group/image/upload/c_lfill,dpr_auto,f_auto,g_center,q_auto:eco,h_250,w_320/v1658400018/website/banners/hero-banner_nleobe.jpg,
				https://res.cloudinary.com/livewire-group/image/upload/c_lfill,dpr_auto,f_auto,g_center,q_auto:eco,h_500,w_640/v1658400018/website/banners/hero-banner_nleobe.jpg 1.5x
			"
				media="(max-width: 320px)"
			/>
			<source
				srcSet="
				https://res.cloudinary.com/livewire-group/image/upload/c_lfill,dpr_auto,f_auto,g_center,q_auto:eco,h_250,w_480/v1658400018/website/banners/hero-banner_nleobe.jpg,
				https://res.cloudinary.com/livewire-group/image/upload/c_lfill,dpr_auto,f_auto,g_center,q_auto:eco,h_500,w_960/v1658400018/website/banners/hero-banner_nleobe.jpg 1.5x
			"
				media="(max-width: 480px)"
			/>
			<source
				srcSet="
				https://res.cloudinary.com/livewire-group/image/upload/c_lfill,dpr_auto,f_auto,g_center,q_auto:eco,h_250,w_768/v1658400018/website/banners/hero-banner_nleobe.jpg,
				https://res.cloudinary.com/livewire-group/image/upload/c_lfill,dpr_auto,f_auto,g_center,q_auto:eco,h_500,w_1536/v1658400018/website/banners/hero-banner_nleobe.jpg 1.5x
			"
				media="(max-width: 768px)"
			/>
			<source
				srcSet="
				https://res.cloudinary.com/livewire-group/image/upload/c_lfill,dpr_auto,f_auto,g_center,q_auto:eco,h_250,w_1024/v1658400018/website/banners/hero-banner_nleobe.jpg,
				https://res.cloudinary.com/livewire-group/image/upload/c_lfill,dpr_auto,f_auto,g_center,q_auto:eco,h_500,w_2048/v1658400018/website/banners/hero-banner_nleobe.jpg 1.5x
			"
				media="(max-width: 1024px)"
			/>
			<source
				srcSet="
				https://res.cloudinary.com/livewire-group/image/upload/c_lfill,dpr_auto,f_auto,g_center,q_auto:eco,h_250,w_1280/v1658400018/website/banners/hero-banner_nleobe.jpg,
				https://res.cloudinary.com/livewire-group/image/upload/c_lfill,dpr_auto,f_auto,g_center,q_auto:eco,h_500,w_2560/v1658400018/website/banners/hero-banner_nleobe.jpg 1.5x
			"
				media="(max-width: 1280px)"
			/>
			<img
				className="absolute inset-0 h-full w-full object-cover"
				src="https://res.cloudinary.com/livewire-group/image/upload/c_crop,dpr_auto,f_auto,g_center,q_auto:eco/v1658400018/website/banners/hero-banner_nleobe.jpg"
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
