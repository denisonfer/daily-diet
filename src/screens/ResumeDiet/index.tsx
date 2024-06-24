import React from 'react';

import Header from '@components/Header';
import { useRoute } from '@react-navigation/native';
import * as S from './styles';

type TRouteParams = {
  withinDiet: boolean;
};

const ResumeDiet: React.FC = () => {
  const route = useRoute();
  const { withinDiet } = route.params as TRouteParams;

  return (
    <S.Container withinDiet={withinDiet}>
      <Header withinDiet={withinDiet} />
    </S.Container>
  );
};

export default ResumeDiet;
