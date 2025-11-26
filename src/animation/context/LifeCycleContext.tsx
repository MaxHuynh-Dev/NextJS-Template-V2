'use client';

import { PageStatus } from '@Constants/animations';
import { signal } from '@preact/signals-react';
import type React from 'react';
import { createContext, use } from 'react';

interface LifeCycleContextReturn {
  pageStatus: typeof pageStatusSignal;
  setPageStatus: (status: PageStatus) => void;
  resetPageStatus: () => void;
}

const pageStatusSignal = signal<PageStatus>(PageStatus.IDLE);

const LifeCycleContext = createContext<LifeCycleContextReturn | undefined>(undefined);

export interface LifeCycleProviderProp {
  children: React.ReactNode;
}

export function LifeCycleProvider({ children }: LifeCycleProviderProp): React.ReactElement {
  const setPageStatus = (status: PageStatus): void => {
    pageStatusSignal.value = status;
  };

  const resetPageStatus = (): void => {
    pageStatusSignal.value = PageStatus.IDLE;
  };

  const value: LifeCycleContextReturn = {
    pageStatus: pageStatusSignal,
    setPageStatus,
    resetPageStatus,
  };

  return <LifeCycleContext value={value}>{children}</LifeCycleContext>;
}

export function useLifeCycle(): LifeCycleContextReturn {
  const context = use(LifeCycleContext);
  if (context === undefined) {
    throw new Error('useLifeCycle must be used within a LifeCycleProvider');
  }
  return context;
}
