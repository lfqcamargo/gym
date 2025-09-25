import { TextInput, Text, View, TextInputProps } from "react-native";
import { getInputStyles } from "./styles";

type Props = TextInputProps & {
  error?: string;
};

export function Input({ error, ...rest }: Props) {
  const styles = getInputStyles(!!error);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
        {...rest}
      />
      {error && <Text style={styles.errorText}>{error ? error : " "}</Text>}
    </View>
  );
}
