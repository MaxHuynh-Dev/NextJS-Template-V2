import cn from "classnames";
import React from "react";

import { FontWeight, TypoColor, TypoTagHeading } from "@/enums/typo";
import styles from "./styles.module.scss";
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 25 | 30 | 60 | 64 | 72 | 85 | 88 | 250;
  as?: TypoTagHeading;
  ref?: React.Ref<HTMLHeadingElement>;
  color?: TypoColor;
  fontWeight?: FontWeight;
}

const Heading = ({ ...props }: HeadingProps): React.JSX.Element => {
  const {
    ref,
    color = TypoColor.black,
    size = 72,
    as = TypoTagHeading.h1,
    fontWeight,
    children,
    className,
    style,
    ...restProps
  } = props;

  const textClassNames = cn(
    // styles.text,
    styles[`text__${size}`],
    // `text__${color}`,
    className
  );

  const Component = as;

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

Heading.displayName = "Heading";

export default Heading;
