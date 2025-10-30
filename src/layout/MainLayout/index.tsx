import GridDebug from "@Components/GridDebug";
import LenisScroll from "@Components/ReactLenis";
import Header from "@Layout/Header";
import React, { type PropsWithChildren } from "react";

export default function MainLayout({
	children,
}: PropsWithChildren): React.ReactElement {
	return (
		<React.Fragment>
			<Header />
			<LenisScroll>{children}</LenisScroll>
			<GridDebug />
		</React.Fragment>
	);
}
