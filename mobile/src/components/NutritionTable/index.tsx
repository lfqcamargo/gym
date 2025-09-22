import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type NutritionInfoProps = {
  item: {
    "Energia/kcal": number;
    "Energia/kj": number;
    "Proteína/g": number;
    "Lipídeos/g": number;
    "Colesterol/mg": string | "NA";
    "Carboidrato/g": number;
    "Fibra.Alimentar/g": number;
    "Sódio/mg": number;
  };
};

export function NutritionTable({ item }: NutritionInfoProps) {
  return (
    <View style={styles.tableContainer}>
      <Text style={styles.tableTitle}>Informações Nutricionais</Text>
      <View style={styles.tableRow}>
        <Text style={styles.tableCellLabel}>Energia (kcal)</Text>
        <Text style={styles.tableCellValue}>{item["Energia/kcal"]}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCellLabel}>Energia (kJ)</Text>
        <Text style={styles.tableCellValue}>{item["Energia/kj"]}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCellLabel}>Proteína (g)</Text>
        <Text style={styles.tableCellValue}>{item["Proteína/g"]}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCellLabel}>Lipídeos (g)</Text>
        <Text style={styles.tableCellValue}>{item["Lipídeos/g"]}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCellLabel}>Colesterol (mg)</Text>
        <Text style={styles.tableCellValue}>{item["Colesterol/mg"]}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCellLabel}>Carboidrato (g)</Text>
        <Text style={styles.tableCellValue}>{item["Carboidrato/g"]}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCellLabel}>Fibra Alimentar (g)</Text>
        <Text style={styles.tableCellValue}>{item["Fibra.Alimentar/g"]}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableCellLabel}>Sódio (mg)</Text>
        <Text style={styles.tableCellValue}>{item["Sódio/mg"]}</Text>
      </View>
    </View>
  );
}
