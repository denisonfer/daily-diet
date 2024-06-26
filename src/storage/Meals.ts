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

export function updateMeal(meal: TNewMeal) {
  const currentMeals = getMeals();

  const updatedMeals = currentMeals.map((m) =>
    m.id === meal.id ? { ...m, ...meal } : m
  );

  storage.set(mealKey, JSON.stringify(updatedMeals));
}

export function removeMeal(id: string) {
  const currentMeals = getMeals();
  const updatedMeals = currentMeals.filter((meal) => meal.id !== id);
  storage.set(mealKey, JSON.stringify(updatedMeals));
}
