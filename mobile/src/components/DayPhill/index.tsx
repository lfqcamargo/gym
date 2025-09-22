import { Text, TouchableOpacity } from "react-native";
import { getDayPhillStyles } from "./styles";

type DayPillProps = {
  label: string;
  selected?: "true" | "false";
  onPress?: (date: string) => void;
};

export function DayPhill({ label, selected = "false", onPress }: DayPillProps) {
  const styles = getDayPhillStyles(selected);

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress?.(label)}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
