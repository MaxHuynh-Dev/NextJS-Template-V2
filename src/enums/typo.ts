import type { PropsWithChildren } from "react";

export enum TypoColor {
	white = "white",
	black = "black",
	blue = "blue",
}

export enum FontWeight {
	thin = "100", // 100
	extraLight = "200", // 200
	light = "300", // 300
	regular = "400", // 400
	medium = "500", // 500
	semiBold = "600", // 600
	bold = "700", // 700
	extraBold = "800", // 800
}

export enum TypoTransform {
	uppercase = "uppercase",
	lowercase = "lowercase",
	capitalize = "capitalize",
	none = "none",
}

export enum TypoTagHeading {
	h1 = "h1",
	h2 = "h2",
	h3 = "h3",
	h4 = "h4",
	h5 = "h5",
	h6 = "h6",
}

export enum TypoTagParagraph {
	p = "p",
	div = "div",
}

export enum TypoTagLabel {
	span = "span",
	label = "label",
}

export enum TypoFontFamily {
	genist_sans = "geist-sans",
	genist_mono = "geist-mono",
}

export type TypoElement =
	| HTMLSpanElement
	| HTMLHeadingElement
	| HTMLParagraphElement
	| HTMLDivElement
	| HTMLLabelElement
	| HTMLAnchorElement;

export type TextPropsBase = PropsWithChildren & {
	className?: string;
	color?: TypoColor;
	weight?: FontWeight;
	transform?: TypoTransform;
	font?: TypoFontFamily;
};
