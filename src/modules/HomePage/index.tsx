import { Container } from "@Components/Container";
import Heading from "@Components/Typo/Heading";
import { FontWeight, TypoTagHeading } from "@Enums/typo";
import type React from "react";

function HomePage(): React.ReactElement {
	return (
		<Container>
			<Heading as={TypoTagHeading.h1} size={72} fontWeight={FontWeight.bold}>
				HomePage
			</Heading>
		</Container>
	);
}

export default HomePage;
