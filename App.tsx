/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { Router } from '@/app/Router';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
SplashScreen.preventAutoHideAsync();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Root: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    Inter: require('./assets/fonts/Inter.ttf'),
    Pacifico: require('./assets/fonts/Pacifico.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <Router />
        </SafeAreaView>
      }
    </NavigationContainer>
  );
};

export default Root;
