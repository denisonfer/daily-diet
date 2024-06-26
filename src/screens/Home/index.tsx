import React, { Fragment, useCallback, useMemo } from 'react';

import Button from '@components/Button';
import Highlight from '@components/Highlight';
import { useNavigation } from '@react-navigation/native';
import MealItem from '@screens/Home/MealItem';
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

    return Object.keys(groups)
      .map((date) => ({
        date,
        meals: groups[date].sort(
          (a, b) => new Date(b.hour).getTime() - new Date(a.hour).getTime()
        ),
      }))
      .sort(
        (a, b) =>
          new Date(b.date.split('.').reverse().join('-')).getTime() -
          new Date(a.date.split('.').reverse().join('-')).getTime()
      );
  }, [meals]);

  const withinDietPercentage = useMemo(() => {
    if (!meals) return 0;
    const withinDietMeals = meals.filter((meal) => meal.withinDiet).length;
    return (withinDietMeals / meals.length) * 100;
  }, [meals]);

  const handleNavigateToResumeDiet = useCallback(() => {
    navigate('ResumeDiet', {
      meals: meals as TNewMeal[],
      withinDietPercentage,
      highlight: {
        title: `${withinDietPercentage.toFixed(2)}%`,
        subtitle: 'das refeições dentro da dieta',
      },
    });
  }, [meals]);

  const handleNavigateToMealDetail = useCallback(
    (meal: TNewMeal) => {
      navigate('MealDetail', {
        meal,
      });
    },
    [meals]
  );

  const handleAddMeal = useCallback(() => {
    navigate('NewMeal');
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.AppLogo />
        <S.Avatar />
      </S.Header>

      <S.ContainerInfo withinDiet={withinDietPercentage >= 50}>
        <Highlight
          title={`${withinDietPercentage.toFixed(2)}%`}
          subtitle='das refeições dentro da dieta'
        />
        <S.Button onPress={handleNavigateToResumeDiet}>
          <S.IconArrowUp withinDiet={withinDietPercentage >= 50} />
        </S.Button>
      </S.ContainerInfo>

      <S.ContainerAddMeal>
        <S.Label>Refeições</S.Label>
        <Button icon='Plus' title='Nova refeição' onPress={handleAddMeal} />
      </S.ContainerAddMeal>

      <Global.Scroll>
        {mealsFormatted &&
          mealsFormatted.length > 0 &&
          mealsFormatted.map((meal) => (
            <Fragment key={meal.date}>
              <S.Label isBold>{meal.date}</S.Label>
              {meal.meals.map((mealItem) => (
                <MealItem
                  key={mealItem.id}
                  hour={new Date(mealItem.date)}
                  food={mealItem.name}
                  withinDiet={mealItem.withinDiet}
                  onPress={() => handleNavigateToMealDetail(mealItem)}
                />
              ))}
            </Fragment>
          ))}
      </Global.Scroll>
    </S.Container>
  );
};

export default Home;
