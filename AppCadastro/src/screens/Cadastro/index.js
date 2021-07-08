import React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AddList } from '../../components/TextInput'
export const Cadastro = () => {
  const navigation = useNavigation();



  return (
    <View>
      <Text>Cadastro</Text>
      <Button title="Ir para Home" onPress={() => navigation.navigate("Home")} />
      <AddList />
    </View>
  )
}

