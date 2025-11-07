import About from "@Modules/HomePage/About";
import Gallery from "@Modules/HomePage/Gallery";
import Hero from "@Modules/HomePage/Hero";
import Offer from "@Modules/HomePage/Offer";
import Projects from "@Modules/HomePage/Projects";
import type React from "react";

function HomePage(): React.ReactElement {
	return (
		<>
			<Hero />
			<About />
			<Offer />
			<Projects />
			<Gallery />
		</>
	);
}

export default HomePage;
