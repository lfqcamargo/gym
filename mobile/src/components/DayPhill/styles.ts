import { createThemedStyles } from "@/theme/global";

const baseStyles = createThemedStyles((theme) => ({
  container: {
    height: 48,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.border.borderRadius.full,
    borderWidth: 1,
  },

  text: {
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fontFamily.medium,
  },
}));

const selecteds = createThemedStyles((theme) => ({
  false: {
    container: {
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.zinc[200],
    },

    text: {
      color: theme.colors.zinc[700],
    },
  },
  true: {
    container: {
      backgroundColor: theme.colors.green[600],
      borderColor: theme.colors.green[600],
    },

    text: {
      color: theme.colors.white,
    },
  },
}));

export const getDayPhillStyles = (selected: "true" | "false") => {
  return {
    container: [baseStyles.container, selecteds[selected].container],
    text: [[baseStyles.text, selecteds[selected].text]],
  };
};
