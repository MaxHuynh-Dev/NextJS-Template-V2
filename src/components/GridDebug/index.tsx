"use client";

import { Container, GridContainer } from "@Components/Container";
import cn from "classnames";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import s from "./styles.module.scss";

const GridColumn = (): React.ReactElement => (
	<div className={s.grid_column}>
		<div className={s.grid_col} />
	</div>
);

export default function GridDebug(): React.ReactElement {
	const [isGrid, setIsGrid] = useState(false);

	const handleKeyDown: (ev: KeyboardEvent) => void = useCallback(
		(ev: KeyboardEvent) => {
			const key = ev.which || ev.keyCode;
			const isShift = !!ev.shiftKey;
			if (isShift && key === 71) {
				localStorage.setItem("isGrid", String(!isGrid));
				setIsGrid(!isGrid);
			}
		},
		[isGrid],
	);

	useEffect(() => {
		const localIsGrid = localStorage.getItem("isGrid");
		if (localIsGrid === "true") {
			setIsGrid(true);
		}
		window.addEventListener("keydown", handleKeyDown);
		return (): void => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	return (
		<div className={cn(s.gridDebug, !isGrid && s.hidden)}>
			<Container>
				<GridContainer>
					{Array.from({ length: 12 }).map((_, index) => (
						<GridColumn key={`grid-column-${index.toString()}`} />
					))}
				</GridContainer>
			</Container>
		</div>
	);
}
