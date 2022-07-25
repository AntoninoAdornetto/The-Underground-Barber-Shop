import React from "react";

import styles from "./index.module.scss";

interface SectionProps {
	sectionId: string;
	children: React.ReactNode;
	className?: string;
	observerCallBack?(): void;
}

const Section: React.FC<SectionProps> = ({ children, className, sectionId }) => {
	return (
		<section id={sectionId} className={`${styles.sectionContainer} ${className}`}>
			{children}
		</section>
	);
};

export default Section;
