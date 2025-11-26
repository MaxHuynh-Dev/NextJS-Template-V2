import Preloader from '@Animation/pages/Preloader';
// import GridDebug from '@Components/GridDebug';
import LenisScroll from '@Components/ReactLenis';
import Header from '@Layout/Header';
import type { PropsWithChildren } from 'react';
import React from 'react';

export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <React.Fragment>
      <Header />
      <LenisScroll>{children}</LenisScroll>
      {/* <GridDebug /> */}
      <Preloader />
    </React.Fragment>
  );
}
