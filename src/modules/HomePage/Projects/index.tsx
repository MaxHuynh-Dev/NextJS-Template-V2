import { Container } from "@Components/Container";
import SvgInsert from "@Components/SvgInsert";
import Heading from "@Components/Typo/Heading";
import Label from "@Components/Typo/Label";
import {
	FontWeight,
	TypoColor,
	TypoFontFamily,
	TypoTagHeading,
	TypoTagLabel,
	TypoTransform,
} from "@Enums/typo";
import type React from "react";
import styles from "./projects.module.scss";
import Slide from "./Slide";

function Projects(): React.ReactElement {
	return (
		<div className={styles.projects}>
			<Container>
				<div className={styles.projects_header}>
					<Heading
						as={TypoTagHeading.h2}
						fontWeight={FontWeight.semiBold}
						textTransform={TypoTransform.uppercase}
						size={130}
						fontFamily={TypoFontFamily.raleway}
						color={TypoColor.vani}
					>
						projects
					</Heading>
					<div className={styles.projects_header_number}>
						<Label
							as={TypoTagLabel.span}
							size={60}
							fontWeight={FontWeight.semiBold}
							textTransform={TypoTransform.uppercase}
							color={TypoColor.vani}
							className={styles.projects_header_number_label}
						>
							1/6
						</Label>
						<div className={styles.projects_arrows}>
							<div className={styles.projects_arrow}>
								<SvgInsert src="/icons/arrow-left.svg" width={49} height={49} />
							</div>

							<div className={styles.projects_arrow}>
								<SvgInsert
									src="/icons/arrow-right.svg"
									width={49}
									height={49}
								/>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Slide />
		</div>
	);
}

export default Projects;
