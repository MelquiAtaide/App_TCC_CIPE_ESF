import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { NavegacaoInicio } from '../NavegacaoInicio';
import { NavegacaoPrincipal } from '../NavegacaoPrincipal';

export function Rotas(){
    const auth = false;

    return (
        <NavigationContainer>
            {auth ? <NavegacaoPrincipal /> : <NavegacaoInicio />}
        </NavigationContainer>
    );
}

// export function Rotas() {
//     const [auth, setAuth] = useState(true);
  
//     const handleLogout = () => {
//       // Lógica para realizar o logout (por exemplo, chamar uma API, limpar tokens, etc.)
//       // Depois de realizar o logout, atualize o estado para false
//       setAuth(false);
//     };
  
//     return (
//       <NavigationContainer>
//         {auth ? (
//           <NavegacaoPrincipal onLogout={handleLogout} />
//         ) : (
//           <NavegacaoInicio onLogin={() => setAuth(true)} />
//         )}
//       </NavigationContainer>
//     );
//   }


// import { NavigationContainer } from '@react-navigation/native';
// import React, { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { NavegacaoInicio } from '../NavegacaoInicio';
// import { NavegacaoPrincipal } from '../NavegacaoPrincipal';
// import { LoginScreen } from '../../screens/login';
// import { getAuth } from '../../contexts/auth';

// export function Rotas() {
//   const [auth, setAuth] = useState(false);
//   // const navigation = useNavigation();

//   useEffect(() => {
//     // Verifica o estado de autenticação salvo localmente
//     const checkAuth = async () => {
//       const authStatus = await getAuth();
//       setAuth(authStatus);
//     };

//     checkAuth();
//   }, []);

// return (
//   <NavigationContainer>
//     {/* {!auth ? <LoginScreen onLoginSuccess={() => setAuth(true)} /> : null}
//     {auth ? <NavegacaoInicio /> : null}
//     {auth ? <NavegacaoPrincipal /> : null} */}
//   </NavigationContainer>
// );
// }