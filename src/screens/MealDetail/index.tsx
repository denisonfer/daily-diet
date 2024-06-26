import React, { useMemo } from 'react';

import Button from '@components/Button';
import Header from '@components/Header';
import { useRoute } from '@react-navigation/native';
import { TNewMeal } from '@shared/interfaces/TNewMeal';
import * as Global from '@styles/globals';
import { format } from 'date-fns';
import * as S from './styles';

type TRouteParams = {
  meal: TNewMeal;
};
const MealDetail: React.FC = () => {
  const route = useRoute();
  const { meal } = route.params as TRouteParams;

  const dateFormatted = useMemo(() => {
    const date = new Date(meal.date);
    const hour = new Date(meal.hour);
    const dateFormatted = format(date, 'dd/MM/yyyy');
    const hourFormatted = format(hour, 'HH:mm');

    return `${dateFormatted} às ${hourFormatted}`;
  }, [meal]);

  return (
    <S.Container>
      <Header title='Detalhes da refeição' withinDiet={meal.withinDiet} />

      <Global.Content>
        <S.MealName>{meal.name}</S.MealName>
        <S.Description>{meal.description}</S.Description>
        <S.Time>Data e Hora</S.Time>
        <S.Text>{dateFormatted}</S.Text>

        <S.Tag>
          <S.Point withinDiet={meal.withinDiet} />
          <S.TagText>
            {meal.withinDiet ? 'dentro da dieta' : 'fora da dieta'}
          </S.TagText>
        </S.Tag>

        <S.Footer>
          <S.ButtonEdit
            title='Editar refeição'
            icon='PencilSimpleLine'
            onPress={() => {}}
          />
          <Button
            title='Excluir refeição'
            icon='Trash'
            outlined
            onPress={() => {}}
          />
        </S.Footer>
      </Global.Content>
    </S.Container>
  );
};

export default MealDetail;
