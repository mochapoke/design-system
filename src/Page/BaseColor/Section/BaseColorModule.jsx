import React, { useState, Suspense } from 'react';
import { BiX, BiPencil } from 'react-icons/bi';

import { Row, BaseColorItemRow } from '../../../Components/Row';
import { ColorCircle } from '../../../Components/ColorCircle';
import ModifyInput from './ModifyInput';
import { baseColorListStore } from '../../../Store/BaseColorStore';
import { Wrapper, Title, Dash, Label } from './BaseColorModule.styles';
import { SmallButton } from '../../../Components/Button';
const ChangeBaseColorList = React.lazy(() => import('./ChangeBaseColorList'));

const BaseColorModule = ({ item }) => {
  const [isModify, setIsModify] = useState({ label: false, role: false });
  const { role, label } = isModify;

  const clickHandler = (element, e) => {
    if (element === 'role') setIsModify({ ...isModify, [element]: !role });
    if (element === 'label') setIsModify({ ...isModify, [element]: !label });
    e.stopPropagation();
  };

  const changeRole = (event, label) => {
    event.preventDefault();
    event.stopPropagation();

    item.changeRole(label);
    setIsModify({ label: false, role: !role });
  };

  const changeColor = (label, hexId) => {
    item.changeHexId(hexId, label);
    setIsModify({ ...isModify, label: !label });
  };

  const deleteItem = () => {
    baseColorListStore.deleteBaseColor(item.id);
  };

  return (
    <Wrapper>
      <BaseColorItemRow
        className='al_ct'
        onClick={(e) => clickHandler('label', e)}
      >
        <ColorCircle hexId={item.hexId} />
        <Row className='al_ct jc_sb'>
          <Row className='al_ct' onDoubleClick={(e) => clickHandler('role', e)}>
            {role ? (
              <ModifyInput
                changeRole={changeRole}
                isModify={isModify}
                setIsModify={setIsModify}
                role={role}
              />
            ) : (
              <Title>{item.role}</Title>
            )}
            {!role && (
              <Row className='al_ct'>
                <Label>{item.label}</Label>
                <Dash />
                <Label hex>{item.hexId}</Label>
              </Row>
            )}
          </Row>
        </Row>
        <SmallButton
          narrow
          onClick={(e) => clickHandler('role', e)}
          title='이름 변경'
        >
          <BiPencil />
        </SmallButton>
        <SmallButton narrow onClick={deleteItem} title='삭제'>
          <BiX />
        </SmallButton>
      </BaseColorItemRow>
      {label && (
        <Suspense fallback={<div>...loading...</div>}>
          <ChangeBaseColorList changeColor={changeColor} />
        </Suspense>
      )}
    </Wrapper>
  );
};

export default BaseColorModule;
