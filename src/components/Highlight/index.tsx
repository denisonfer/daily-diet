import React from 'react';

import * as S from './styles';

type TProps = {
  title: string;
  subtitle: string;
  fontSize?: number;
};
const Highlight: React.FC<TProps> = ({ title, subtitle, fontSize }) => {
  return (
    <>
      <S.Title fontSize={fontSize}>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </>
  );
};

export default Highlight;
