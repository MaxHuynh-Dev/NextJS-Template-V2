import React, { PropsWithChildren } from 'react';
import WithFooter from '@Layout/WithFooter';

type Props = PropsWithChildren;

export default function Layout({ children }: Props): React.ReactElement {
  return <WithFooter>{children}</WithFooter>;
}
