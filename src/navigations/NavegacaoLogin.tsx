import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// telas
import { LoginScreen } from '../screens/login';
import { CadastroScreen } from '../screens/cadastro';
import { RecuperarSenhaScreen } from '../screens/recuperarSenha';
import { HomeScreen } from '../screens/home/Home';

const Stack = createStackNavigator();
export type NavegacaoLoginParams = {
    Login: undefined,
    Cadastro: undefined,
    RecuperarSenha: undefined,
    Home: undefined
}

export const NavegacaoLogin = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)