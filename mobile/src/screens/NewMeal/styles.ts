import { createThemedStyles } from "@/theme/global";

export const styles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray[50],
    gap: 18,
    padding: 4,
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  form: {
    gap: 16,
  },

  label: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.gray[500],
    marginBottom: 6,
  },

  input: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
    borderRadius: theme.border.borderRadius.xl,
    height: 48,
    paddingHorizontal: 16,
    fontSize: theme.fontSize.md,
  },

  textarea: {
    minHeight: 96,
    paddingVertical: 12,
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },

  flex1: {
    flex: 1,
  },

  switchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
    borderRadius: theme.border.borderRadius.xl,
    paddingHorizontal: 16,
    height: 48,
  },

  switchLabel: {
    fontSize: theme.fontSize.md,
    color: theme.colors.gray[500],
  },

  footer: {
    marginTop: "auto",
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
}));
