import { Container } from '@Components/Container';
import React from 'react';

import s from './styles.module.scss';

function Footer(): React.JSX.Element {
  return (
    <div className={s.footer}>
      <Container>footer</Container>
    </div>
  );
}

export default Footer;
