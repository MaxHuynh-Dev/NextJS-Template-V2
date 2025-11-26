import { LifeCycleProvider } from '@Animation/context/LifeCycleContext';
import Preloader from '@Animation/pages/Preloader';
import GridDebug from '@Components/GridDebug';
import LenisScroll from '@Components/ReactLenis';
import Header from '@Layout/Header';
import type React from 'react';
import type { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <LifeCycleProvider>
      <Header />
      <LenisScroll>{children}</LenisScroll>
      <GridDebug />
      <Preloader />
    </LifeCycleProvider>
  );
}
