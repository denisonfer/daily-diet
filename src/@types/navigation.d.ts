import { TNewMeal } from '@shared/interfaces/TNewMeal';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      NewMeal: undefined;
      ResumeDiet: {
        meals: TNewMeal[];
        withinDietPercentage: number;
        highlight: {
          title: string;
          subtitle: string;
        };
      };
      MealDetail: {
        meal: TNewMeal;
      };
    }
  }
}
