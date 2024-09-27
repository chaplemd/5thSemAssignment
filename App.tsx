import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";


import Navigation from "./navigation";

export default function App() {
  const [fontsLoaded] = useFonts();

  return !fontsLoaded ? null : (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}
