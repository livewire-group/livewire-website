import React from 'react';

const HeroSection = ({ overline, title, underline, subtitle }) => {
	return (
		<div className="relative overflow-hidden">
			<div className="bg-primary text-black bg-hero-section">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:py-36">
					<div className="text-center">
						{overline && (
							<p className="max-w-xl mt-5 mx-auto uppercase">{overline}</p>
						)}
						<h1 className="mt-1 font-display text-3xl md:text-4xl text-5xl sm:text-6xl sm:tracking-tight lg:text-7xl">
							{title}
						</h1>
						{underline && (
							<p className="max-w-xl mt-5 mx-auto uppercase">{underline}</p>
						)}
						{subtitle && (
							<p className="max-w-xl mt-5 mx-auto text-xl">{subtitle}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
