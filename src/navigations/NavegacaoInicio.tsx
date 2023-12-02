import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// telas
import { LoginScreen } from '../screens/login';
import { CadastroScreen } from '../screens/cadastro';
import { RecuperarSenhaScreen } from '../screens/recuperarSenha';
import { HomeScreen } from '../screens/home/Home';
import { HomeDEREScreen } from '../screens/DERE/homeDERE';

const Stack = createStackNavigator();
export type NavegacaoInicioParams = {
    Login: undefined,
    Cadastro: undefined,
    RecuperarSenha: undefined,
    Home: undefined,
    HomeDERE: undefined
}

export const NavegacaoInicio = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
            <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaScreen} />
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: true, 
                                                                        title:"CIPE-ESF", 
                                                                        headerStyle: { backgroundColor: "#73CAC2"}, 
                                                                        headerTitleAlign: "center", 
                                                                        headerTitleStyle:{color: '#FFFFFF'},
                                                                        headerLeft: () => null }} />
            <Stack.Screen name='HomeDERE' component={HomeDEREScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)