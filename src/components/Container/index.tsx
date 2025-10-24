import cn from "classnames";
import React, { PropsWithChildren } from "react";

import s from "./styles.module.scss";

type Props = PropsWithChildren & {
  className?: string;
};

export const Container = ({
  children,
  className,
}: Props): React.JSX.Element => {
  return <div className={cn(s.container, className)}>{children}</div>;
};

export const GridContainer = ({
  children,
  className,
}: Props): React.JSX.Element => {
  return (
    <div
      className={cn(
        "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12",
        s.container_grid,
        className
      )}
    >
      {children}
    </div>
  );
};
