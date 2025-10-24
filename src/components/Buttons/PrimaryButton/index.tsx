import Label from "@Components/Typo/Label";
import cn from "classnames";
import React from "react";

import { TypoColor, TypoTagLabel } from "@/enums/typo";

import s from "./styles.module.scss";

type TPrimaryButton = {
  color?: "dark" | "yellow";
  size?: "small" | "medium" | "large";
  variant?: "solid" | "outline";
  weight?: "light" | "regular" | "bold";
  transform?: "uppercase" | "lowercase" | "capitalize";
  text?: string;
  className?: string;
  onClick?: () => void;
};

export default function PrimaryButton({
  ...props
}: TPrimaryButton): React.JSX.Element {
  const {
    text = "",
    className,
    variant = "solid",
    color = "dark",
    size = "large",
    onClick,
  } = props;

  const primaryButtonClassNames = cn(
    s.primaryButton,
    size && s[`primaryButton_${size}`],
    s[`primaryButton_${variant}`],
    s[`primaryButton_${variant}_${color}`],
    className
  );

  return (
    <button className={primaryButtonClassNames} onClick={onClick}>
      <Label
        color={TypoColor.black}
        size={size === "small" ? 16 : 24}
        as={TypoTagLabel.label}
        className={s.primaryButton_text}
      >
        {text}
      </Label>
    </button>
  );
}
