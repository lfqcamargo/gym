import { createThemedStyles } from "@/theme/global";

const baseStyles = createThemedStyles((theme) => ({
  container: {
    height: 48,
    width: "100%",
    borderRadius: theme.border.borderRadius.xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.fontSize.sm,
  },
  pressed: {
    opacity: 0.9,
  },
}));

const variants = createThemedStyles((theme) => ({
  primary: {
    container: {
      backgroundColor: theme.colors.blue[500],
    },
    title: {
      color: theme.colors.white,
    },
  },
  secondary: {
    container: {
      backgroundColor: theme.colors.gray[200],
      borderWidth: 1,
      borderColor: theme.colors.blue[500],
    },
    title: {
      color: theme.colors.blue[500],
    },
  },
  ghost: {
    container: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.colors.blue[500],
    },
    title: {
      color: theme.colors.blue[500],
    },
  },
}));
export const getButtonStyles = (variant: "primary" | "secondary" | "ghost") => {
  return {
    container: [baseStyles.container, variants[variant].container],
    title: [baseStyles.title, variants[variant].title],
  };
};
