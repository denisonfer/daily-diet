import { TNewMeal } from '@shared/interfaces/TNewMeal';
import { mealKey, storage } from 'src/configs/storage';

export function addNewMeal(newMeal: TNewMeal) {
  const currentMeals = getMeals();
  const updatedMeals = [...currentMeals, newMeal];
  storage.set(mealKey, JSON.stringify(updatedMeals));
}

export function getMeals(): TNewMeal[] {
  const meals = storage.getString(mealKey);
  return meals ? JSON.parse(meals) : [];
}

export function removeMeal(index: number) {
  const currentMeals = getMeals();
  const updatedMeals = currentMeals.filter((_, i) => i !== index);
  storage.set(mealKey, JSON.stringify(updatedMeals));
}
