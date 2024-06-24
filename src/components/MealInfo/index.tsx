import React, { useMemo } from 'react';

import * as S from './styles';

type TProps = {
  hour: Date;
  food: string;
  withinDiet: boolean;
};
const MealInfo: React.FC<TProps> = ({ hour, food, withinDiet }) => {
  const formatTime = useMemo(() => {
    const date = new Date(hour);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }, [hour]);

  return (
    <S.Container>
      <S.Hour>{formatTime}</S.Hour>
      <S.VerticalDivider />
      <S.Food>{food}</S.Food>
      <S.WithinDiet isWithinDiet={withinDiet} />
    </S.Container>
  );
};

export default MealInfo;
