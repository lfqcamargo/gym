declare global {
  type RootStackParamList = {
    home: undefined;
    newMeal: undefined | { dayOfWeek: string };
  };

  type StackRoutesProps<T extends keyof RootStackParamList> = {
    navigation: {
      navigate: (
        screen: keyof RootStackParamList,
        params?: RootStackParamList[keyof RootStackParamList]
      ) => void;
      goBack: () => void;
    };
    route: {
      params?: RootStackParamList[T];
    };
    go;
  };
}

export {};
