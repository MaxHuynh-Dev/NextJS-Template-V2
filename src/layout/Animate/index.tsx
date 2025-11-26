'use client';

import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type React from 'react';
import type { PropsWithChildren } from 'react';

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    x: 100, // Dịch sang phải
    filter: 'blur(10px)',
  },
  enter: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -100, // Dịch sang trái
    filter: 'blur(10px)',
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

export default function Animate({ children }: PropsWithChildren): React.ReactElement {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
