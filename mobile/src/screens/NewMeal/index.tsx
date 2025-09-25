import React from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { NutritionTable } from "@/components/NutritionTable";
import { DayPhill } from "@/components/DayPhill";
import { Header } from "@/components/Header";
import { Label } from "@/components/Label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mealSchema, MealFormData } from "./lib/mealSchema";
import { Input } from "@/components/Input";
import { FoodInput } from "@/components/FoodInput";
import { TimePickerField } from "@/components/TimeInput";

type DayOfWeek = "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sab" | "Dom";

export function NewMeal({ navigation, route }: StackRoutesProps<"newMeal">) {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<MealFormData>({
    resolver: zodResolver(mealSchema),
    defaultValues: {
      dayOfWeek: (route.params?.dayOfWeek as DayOfWeek) ?? "Seg",
      food: "",
      description: "",
      quantity: 0,
      time: "",
      foodId: undefined,
    },
  });

  function onSubmit(data: MealFormData) {
    console.log("Form data:", data.foodId);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Header
        title={"Nova Refeição"}
        navigate={{ icon: "left", onPress: () => navigation.goBack() }}
      />

      {/* Dias da semana */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 6, paddingHorizontal: 16 }}
        >
          {["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"].map((day) => (
            <DayPhill
              key={day}
              label={day}
              selected={watch("dayOfWeek") === day ? "true" : "false"}
              onPress={() => setValue("dayOfWeek", day as DayOfWeek)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Nome do alimento */}
      <View>
        <Label>Nome do Alimento</Label>
        <FoodInput
          value={watch("food")}
          onChangeValue={(val) => setValue("food", val)}
          onSelectFood={(food) => {
            setValue("foodId", food.Id);
          }}
          error={errors.food?.message}
        />
      </View>

      {/* Descrição */}
      <View>
        <Label>Descrição</Label>
        <Input
          style={[styles.input, styles.textarea]}
          placeholder="Detalhes, preparo, observações..."
          multiline
          textAlignVertical="top"
          value={watch("description")}
          onChangeText={(val) => setValue("description", val)}
          error={errors.description?.message}
        />
      </View>

      {/* Quantidade e hora */}
      <View>
        <View style={styles.row}>
          <View style={styles.flex1}>
            <Label>Quantidade(g)</Label>
            <Input
              placeholder="100"
              value={String(watch("quantity"))}
              onChangeText={(val) => {
                const parsed = Number(val);
                setValue("quantity", isNaN(parsed) ? 0 : parsed);
              }}
              keyboardType="numeric"
              error={errors.quantity?.message}
            />
          </View>

          <View style={styles.flex1}>
            <Label>Hora</Label>
            <TimePickerField control={control} />
          </View>
        </View>
      </View>

      {/* Tabela nutricional placeholder */}
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

      {/* Botão */}
      <View style={styles.footer}>
        <Button onPress={handleSubmit(onSubmit)}>Salvar</Button>
      </View>
    </View>
  );
}
