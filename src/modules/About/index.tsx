import About from '@Modules/About/About';
import Gallery from '@Modules/About/Gallery';
import Hero from '@Modules/About/Hero';
import Offer from '@Modules/About/Offer';
import Projects from '@Modules/About/Projects';
import type React from 'react';

function AboutPage(): React.ReactElement {
  return (
    <>
      <Hero />
      <About />
      <Offer />
      <Projects />
      <Gallery />
    </>
  );
}

export default AboutPage;
