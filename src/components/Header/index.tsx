import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import * as S from './styles';

type TProps = {
  withinDiet?: boolean;
  title?: string;
};

const Header: React.FC<TProps> = ({ withinDiet, title = '' }) => {
  const { goBack } = useNavigation();

  return (
    <S.Container withinDiet={withinDiet}>
      <S.Button onPress={goBack}>
        <S.IconBack withinDiet={withinDiet} />
      </S.Button>

      <S.Title>{title}</S.Title>

      <View style={{ width: 50 }} />
    </S.Container>
  );
};

export default Header;
