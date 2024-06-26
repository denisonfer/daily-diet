import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import MealDetail from '@screens/MealDetail';
import NewMeal from '@screens/NewMeal';
import ResumeDiet from '@screens/ResumeDiet';
import React from 'react';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
      <Screen name='ResumeDiet' component={ResumeDiet} />
      <Screen name='NewMeal' component={NewMeal} />
      <Screen name='MealDetail' component={MealDetail} />
    </Navigator>
  );
};

export default AppRoutes;
