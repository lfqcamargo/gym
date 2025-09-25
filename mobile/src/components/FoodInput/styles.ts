import { createThemedStyles } from "@/theme/global";

export const styles = createThemedStyles((theme) => ({
  dropdown: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    maxHeight: 200,
    zIndex: 1000,
  },

  item: {
    padding: 12,
    backgroundColor: theme.colors.white,
    borderRadius: theme.border.borderRadius.xl,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
  },

  itemTitle: {
    fontSize: theme.fontSize.md,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.gray[700],
  },

  itemSubtitle: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.gray[400],
  },
}));
