import { Header } from "@/components/Header";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { DayPhill } from "@/components/DayPhill";
import { useEffect, useState } from "react";
import {
  loadFoodsByDay,
  saveFoodsByDay,
} from "@/database/repositories/foodsRepository";

type Food = {
  id: string;
  name: string;
};

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

  async function saveFoods(newFoods: Food[]) {
    await saveFoodsByDay(selectedDay, newFoods);
    setFoods(newFoods);
  }

  async function addFood() {
    const newFood: Food = {
      id: String(Date.now()),
      name: "Banana 🍌",
    };
    await saveFoods([...foods, newFood]);
  }

  async function removeFood() {
    await saveFoods(foods.slice(0, -1));
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
        <Text style={{ fontWeight: "bold", marginBottom: 8 }}>
          {selectedDay} ({foods.length})
        </Text>

        {foods.map((food) => (
          <Text key={food.id} style={{ marginVertical: 4 }}>
            • {food.name}
          </Text>
        ))}

        <TouchableOpacity style={stylesGreen.button} onPress={addFood}>
          <Text style={stylesBtn.text}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesRed.button} onPress={removeFood}>
          <Text style={stylesBtn.text}>Remover</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const stylesGreen = StyleSheet.create({
  button: {
    backgroundColor: "#059669",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: "center",
  },
});

const stylesRed = StyleSheet.create({
  button: {
    backgroundColor: "#FF6767",
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: "center",
  },
});

const stylesBtn = StyleSheet.create({
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
