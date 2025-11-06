import PrimaryButton from "@Components/Buttons/PrimaryButton";
import { GridContainer } from "@Components/Container";
import Heading from "@Components/Typo/Heading";
import Paragraph from "@Components/Typo/Paragraph";
import {
	FontWeight,
	TypoColor,
	TypoFontFamily,
	TypoTagHeading,
	TypoTagParagraph,
	TypoTransform,
} from "@Enums/typo";
import type React from "react";
import styles from "./gallery.module.scss";
import Slide from "./Slide";

function Gallery(): React.ReactElement {
	return (
		<div className={styles.gallery}>
			<GridContainer>
				<div className={styles.gallery_left}>
					<Heading
						as={TypoTagHeading.h2}
						fontWeight={FontWeight.semiBold}
						textTransform={TypoTransform.uppercase}
						size={130}
						fontFamily={TypoFontFamily.raleway}
						color={TypoColor.vani}
					>
						GALLERY
					</Heading>
					<div className={styles.gallery_left_bottom}>
						<Paragraph
							as={TypoTagParagraph.p}
							textTransform={TypoTransform.uppercase}
							size={20}
							color={TypoColor.vani}
						>
							We are constantly growing, learning, and improving and our
							partners are steadily increasing. 286 projects is a sizable
							number, but we always strive to be better, more relevant, more
							determined, and more successful than yesterday. We are not going
							to stop.
						</Paragraph>
						<PrimaryButton text="Explore our work" />
					</div>
				</div>
				<div className={styles.gallery_right}>
					<Slide />
					<Slide direction="backward" />
				</div>
			</GridContainer>
		</div>
	);
}

export default Gallery;
