declare global {
  const theme: {
    colors: {
      blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        800: string;
      };
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
      };
      green: {
        500: string;
      };
      red: {
        400: string;
      };
      white: string;
      black: string;
    };
    fontFamily: {
      bold: string;
      medium: string;
      regular: string;
    };
    fontSize: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    border: {
      borderRadius: {
        8: number;
      };
    };
  };
}

export {};
