import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { customButton } from "../styles/components/customButton";
import { fontsTheme } from "../styles/fontsTheme";

const CustomButton = ({onPress, title}) => {
  return (
    <View style={customButton.container}>
      <Pressable 
        onPress={onPress}
        >
        <Text style={fontsTheme.buttons}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default CustomButton