import React from 'react';
import styled from 'styled-components';
import { Column } from '../../../Components/Column';
import { Row } from '../../../Components/Row';

const DummyColor = styled.div`
  color: ${({ hexId }) => hexId && `${hexId}`};
  width: 400px;
  h1 {
    font-size: 60px;
    font-weight: bold;
    margin-right: 1.7rem;
  }

  p {
    margin-top: 0.4rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
  }
`;

const TypographyModule = ({ hexId }) => {
  return (
    <DummyColor hexId={hexId}>
      <Row>
        <h1>Aa</h1>
        <Column>
          <h2>Ink {hexId}</h2>
          <p>
            법원은 최고법원인 대법원과 각급법원으로 조직된다. 대한민국은 통일을
            지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고
            이를 추진한다.
          </p>
        </Column>
      </Row>
    </DummyColor>
  );
};

export default TypographyModule;
