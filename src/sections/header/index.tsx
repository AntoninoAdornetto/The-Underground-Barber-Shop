import React from "react";
import Head from "next/head";

const Header: React.FC = () => {
	return (
		<React.Fragment>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="Specializing in men's haircuts, The Armanino Showroom (also known as The Underground Barbershop) is the spot to go to in Boise if you are looking for a great cut"
				/>
				<meta
					name="keywords"
					content="armanino, showroom, barbershop, barber, haircut, boise, idaho, biagio, adornetto, fashion, style"
				/>
				<title>The Underground Barber Shop | Home</title>
			</Head>
		</React.Fragment>
	);
};

export default Header;
