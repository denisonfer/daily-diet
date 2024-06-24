import React, { useCallback } from 'react';

import Button from '@components/Button';
import MealInfo from '@components/MealInfo';
import { useNavigation } from '@react-navigation/native';
import { TNewMeal } from '@shared/interfaces/TNewMeal';
import { useMMKVObject } from 'react-native-mmkv';
import { mealKey } from 'src/configs/storage';
import * as S from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const [meals] = useMMKVObject<TNewMeal[]>(mealKey);
  console.tron.log('meals: ', meals);

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

      <S.Label isBold>12.08.22</S.Label>
      {meals &&
        meals.map((meal) => (
          <MealInfo
            key={meal.id}
            hour={meal.hour}
            food={meal.name}
            withinDiet={meal.withinDiet}
          />
        ))}
    </S.Container>
  );
};

export default Home;
