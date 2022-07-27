import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import Section from "@/components/section";
import styles from "./index.module.scss";
import { ABOUT_TEXT } from "./constants";

const About: React.FC = () => {
	const [serviceIndex, setServiceIndex] = useState<number>(0);
	const [service, setService] = useState<string>(`Men's Hair Cut`);

	const handleInterval = () => {
		if (serviceIndex === services.length - 1) {
			setService(0);
		} else {
			setService(serviceIndex++);
		}
	};

	useEffect(() => {
		const serviceInterval = setInterval(handleInterval, 1000);
	});

	{
		/* const generateServices = () => { */
	}
	{
		/* 	const services = [ */
	}
	{
		/* 		"Men's Hair Cut", */
	}
	{
		/* 		"Shampoo & Conditioner", */
	}
	{
		/* 		"Comedy Show", */
	}
	{
		/* 		"All of this for $30", */
	}
	{
		/* 	]; */
	}

	{
		/* 	return services.map((service) => { */
	}
	{
		/* 		return <li key={service}>{`> ${service} `}</li>; */
	}
	{
		/* 	}); */
	}
	{
		/* }; */
	}

	return (
		<React.Fragment>
			<Section sectionId="about" className={styles.aboutContainer}>
				<div>
					<h2 className="secondary">
						biagio's <span className="dark">vision</span>
					</h2>
					<Image src="/icons/eye--icon.png" width="75" height="75" />
				</div>
				<article>
					<p>{ABOUT_TEXT}</p>
				</article>
				<div>
					<h3 className="dark">Services & price:</h3>
				</div>
				<ul>
					<li>{service}</li>
				</ul>
			</Section>
		</React.Fragment>
	);
};

export default About;
