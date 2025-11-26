'use client';

import { useLifeCycle } from '@Animation/context/LifeCycleContext';
import { PageStatus } from '@Constants/animations';
import classNames from 'classnames';
import type React from 'react';
import { useLayoutEffect, useRef } from 'react';

import styles from './preloader.module.scss';

function Preloader(): React.ReactElement {
  const { setPageStatus } = useLifeCycle();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setPageStatus(PageStatus.LOADING);
  });

  return (
    <div ref={ref} className={classNames(styles.preloader)}>
      <h1>Preloader</h1>
    </div>
  );
}

export default Preloader;
