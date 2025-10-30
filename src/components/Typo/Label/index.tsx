import cn from "classnames";
import type React from "react";

import {
	type FontWeight,
	TypoColor,
	type TypoElement,
	TypoTagLabel,
} from "@/enums/typo";

import styles from "./styles.module.scss";

interface LabelProps extends React.HTMLAttributes<HTMLElement> {
	size?: 200 | 64 | 28 | 24 | 20 | 18 | 17 | 16 | 14 | 12 | 13;
	as?: TypoTagLabel;
	ref?: React.Ref<TypoElement>;
	color?: TypoColor;
	fontWeight?: FontWeight;
}

const Label = ({ ...props }: LabelProps): React.JSX.Element => {
	const {
		ref,
		color = TypoColor.black,
		size = 18,
		as = TypoTagLabel.span,
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
			ref={ref as React.Ref<HTMLParagraphElement>}
			style={inlineStyle}
			className={textClassNames}
		>
			{children}
		</Component>
	);
};

export default Label;
