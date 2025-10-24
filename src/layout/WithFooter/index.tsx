import React from 'react';
import Footer from '@Layout/Footer';

export default function WithFooter({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
