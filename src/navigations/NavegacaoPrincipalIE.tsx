import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/home/Home';

import { FavoritoScreen } from '../screens/DERE/favoritos';
import { PerfilScreen } from '../screens/DERE/Perfil';
import { ListaTermosIEScreen } from '../screens/IE/listaTermosIE';
import { FavoritoIEScreen } from '../screens/IE/favoritos';


const Tab = createBottomTabNavigator();

export function NavegacaoPrincipalIE(){
    return(
            <Tab.Navigator screenOptions={({route}) => ({
                headerShown: false,
                tabBarActiveBackgroundColor: '#73CAC2',
                tabBarInactiveBackgroundColor: '#73CAC2',
                tabBarActiveTintColor: 'white',
                tabBarIcon:({focused, color, size}) => {
                    let iconName;
                    // Condições para mudar os icones quando for selecionada a página
                    if (route.name === 'Favoritos') {
                        iconName = focused ? 'favorite' : 'favorite-outline';
                        return <MaterialIcons name={iconName} size={30} color="#ffffff"/>
                    } else if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                        return <MaterialCommunityIcons name={iconName} size={30} color="#ffffff"/>
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? 'user' : 'user-o';
                        return <FontAwesome name={iconName} size={30} color="#ffffff"/>
                    }
                    return null;
                },
            })}>
                <Tab.Screen name="Home" component={ListaTermosIEScreen} options={{
                    tabBarLabel: () => null
                }}/>
                <Tab.Screen name='Favoritos' component={FavoritoIEScreen} options={{
                    tabBarLabel: () => null
                }}/>
                <Tab.Screen name='Perfil' component={PerfilScreen} options={{
                    tabBarLabel: () => null
                }}/>
            </Tab.Navigator>
    )
}