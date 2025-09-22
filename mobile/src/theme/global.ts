import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { theme } from "./index";

// Configuração global do tema
const globalTheme = theme;

// Disponibiliza o tema globalmente
(global as any).theme = globalTheme;

// Função para criar estilos com acesso ao tema e tipagem completa
export const createThemedStyles = <
  T extends Record<
    string,
    | ViewStyle
    | TextStyle
    | ImageStyle
    | Record<string, ViewStyle | TextStyle | ImageStyle>
  >
>(
  styleFunction: (theme: typeof globalTheme) => T
): T => {
  return StyleSheet.create(styleFunction(globalTheme));
};

// Exporta o tema para uso direto se necessário
export { globalTheme as theme };
