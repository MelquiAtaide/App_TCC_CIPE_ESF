import * as React from 'react';
import { LoginScreen } from './src/screens/login';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import { LoadingScreen } from './src/screens/loading';
import { NavegacaoInicio } from './src/navigations/NavegacaoInicio';
import temas from './src/theme';
// import { HomeDEREScreen } from './src/screens/DERE/homeDERE';
import { HeaderHomeTermos } from './src/components/layouts/headerHomeTermos';
import { FavoritoScreen } from './src/screens/DERE/favoritos';
import { NavegacaoPrincipal } from './src/navigations/NavegacaoPrincipal';
import { Rotas } from './src/navigations/routes/Rotas';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  // verifica se o dispositivo está com o tema dark ou light
  const temaDispositivo = useColorScheme();

  // const tema = temas[temaDispositivo] || temas.light;
  const tema = temaDispositivo ? temas[temaDispositivo] : temas.light;
  
  return (
    <ThemeProvider theme={ tema }>
      {/* <NavegacaoInicio/> */}
      {/* <HomeDEREScreen/> */}
      {/* <FavoritoScreen/> */}
      {/* <NavegacaoPrincipal/> */}
      {/* <NavigationContainer> */}
      {/* </NavigationContainer> */}
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </ThemeProvider>
  );
}
