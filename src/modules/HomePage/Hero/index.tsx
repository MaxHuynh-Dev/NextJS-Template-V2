import { Container } from "@Components/Container";
import ImagePlaceHolder from "@Components/ImagePlaceHolder";
import Heading from "@Components/Typo/Heading";
import {
	FontWeight,
	TypoColor,
	TypoFontFamily,
	TypoTagHeading,
	TypoTransform,
} from "@Enums/typo";
import type React from "react";
import styles from "./hero.module.scss";

function Hero(): React.ReactElement {
	return (
		<div className={styles.hero}>
			<div className={styles.hero_background}>
				<ImagePlaceHolder
					src="/images/hero.jpg"
					alt="Hero Background"
					width={1000}
					height={1000}
				/>
			</div>
			<Container className={styles.hero_container}>
				<Heading
					as={TypoTagHeading.h1}
					size={130}
					fontFamily={TypoFontFamily.raleway}
					fontWeight={FontWeight.semiBold}
					color={TypoColor.vani}
					textTransform={TypoTransform.uppercase}
					className={styles.hero_heading}
				>
					<span className={styles.hero_heading_word_italic}>We create</span>
					<div className={styles.hero_heading_word_normal}>
						interiors that one
					</div>
					<div className={styles.hero_heading_word_normal}>
						wants to live in
					</div>
				</Heading>
			</Container>
		</div>
	);
}

export default Hero;
