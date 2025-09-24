import { Text, type TextProps } from "react-native";
import { styles } from "./styles";

type Props = TextProps & {
  children: React.ReactNode;
};

export function Label({ children, ...rest }: Props) {
  return (
    <Text style={styles.label} {...rest}>
      {children}
    </Text>
  );
}
