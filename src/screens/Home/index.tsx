import React, { useCallback, useMemo } from 'react';

import Button from '@components/Button';
import MealInfo from '@components/MealInfo';
import { useNavigation } from '@react-navigation/native';
import { TNewMeal } from '@shared/interfaces/TNewMeal';
import * as Global from '@styles/globals';
import { format } from 'date-fns';
import { useMMKVObject } from 'react-native-mmkv';
import { mealKey } from 'src/configs/storage';
import * as S from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const [meals] = useMMKVObject<TNewMeal[]>(mealKey);

  const mealsFormatted = useMemo(() => {
    if (!meals) return [];
    const groups = meals.reduce((acc, meal) => {
      const dateKey = format(new Date(meal.date), 'dd.MM.yy');
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(meal);
      return acc;
    }, {} as Record<string, TNewMeal[]>);

    return Object.keys(groups).map((date) => ({
      date,
      meals: groups[date],
    }));
  }, [meals]);

  const handleNavigateToResumeDiet = useCallback(() => {
    navigate('ResumeDiet', {
      withinDiet: true,
    });
  }, []);

  const handleAddMeal = useCallback(() => {
    navigate('NewMeal');
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.AppLogo />
        <S.Avatar />
      </S.Header>

      <S.ContainerInfo>
        <S.Title>90,86%</S.Title>
        <S.Subtitle>das refeições dentro da dieta</S.Subtitle>
        <S.Button onPress={handleNavigateToResumeDiet}>
          <S.IconArrowUp />
        </S.Button>
      </S.ContainerInfo>

      <S.ContainerAddMeal>
        <S.Label>Refeições</S.Label>
        <Button hasIcon title='Nova refeição' onPress={handleAddMeal} />
      </S.ContainerAddMeal>

      <Global.Scroll>
        {mealsFormatted &&
          mealsFormatted.length > 0 &&
          mealsFormatted.map((meal) => (
            <>
              <S.Label isBold>{meal.date}</S.Label>
              {meal.meals.map((mealItem) => (
                <MealInfo
                  key={mealItem.id}
                  hour={new Date(mealItem.date)}
                  food={mealItem.name}
                  withinDiet={mealItem.withinDiet}
                />
              ))}
            </>
          ))}
      </Global.Scroll>
    </S.Container>
  );
};

export default Home;
