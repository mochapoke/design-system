import React from 'react';
import { Container, Inline, Outline, MainTitle } from '../LandingPage.styles';
import Logo from '../../../Components/Logo';
import Section1Elem from './Section1Elem';

const Section1 = ({ offset }) => {
  return (
    <Container>
      <Section1Elem offset={offset} />
      <MainTitle>
        <h2>
          <Inline>
            THE FUTURE OF <Outline>DESIGN SYSTEM</Outline> IS HERE
          </Inline>
        </h2>
      </MainTitle>
      <Logo />
    </Container>
  );
};

export default Section1;
