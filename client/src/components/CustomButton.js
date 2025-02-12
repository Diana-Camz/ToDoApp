import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { customButton } from "../styles/components/customButton";
import CustomTitle from './CustomTitle';

const CustomButton = ({onPress, title, container}) => {
  return (
    <View style={container}>
      <Pressable 
        onPress={onPress}
        >
        <CustomTitle title={title} type='buttons'/>
      </Pressable>
    </View>
  )
}

export default CustomButton