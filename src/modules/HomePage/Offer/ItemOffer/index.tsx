import ImagePlaceHolder from "@Components/ImagePlaceHolder";
import type React from "react";
import styles from "./itemOffer.module.scss";

function ItemOffer(): React.ReactElement {
	return (
		<div className={styles.itemOffer}>
			<div className={styles.itemOffer_image}>
				<ImagePlaceHolder
					src="/images/offer.jpg"
					alt="Offer"
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
}

export default ItemOffer;
