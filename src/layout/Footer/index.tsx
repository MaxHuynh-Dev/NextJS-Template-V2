import { Container } from '@Components/Container';
import s from './styles.module.scss';

import React from 'react';

function Footer(): React.JSX.Element {
  return (
    <div className={s.footer}>
      <Container>footer</Container>
    </div>
  );
}

export default Footer;
