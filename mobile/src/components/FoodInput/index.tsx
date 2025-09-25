import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Input } from "@/components/Input";
import { styles } from "./styles";
import foodData from "../../../assets/foods.json";
import type { Food } from "@/@types/foods";

type Props = {
  value: string;
  onChangeValue: (val: string) => void;
  onSelectFood?: (food: Food) => void;
  error?: string;
};

export function FoodInput({
  value,
  onChangeValue,
  onSelectFood,
  error,
}: Props) {
  const [filtered, setFiltered] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  const foods: Food[] = foodData as Food[];

  useEffect(() => {
    if (!value || selectedFood?.["Descrição dos alimentos"] === value) {
      setFiltered([]);
    } else {
      const q = value.toLowerCase();
      setFiltered(
        foods.filter((f) =>
          f["Descrição dos alimentos"].toLowerCase().includes(q)
        )
      );
    }
  }, [value, selectedFood]);

  const handleSelect = (food: Food) => {
    onChangeValue(food["Descrição dos alimentos"]);
    setSelectedFood(food);
    setFiltered([]);
    onSelectFood?.(food);
  };

  return (
    <View>
      <Input
        placeholder="Ex.: Arroz"
        value={value}
        onChangeText={(val) => {
          onChangeValue(val);
          setSelectedFood(null);
        }}
        error={error}
      />

      {filtered.length > 0 && (
        <View style={styles.dropdown}>
          <FlatList
            data={filtered}
            keyExtractor={(item) => String(item["Id"])}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)}>
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
  );
}
