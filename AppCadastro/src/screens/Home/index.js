import React from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';




export const Home = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={{ fontFamily: 'sans-serif', color: '#f12' }}>Home Screen</Text>
            <Button title="Cadastrar" onPress={() => navigation.navigate("Cadastro")} />
        </View>
    )

}

