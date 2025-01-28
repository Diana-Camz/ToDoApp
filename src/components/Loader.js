import { View, Text } from 'react-native'
import { Image } from 'expo-image'
import React from 'react'
import { containers } from '../styles/containers'

const Loader = () => {
  return (
    <View style={containers.main}>
      <Image 
      source={require('../images/logo.gif')}
      style={containers.loader}
      contentFit='cover'
      transition={1000}/>
      <Text>Cargando...</Text>
    </View>

  );
}

export default Loader