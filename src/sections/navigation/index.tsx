import React, { useState } from "react";

import Navbar from "@/components/navbar";

const Navigation: React.FC = ({}) => {
	const anchors = ["About", "Services", "Contact", "Gallery"];
	const [logoPath, setLogoPage] = useState<string>("/logos/logo--white.png");

	return (
		<React.Fragment>
			<Navbar anchors={anchors} logoPath={logoPath} />
		</React.Fragment>
	);
};

export default Navigation;
