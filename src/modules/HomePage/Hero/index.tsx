'use client';

import { useLifeCycle } from '@Animation/context/LifeCycleContext';
import PrimaryButton from '@Components/Buttons/PrimaryButton';
import { Container } from '@Components/Container';
import Heading from '@Components/Typo/Heading';
import Paragraph from '@Components/Typo/Paragraph';
import { PageStatus } from '@Constants/animations';
import {
  FontWeight,
  TypoColor,
  TypoFontFamily,
  TypoTagHeading,
  TypoTagParagraph,
  TypoTransform,
} from '@Enums/typo';
import { useSignalEffect } from '@preact/signals-react';
import classNames from 'classnames';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import type React from 'react';

import styles from './hero.module.scss';

gsap.registerPlugin(SplitText);

function Hero(): React.ReactElement {
  const { pageStatus } = useLifeCycle();

  useSignalEffect(() => {
    if (pageStatus.value === PageStatus.ENTERED) {
      SplitText.create('.split', {
        type: 'words,lines',
        linesClass: 'line',
        autoSplit: true,
        mask: 'lines',
        onSplit: (self) => {
          const split = gsap.from(self.lines, {
            duration: 1,
            yPercent: -100,
            stagger: 0.1,
            ease: 'expo.out',
          });
          return split;
        },
      });
    }
  });
  return (
    <div className={styles.hero}>
      <div className={styles.hero_background}>
        {/* <ImagePlaceHolder
					src="/images/hero.jpg"
					alt="Hero Background"
					width={1000}
					height={1000}
				/> */}
        <video autoPlay muted loop playsInline>
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      </div>
      <Container className={styles.hero_container}>
        <div className={styles.hero_container_inner}>
          <Heading
            as={TypoTagHeading.h1}
            size={130}
            fontFamily={TypoFontFamily.raleway}
            fontWeight={FontWeight.semiBold}
            color={TypoColor.vani}
            textTransform={TypoTransform.uppercase}
            className={classNames(styles.hero_heading)}
          >
            <span className={classNames(styles.hero_heading_word_italic, 'split')}>We create</span>
            <div className={classNames(styles.hero_heading_word_normal, 'split')}>
              interiors that one
            </div>
            <div className={classNames(styles.hero_heading_word_normal, 'split')}>
              wants to live in
            </div>
          </Heading>
          <div className={styles.hero_container_inner_bottom}>
            <Paragraph as={TypoTagParagraph.p} size={18} color={TypoColor.vani}>
              For more than 30 years, we've been <br /> bringing projects to life around the world.
            </Paragraph>
            <PrimaryButton text="Explore our work" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
