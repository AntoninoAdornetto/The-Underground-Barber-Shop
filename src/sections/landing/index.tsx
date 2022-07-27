import React from "react";
import Image from "next/image";

import Hero from "@/components/hero";
import styles from "./index.module.scss";

const Landing: React.FC = () => {
	const generateHero = () => {
		return (
			<Image
				alt="downtown boise idaho"
				className={styles.heroImg}
				layout="fill"
				src="/hero/showcase.jpg"
				objectFit="cover"
				objectPosition="top"
				id="hero"
			/>
		);
	};

	return (
		<React.Fragment>
			<Hero
				className={styles.landingContainer}
				hero={generateHero()}
				title="The Underground"
				subTitle="Barber Shop"
			/>
		</React.Fragment>
	);
};

export default Landing;
