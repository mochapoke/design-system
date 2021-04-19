import React from 'react';

import TypographyList from './section/TypographyList';
import { Wrapper } from '../../Components/Wrapper';
import Head from '../../Components/Head';

import { typoColorStore } from '../../Store/TypoStore';

const Typography = () => {
  const clickHandle = () => {
    typoColorStore.addNewColor();
  };

  return (
    <Wrapper id='typo'>
      <Head title='Typography' addNew={clickHandle} />
      <TypographyList list={typoColorStore} />
    </Wrapper>
  );
};

export default Typography;
