// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AUTH_KEY = 'auth';

// export const setAuth = async (value: boolean): Promise<void> => {
//   try {
//     await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(value));
//   } catch (error) {
//     console.error('Erro ao definir o estado de autenticação:', error);
//   }
// };

// export const getAuth = async (): Promise<boolean> => {
//   try {
//     const value = await AsyncStorage.getItem(AUTH_KEY);
//     return value !== null ? JSON.parse(value) : false;
//   } catch (error) {
//     console.error('Erro ao obter o estado de autenticação:', error);
//     return false;
//   }
// };

// export const logout = async () => {
//   try {
//     // Execute quaisquer ações de logout necessárias
//     // Por exemplo, limpar o token, limpar dados de usuário, etc.
//     // ...

//     // Redefina o estado de autenticação para falso
//     await setAuth(false);
//   } catch (error) {
//     console.error('Erro ao fazer logout:', error);
//   }
// };

