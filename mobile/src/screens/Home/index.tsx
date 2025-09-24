import { Header } from "@/components/Header";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { DayPhill } from "@/components/DayPhill";
import { useEffect, useState } from "react";
import { loadFoodsByDay } from "@/database/repositories/foodsRepository";
import { Button } from "@/components/Button";
import type { Food } from "@/@types/foods";

export function Home({ navigation }: StackRoutesProps<"home">) {
  const [selectedDay, setSelectedDay] = useState<string>("Seg");
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    loadFoods();
  }, [selectedDay]);

  async function loadFoods() {
    const data = await loadFoodsByDay(selectedDay);
    setFoods(data);
  }

  return (
    <View style={styles.container}>
      <Header title="Minha Dieta" subtitle="Seu resumo de hoje" />

      <View style={styles.dayPhillContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 6,
            paddingHorizontal: 16,
          }}
        >
          {["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"].map((day) => (
            <DayPhill
              key={day}
              label={day}
              selected={selectedDay === day ? "true" : "false"}
              onPress={setSelectedDay}
            />
          ))}
        </ScrollView>
      </View>

      <ScrollView style={{ flex: 1, padding: 16 }}>
        {foods.map((food) => (
          <Text key={food.Id} style={{ marginVertical: 4 }}>
            • {food["Descrição dos alimentos"]}
          </Text>
        ))}

        <View style={styles.headerRow}>
          <Text style={styles.title}>Refeições</Text>
          <View style={styles.buttonWrapper}>
            <Button
              variant="primary"
              onPress={() =>
                navigation.navigate("newMeal", { dayOfWeek: selectedDay })
              }
            >
              Nova
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
