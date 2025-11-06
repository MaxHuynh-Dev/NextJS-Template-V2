import About from "@Modules/HomePage/About";
import Gallery from "@Modules/HomePage/Gallery";
import Hero from "@Modules/HomePage/Hero";
import Offer from "@Modules/HomePage/Offer";
import type React from "react";

function HomePage(): React.ReactElement {
	return (
		<>
			<Hero />
			<About />
			<Offer />
			<Gallery />
		</>
	);
}

export default HomePage;
