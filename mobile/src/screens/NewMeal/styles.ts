import { createThemedStyles } from "@/theme/global";

export const styles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray[50],
    gap: 12,
    padding: 2,
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

  inputError: {
    borderColor: theme.colors.red[500],
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
}));
