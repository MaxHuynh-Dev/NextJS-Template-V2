import { Container } from "@Components/Container";
import Heading from "@Components/Typo/Heading";
import {
	FontWeight,
	TypoColor,
	TypoFontFamily,
	TypoTagHeading,
	TypoTransform,
} from "@Enums/typo";
import type React from "react";
import ItemOffer from "./ItemOffer";
import styles from "./offer.module.scss";

function Offer(): React.ReactElement {
	return (
		<div className={styles.offer}>
			<Container>
				<Heading
					as={TypoTagHeading.h2}
					fontWeight={FontWeight.semiBold}
					textTransform={TypoTransform.uppercase}
					size={130}
					fontFamily={TypoFontFamily.raleway}
					color={TypoColor.vani}
				>
					we offer
				</Heading>
				<div className={styles.offer_items}>
					<ItemOffer title="DESIGN OF HOUSES" image="image" number={12} />
					<ItemOffer title="INTERIOR DESIGN" image="image" number={47} />
					<ItemOffer
						title="DESIGN OF PUBLIC OBJECTS"
						image="image"
						number={18}
					/>
					<ItemOffer
						title="DESIGN OF PUBLIC INTERIOR"
						image="image"
						number={24}
					/>
				</div>
			</Container>
		</div>
	);
}

export default Offer;
