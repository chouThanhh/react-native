import { View, Text, StyleSheet } from "react-native"
import HomeScreen from "./components/review/home";
import DetailScreen from "./components/review/detail";
import AboutScreen from "./components/review/about";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { OPENSANS_REGULAR } from "./utils/const";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <HomeScreen />
      <DetailScreen />
      <AboutScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
})

export default App;