import { Loading } from "@/components/Loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { ReactNode, Suspense } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
