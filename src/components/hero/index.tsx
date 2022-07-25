import React from "react";

interface HeroProps {
	title: string;
	hero: React.ReactNode;
	className?: string;
	subTitle?: string;
	btn?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ btn, className, hero, title, subTitle }) => {
	return (
		<div className={className}>
			{hero}
			<div>
				<h1>
					{title}
					{subTitle && <span style={{ display: "block" }}>{subTitle}</span>}
				</h1>
				<div>{btn && btn}</div>
			</div>
		</div>
	);
};

export default Hero;
