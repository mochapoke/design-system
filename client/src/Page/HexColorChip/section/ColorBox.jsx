import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  margin-top: 0.4rem;
  width: 120px;
  height: 120px;
  border-radius: 0.3rem;

  display: grid;
  grid-template-rows: 70px 50px;
  border: 1.2px solid ${({ hexId }) => hexId && `${hexId}`};
`;

const Color = styled.div`
  background-color: ${({ hexId }) => hexId && `${hexId}`};
`;

const Label = styled.label`
  color: #171921;
  font-size: 11px;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > span {
    color: ${(props) => props.theme.ink30};
    padding-bottom: 3px;

    :first-child {
      color: ${(props) => props.theme.ink40};
      font-weight: 500;
      font-size: 12px;
    }
  }
`;

const ColorBox = ({ item }) => {
  const getHexId = () => {
    navigator.clipboard.writeText(item.hexId);
    // 저장했다는 모션 나오면 좋을 듯? 근데 이건 뭘로하지? 모달?은 아닌디..
    // check 애니메이션 나오게해야게따
  };

  return (
    <Container hexId={item.hexId} onClick={getHexId}>
      <Color hexId={item.hexId} />
      <Label>
        <span>{item.title}</span>
        <span>{item.hexId}</span>
      </Label>
    </Container>
  );
};

export default ColorBox;