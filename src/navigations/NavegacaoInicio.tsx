import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// telas
import { LoginScreen } from '../screens/login';
import { CadastroScreen } from '../screens/cadastro';
import { RecuperarSenhaScreen } from '../screens/recuperarSenha';
import { HomeScreen } from '../screens/home/Home';
import { ListaTermosScreen } from '../screens/DERE/homeDERE';
import { NavegacaoPrincipal } from './NavegacaoPrincipal';
import { NavegacaoPrincipalIE } from './NavegacaoPrincipalIE';

const Stack = createStackNavigator();
export type NavegacaoInicioParams = {
    Login: undefined,
    Cadastro: undefined,
    RecuperarSenha: undefined,
    Inicio: undefined,
    ListaTermos: undefined,
    ListaTermosIE: undefined
}

export const NavegacaoInicio = () => (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaScreen} />
        <Stack.Screen name="Inicio" component={HomeScreen} options={{headerShown: true, 
                                                                    title:"CIPE-ESF", 
                                                                    headerStyle: { backgroundColor: "#73CAC2"}, 
                                                                    headerTitleAlign: "center", 
                                                                    headerTitleStyle:{color: '#FFFFFF'},
                                                                    headerLeft: () => null }} />
        <Stack.Screen name='ListaTermos' component={NavegacaoPrincipal} />
        <Stack.Screen name='ListaTermosIE' component={NavegacaoPrincipalIE} />
    </Stack.Navigator>
)