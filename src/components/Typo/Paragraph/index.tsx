import cn from "classnames";
import type React from "react";

import { type FontWeight, TypoColor, TypoTagParagraph } from "@/enums/typo";

import styles from "./styles.module.scss";

interface BodyProps extends React.HTMLAttributes<HTMLElement> {
	size?: 48 | 36 | 30 | 24 | 16 | 18;
	tag?: TypoTagParagraph;
	as?: TypoTagParagraph;
	ref?: React.Ref<HTMLDivElement | HTMLParagraphElement>;
	color?: TypoColor;
	fontWeight?: FontWeight;
}

const Paragraph = ({ ...props }: BodyProps): React.JSX.Element => {
	const {
		ref,
		color = TypoColor.black,
		size = 18,
		as = TypoTagParagraph.div,
		fontWeight,
		className,
		children,
		style,
		...restProps
	} = props;

	const textClassNames = cn(
		styles.text,
		styles[`text__${size}`],
		`text__${color}`,
		className,
	);

	const Component = as as React.ElementType;

	const inlineStyle = {
		...(fontWeight !== undefined && { fontWeight }),
		...style,
	};

	return (
		<Component
			{...restProps}
			ref={ref}
			style={inlineStyle}
			className={textClassNames}
		>
			{children}
		</Component>
	);
};

export default Paragraph;
