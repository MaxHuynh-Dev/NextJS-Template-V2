export enum TypoColor {
	white = "white",
	black = "black",
	blue = "blue",
}

export enum FontWeight {
	thin = "100", // thin
	extraLight = "200", // extra light
	light = "300", // light
	regular = "400", // regular
	medium = "500", // medium
	semiBold = "600", // semi bold
	bold = "700", // bold
	extraBold = "800", // extra bold
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
