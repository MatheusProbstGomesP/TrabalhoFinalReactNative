import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";

export const AddList = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);


  function handleAddName() {
    const data = {
      id: Math.random(),
      name: name,
    };
    setNames([...names, data])
  }


  return (
    <View> 
      <TextInput style={styles.textInputContainer} value={name} onChange={event => setName(event.nativeEvent.text)} />
      <TouchableOpacity onPress={() => handleAddName()} style={styles.button} >
        <Text>
          Cadastrar
        </Text>
      </TouchableOpacity>
      <FlatList data={names} renderItem={({ item }) => <Text>{item.name}</Text>} keyExtractor={item => item.id}></FlatList>
    </View>
  );

};
