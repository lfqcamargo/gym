import { getItem, setItem } from "../storage";

export type Food = {
  id: string;
  name: string;
};

export type FoodsByDay = {
  [day: string]: Food[];
};

const STORAGE_KEY = "gymFoodsByDay";

export async function loadFoodsByDay(day: string): Promise<Food[]> {
  const data = await getItem<FoodsByDay>(STORAGE_KEY);
  return data?.[day] ?? [];
}

export async function saveFoodsByDay(
  day: string,
  foods: Food[]
): Promise<void> {
  const data = (await getItem<FoodsByDay>(STORAGE_KEY)) ?? {};
  data[day] = foods;
  await setItem(STORAGE_KEY, data);
}
