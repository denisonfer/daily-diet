import React, { useMemo } from 'react';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import { useRoute } from '@react-navigation/native';
import { TNewMeal } from '@shared/interfaces/TNewMeal';
import * as Global from '@styles/globals';
import * as S from './styles';

type TRouteParams = {
  meals: TNewMeal[];
  withinDietPercentage: number;
  highlight: {
    title: string;
    subtitle: string;
  };
};

const ResumeDiet: React.FC = () => {
  const route = useRoute();
  const {
    meals,
    withinDietPercentage,
    highlight: { title, subtitle },
  } = route.params as TRouteParams;

  const withinDiet = useMemo(
    () => withinDietPercentage >= 50,
    [withinDietPercentage]
  );

  const mealsWithinDietQuantity = useMemo(() => {
    return meals.filter((meal) => meal.withinDiet).length;
  }, [meals]);

  const bestSequenceQuantity = useMemo(() => {
    let currentSequence = 0;

    for (let i = 0; i < meals.length; i++) {
      if (meals[i].withinDiet) {
        currentSequence++;
      } else {
        if (currentSequence > 0) {
          currentSequence--;
        }
      }
    }

    return currentSequence;
  }, [meals]);

  return (
    <S.Container withinDiet={withinDiet}>
      <Header withinDiet={withinDiet} />
      <S.ViewHighlight>
        <Highlight title={title} subtitle={subtitle} />
      </S.ViewHighlight>
      <Global.Content>
        <S.Title>Estatísticas gerais</S.Title>

        <S.BackgroundHighlight>
          <Highlight
            title={bestSequenceQuantity.toString()}
            subtitle='Melhor sequência de pratos dentro da dieta'
            fontSize={22}
          />
        </S.BackgroundHighlight>

        <S.BackgroundHighlight>
          <Highlight
            title={meals.length.toString()}
            subtitle='Refeições registradas'
            fontSize={22}
          />
        </S.BackgroundHighlight>

        <S.Row>
          <S.BackgroundHighlight withinDiet isHalfWidth>
            <Highlight
              title={mealsWithinDietQuantity.toString()}
              subtitle='Refeições dentro da dieta'
              fontSize={22}
            />
          </S.BackgroundHighlight>
          <S.BackgroundHighlight withinDiet={false} isHalfWidth>
            <Highlight
              title={(meals.length - mealsWithinDietQuantity).toString()}
              subtitle='Refeições fora da dieta'
              fontSize={22}
            />
          </S.BackgroundHighlight>
        </S.Row>
      </Global.Content>
    </S.Container>
  );
};

export default ResumeDiet;
