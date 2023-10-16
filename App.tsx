import * as React from 'react';
import { LoginScreen } from './src/screens/login';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import { LoadingScreen } from './src/screens/loading';
import { NavegacaoLogin } from './src/navigations/NavegacaoLogin';
import temas from './src/theme';

export default function App() {
  // verifica se o dispositivo está com o tema dark ou light
  const temaDispositivo = useColorScheme();

  // const tema = temas[temaDispositivo] || temas.light;
  const tema = temaDispositivo ? temas[temaDispositivo] : temas.light;
  
  return (
    <ThemeProvider theme={ tema }>
      {/* <LoginScreen/> */}
      <NavegacaoLogin/>
    </ThemeProvider>
  );
}
