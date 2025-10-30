import cn from "classnames";
import type React from "react";

import {
	FontWeight,
	TypoColor,
	TypoTagHeading,
	TypoTransform,
} from "@/enums/typo";
import { BaseText, type BaseTextProps } from "../Base";
import styles from "./styles.module.scss";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
	BaseTextProps & {
		size?: 25 | 30 | 60 | 64 | 72 | 85 | 88 | 250;
		as?: TypoTagHeading;
		ref?: React.Ref<HTMLHeadingElement>;
	};

const Heading = ({ ...props }: HeadingProps): React.JSX.Element => {
	const {
		color = TypoColor.black,
		size = 72,
		as = TypoTagHeading.h1,
		fontWeight = FontWeight.regular,
		textTransform = TypoTransform.none,
		children,
		className,
		...restProps
	} = props;

	const textClassNames = cn(styles.text, styles[`text__${size}`], className);

	return (
		<BaseText
			as={as}
			color={color}
			fontWeight={fontWeight}
			textTransform={textTransform}
			className={textClassNames}
			{...restProps}
		>
			{children}
		</BaseText>
	);
};

Heading.displayName = "Heading";

export default Heading;
