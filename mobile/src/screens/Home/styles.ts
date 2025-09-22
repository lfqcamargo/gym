import { createThemedStyles } from "@/theme/global";

export const styles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
  },

  dayPhillContainer: {
    paddingVertical: 16,
    justifyContent: "flex-end",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.gray[700],
  },
  buttonWrapper: {
    width: 128,
  },
}));
