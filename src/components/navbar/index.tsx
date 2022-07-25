import React, { useMemo } from "react";
import Image from "next/image";

import styles from "./index.module.scss";

interface NavbarProps {
	anchors: string[];
	logoPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ anchors, logoPath }) => {
	const generateNavBar = useMemo(() => {
		return anchors.map((navItem, index) => {
			const item = navItem.toLowerCase();
			if (!index) {
				return (
					<React.Fragment key={item}>
						<li>
							<a href="#hero">
								<Image src={logoPath} width={50} height={50} />
							</a>
						</li>
						<li>
							<a href={`#${item}`}>{navItem}</a>
						</li>
					</React.Fragment>
				);
			} else {
				return (
					<React.Fragment key={item}>
						<li key={item}>
							<a id={navItem} href={`#${item}`}>
								{navItem}
							</a>
						</li>
					</React.Fragment>
				);
			}
		});
	}, [anchors, logoPath]);

	return (
		<nav id="navigation" className={styles.navContainer}>
			<ul>{generateNavBar}</ul>
		</nav>
	);
};

export default Navbar;
