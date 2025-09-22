import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export function Teste({ navigation }: StackRoutesProps<"teste">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Teste</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("home")}
      >
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#34C759",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
