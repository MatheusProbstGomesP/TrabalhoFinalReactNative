import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Routes from './src/router'



const App = () => {
  return (

    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>


  )
}

export default App;
