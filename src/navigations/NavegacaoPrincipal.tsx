import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function NavegacaoPrincipal(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}