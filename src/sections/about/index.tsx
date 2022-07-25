import React from "react";

import Section from "@/components/section";
import styles from "./index.module.scss";

const About: React.FC = () => {
	const generateServices = () => {
		const services = [
			"Men's Hair Cut",
			"Shampoo & Conditioner",
			"Comedy Show",
			"All of this for $30",
		];

		return services.map((service) => {
			return <li key={service}>{service}</li>;
		});
	};

	return (
		<React.Fragment>
			<Section sectionId="about" className={styles.aboutContainer}>
				<div>
					<h2 className="secondary">
						biagio's <span className="dark">vision</span>
					</h2>
					logo here
				</div>
				<article>
					<p>
						Biagio has a strong aim for cutting and styling men's hair. Since 2001 he
						has welcomed clients into his shop and consulted with them on desired
						styles. He uses a plethora of different techniques but is well known across
						the treasure valley for having some of the best scissor work. It’s very easy
						for barbers to master a fade with clippers but having experience with
						scissor work is essential for being a well versed Barber. The services that
						Biagio offers are listed below:
					</p>
				</article>
				<ul>{generateServices()}</ul>
			</Section>
		</React.Fragment>
	);
};

export default About;
