import type React from "react";
import Heading from "@/components/Typo/Heading";
import { FontWeight, TypoTagHeading } from "@/enums/typo";

function HomePage(): React.ReactElement {
	return (
		<Heading as={TypoTagHeading.h1} size={72} fontWeight={FontWeight.bold}>
			HomePage
		</Heading>
	);
}

export default HomePage;
