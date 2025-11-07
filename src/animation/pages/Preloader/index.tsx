"use client";

import { useLifeCycle } from "@Animation/context/LifeCycleContext";
import { PageStatus } from "@Constants/animations";
import { useSignalEffect } from "@preact/signals-react";
import classNames from "classnames";
import type React from "react";
import { useLayoutEffect, useRef } from "react";
import styles from "./preloader.module.scss";

function Preloader(): React.ReactElement {
	const { pageStatus, setPageStatus } = useLifeCycle();
	const ref = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		setPageStatus(PageStatus.LOADING);
	});

	useSignalEffect(() => {
		const timer = setTimeout(() => {
			pageStatus.value = PageStatus.ENTERED;
			if (ref.current) {
				ref.current.style.opacity = "0";
			}
		}, 2000);

		return () => clearTimeout(timer);
	});

	return (
		<div ref={ref} className={classNames(styles.preloader)}>
			<h1>Preloader</h1>
		</div>
	);
}

export default Preloader;
