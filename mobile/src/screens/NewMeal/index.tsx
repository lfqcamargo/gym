import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import foodData from "../../../assets/foods.json";
import type { Food } from "@/@types/foods";
import { Button } from "@/components/Button";
import { NutritionTable } from "@/components/NutritionTable";
import { DayPhill } from "@/components/DayPhill";
import { Header } from "@/components/Header";
import { Label } from "@/components/Label";

export function NewMeal({ navigation, route }: StackRoutesProps<"newMeal">) {
  const [selectedDay, setSelectedDay] = useState<string>(
    route.params?.dayOfWeek ?? "Seg"
  );
  const [foods, setFoods] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Food[]>([]);

  useEffect(() => {
    setFoods(foodData as Food[]);
  }, []);

  useEffect(() => {
    if (
      query.trim() === "" ||
      selectedFood?.["Descrição dos alimentos"] === query
    ) {
      setFiltered([]);
    } else {
      const q = query.toLowerCase();
      setFiltered(
        foods.filter((f) =>
          f["Descrição dos alimentos"].toLowerCase().includes(q)
        )
      );
    }
  }, [query, foods, selectedFood]);

  return (
    <View style={styles.container}>
      <Header
        title={"Nova Refeição"}
        navigate={{ icon: "left", onPress: () => navigation.goBack() }}
      />

      <View>
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

      <View>
        <Label>Nome da comida</Label>
        <TextInput
          style={styles.input}
          placeholder="Ex.: Arroz"
          value={query}
          onChangeText={setQuery}
        />

        {filtered.length > 0 && (
          <View style={styles.dropdown}>
            <FlatList
              data={filtered}
              keyExtractor={(item) => String(item["Id"])}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedFood(item);
                    setQuery(item["Descrição dos alimentos"]);
                    setFiltered([]);
                  }}
                >
                  <View style={styles.item}>
                    <Text style={styles.itemTitle}>
                      {item["Descrição dos alimentos"]}
                    </Text>
                    <Text style={styles.itemSubtitle}>
                      Categoria: {item["Categoria do alimento"]}
                    </Text>
                    <Text style={styles.itemSubtitle}>
                      Energia: {item["Energia/kcal"]} kcal
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>

      <View>
        <Label>Descrição</Label>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Detalhes, preparo, observações..."
          multiline
          textAlignVertical="top"
        />
      </View>

      <View style={styles.row}>
        <View style={styles.flex1}>
          <Label>Quantidade(g)</Label>
          <TextInput
            style={styles.input}
            placeholder="100"
            placeholderTextColor={theme.colors.gray[300]}
          />
        </View>

        <View style={styles.flex1}>
          <Label>Hora</Label>
          <TextInput
            style={styles.input}
            placeholder="12:00"
            placeholderTextColor={theme.colors.gray[300]}
          />
        </View>
      </View>

      <View>
        <NutritionTable
          item={{
            "Energia/kcal": 0,
            "Energia/kj": 0,
            "Proteína/g": 0,
            "Lipídeos/g": 0,
            "Colesterol/mg": "NA",
            "Carboidrato/g": 0,
            "Fibra.Alimentar/g": 0,
            "Sódio/mg": 0,
          }}
        />
      </View>

      <View style={styles.footer}>
        <Button>Salvar</Button>
      </View>
    </View>
  );
}
