import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { THEME } from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent  
      />  
      { fontsLoaded ? <Routes /> : <Loading /> }
    </NativeBaseProvider>
  );
}


