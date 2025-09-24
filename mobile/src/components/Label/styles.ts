import { createThemedStyles } from "@/theme/global";

export const styles = createThemedStyles((theme) => ({
  label: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.gray[500],
    marginBottom: 6,
  },
}));
