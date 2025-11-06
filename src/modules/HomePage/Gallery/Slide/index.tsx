"use client";

import ImagePlaceHolder from "@Components/ImagePlaceHolder";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import type React from "react";
import { Activity } from "react";
import styles from "./slide.module.scss";

const IMGS = [
	"https://images.unsplash.com/photo-1638962502979-05d81dcaa096?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2777",
	"https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335",
	"https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1322",
	"https://images.unsplash.com/photo-1680503397671-caa25818d36f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370",
	"https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
];

type Props = {
	direction?: "forward" | "backward";
};

function Slide({ direction = "forward" }: Props): React.ReactElement {
	const [emblaRef, _emblaApi] = useEmblaCarousel(
		{
			loop: true,
			axis: "y",
		},
		[
			AutoScroll({
				direction,
			}),
		],
	);

	return (
		<Activity mode={IMGS.length > 1 ? "visible" : "hidden"}>
			<div className={styles.embla} ref={emblaRef}>
				<div className={styles.embla_container}>
					{(direction === "forward" ? IMGS : IMGS.reverse()).map((img) => (
						<div className={styles.embla_slide} key={img}>
							<ImagePlaceHolder
								src={img}
								alt="Gallery"
								width={1000}
								height={1000}
							/>
						</div>
					))}
				</div>
			</div>
		</Activity>
	);
}

export default Slide;
