import { createThemedStyles } from "@/theme/global";

const baseStyles = createThemedStyles((theme) => ({
  container: {
    width: "100%",
  },

  input: {
    width: "100%",
    fontFamily: theme.fontFamily.regular,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
    borderRadius: theme.border.borderRadius.xl,
    height: 48,
    paddingHorizontal: 16,
    fontSize: theme.fontSize.md,
  },

  placeholder: {
    color: theme.colors.gray[400],
  },

  errorText: {
    marginTop: 4,
    color: theme.colors.red[500],
    fontSize: theme.fontSize.xs,
    fontFamily: theme.fontFamily.regular,
  },
}));

const variants = createThemedStyles((theme) => ({
  default: {
    input: {
      borderColor: theme.colors.gray[300],
      color: theme.colors.gray[900],
    },
  },
  error: {
    input: {
      borderColor: theme.colors.red[500],
      color: theme.colors.gray[900],
    },
  },
}));

export const getInputStyles = (hasError: boolean) => {
  return {
    container: baseStyles.container,
    input: [
      baseStyles.input,
      hasError ? variants.error.input : variants.default.input,
    ],
    placeholder: baseStyles.placeholder,
    errorText: baseStyles.errorText,
  };
};
