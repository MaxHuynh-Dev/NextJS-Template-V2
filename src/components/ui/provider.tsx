'use client';

import { ThemeProvider } from 'next-themes';
import type React, { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps): React.ReactElement {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
