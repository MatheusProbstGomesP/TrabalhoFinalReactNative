import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Cadastro } from './screens/Cadastro';
import { Home } from './screens/Home';
import { Lista } from './screens/Lista';


const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{activeTintColor: 'red', inactiveTintColor :'black'}}>
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <FeatherIcon name="home" size={size} color={color} />
                        )
                    }} />
                <Tab.Screen name="Cadastro" component={Cadastro}  options={{
                        tabBarIcon: ({ size, color }) => (
                            <FeatherIcon name="user-plus" size={size} color={color} />
                        )
                    }} />
                    <Tab.Screen name="Lista" component={Lista} options={{
                        tabBarIcon: ({ size, color }) => (
                            <FeatherIcon name="align-justify" size={size} color={color} />
                        )
                    }}/>

            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default Routes;