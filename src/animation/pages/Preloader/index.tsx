'use client';

import classNames from 'classnames';
import type React from 'react';
import { useRef } from 'react';

import styles from './preloader.module.scss';

function Preloader(): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={classNames(styles.preloader)}>
      <h1>Preloader</h1>
    </div>
  );
}

export default Preloader;
