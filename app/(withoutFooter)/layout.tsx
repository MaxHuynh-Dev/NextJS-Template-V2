import React, { PropsWithChildren } from 'react';
import WithoutFooter from '@Layout/WithoutFooter';

type Props = PropsWithChildren;

export default function Layout({ children }: Props): React.ReactElement {
  return <WithoutFooter>{children}</WithoutFooter>;
}
