"use client";

import classNames from "classnames";
import type React from "react";
import { useEffect, useState } from "react";
import styles from "./preloader.module.scss";

function Preloader(): React.ReactElement {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={classNames(styles.preloader, { [styles.hide]: !isLoading })}
		>
			<h1>Preloader</h1>
		</div>
	);
}

export default Preloader;
