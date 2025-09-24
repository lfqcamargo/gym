import { createThemedStyles } from "@/theme/global";

export const styles = createThemedStyles((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: theme.colors.white,
  },

  textContainer: {
    flex: 1,
    marginHorizontal: 8,
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
