import About from "@Modules/HomePage/About";
import Hero from "@Modules/HomePage/Hero";
import type React from "react";

function HomePage(): React.ReactElement {
	return (
		<>
			<Hero />
			<About />
		</>
	);
}

export default HomePage;
