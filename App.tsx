/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import styled, { ThemeProvider } from 'styled-components/native';
import { Router } from '@/app/router/Router';
import { theme } from '@/app/theme';

void SplashScreen.preventAutoHideAsync();

const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

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
    <ThemeProvider theme={theme}>
      <SafeArea onLayout={onLayoutRootView}>
        <Router />
      </SafeArea>
    </ThemeProvider>
  );
};

export default Root;
