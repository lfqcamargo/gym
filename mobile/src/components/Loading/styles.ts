import { createThemedStyles } from "@/theme/global";

export const styles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray[100],
  },
}));
