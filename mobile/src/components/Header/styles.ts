import { createThemedStyles } from "@/theme/global";

export const styles = createThemedStyles((theme) => ({
  container: {
    padding: 16,
    backgroundColor: theme.colors.white,
  },

  title: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.gray[500],
  },

  subtitle: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.gray[400],
    marginTop: 4,
  },
}));
