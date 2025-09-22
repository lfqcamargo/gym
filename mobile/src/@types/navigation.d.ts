declare global {
  type RootStackParamList = {
    home: undefined;
    newMeal: undefined;
  };

  type StackRoutesProps<T extends keyof RootStackParamList> = {
    navigation: {
      navigate: (
        screen: keyof RootStackParamList,
        params?: RootStackParamList[keyof RootStackParamList]
      ) => void;
    };
  };
}

export {};
