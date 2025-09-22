import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { getButtonStyles } from "./styles";

type Props = TouchableOpacityProps & {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
};

export function Button({ variant = "primary", children, ...rest }: Props) {
  const styles = getButtonStyles(variant);

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}
