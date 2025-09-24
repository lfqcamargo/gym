import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

type HeaderProps = {
  title: string;
  subtitle?: string;

  navigate?: {
    icon?: "right" | "left";
    onPress?: () => void;
  };
};

export function Header({ title, subtitle, navigate }: HeaderProps) {
  return (
    <View style={styles.container}>
      {navigate?.icon === "left" && (
        <TouchableOpacity onPress={navigate.onPress}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      )}

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>

      {navigate?.icon === "right" && (
        <TouchableOpacity onPress={navigate?.onPress}>
          <Feather name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
}
