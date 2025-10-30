import cn from "classnames";
import type React from "react";
import { FontWeight, TypoColor, TypoTransform } from "@/enums/typo";

export interface BaseTextProps {
	as: React.ElementType;
	children: React.ReactNode;
	className?: string;
	color?: TypoColor;
	fontWeight?: FontWeight;
	textTransform?: TypoTransform;
	fontSize?: string;
}

export const BaseText: React.FC<BaseTextProps> = ({ ...props }) => {
	const {
		as: Component,
		color = TypoColor.black,
		fontWeight = FontWeight.regular,
		textTransform = TypoTransform.none,
		children,
		className,
		...rest
	} = props;

	const textClassNames = cn(
		`text__${color}`,
		`font-weight__${fontWeight}`,
		`text-transform__${textTransform}`,
		className,
	);

	return (
		<Component className={textClassNames} {...rest}>
			{children}
		</Component>
	);
};

BaseText.displayName = "BaseText";
