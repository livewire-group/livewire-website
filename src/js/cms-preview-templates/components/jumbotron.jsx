import React from 'react';

const Jumbotron = ({ image, title, subtitle }) => {
	return (
		<div className="relative overflow-hidden">
			<div className="">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="mt-1 text-5xl font-extrabold sm:text-6xl sm:tracking-tight lg:text-7xl">
							{title}
						</h1>
						{subtitle && (
							<p className="max-w-xl mt-5 mx-auto text-xl">{subtitle}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;
