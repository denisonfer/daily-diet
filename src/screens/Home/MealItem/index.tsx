import React, { useMemo } from 'react';

import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type TProps = TouchableOpacityProps & {
  hour: Date;
  food: string;
  withinDiet: boolean;
};
const MealItem: React.FC<TProps> = ({ hour, food, withinDiet, ...rest }) => {
  const formatTime = useMemo(() => {
    const date = new Date(hour);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }, [hour]);

  return (
    <S.Container {...rest}>
      <S.Hour>{formatTime}</S.Hour>
      <S.VerticalDivider />
      <S.Food>{food}</S.Food>
      <S.WithinDiet isWithinDiet={withinDiet} />
    </S.Container>
  );
};

export default MealItem;
