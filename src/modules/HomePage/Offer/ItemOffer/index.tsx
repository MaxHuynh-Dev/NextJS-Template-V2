import ImagePlaceHolder from "@Components/ImagePlaceHolder";

import Label from "@Components/Typo/Label";
import {
	FontWeight,
	TypoColor,
	TypoTagLabel,
	TypoTransform,
} from "@Enums/typo";
import type React from "react";
import styles from "./itemOffer.module.scss";

type TItemOffer = {
	title: string;
	image: string;
	number: number;
};

function ItemOffer({ title, image, number }: TItemOffer): React.ReactElement {
	return (
		<div className={styles.itemOffer}>
			<div className={styles.itemOffer_header}>
				<Label
					as={TypoTagLabel.span}
					size={60}
					textTransform={TypoTransform.uppercase}
					color={TypoColor.dark_grey}
					className={styles.itemOffer_title}
				>
					{title}
				</Label>
				<Label
					as={TypoTagLabel.span}
					size={22}
					textTransform={TypoTransform.uppercase}
					color={TypoColor.dark_grey}
					fontWeight={FontWeight.semiBold}
					className={styles.itemOffer_number}
				>
					{number}
				</Label>
			</div>
			<div className={styles.itemOffer_image}>
				<ImagePlaceHolder
					src="https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322"
					alt="Offer"
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
}

export default ItemOffer;
