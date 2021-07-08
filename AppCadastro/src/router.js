import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Cadastro } from './screens/Cadastro'
import { Home } from './screens/Home'

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Cadastro" component={Cadastro} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default Routes;