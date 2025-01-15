import { Pressable, StyleSheet, Text, View } from 'react-native'
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

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 10,
    },
    button_container: {
        width: 290,
        height: 43,
        borderWidth: 1.5,
        borderColor: '#9700FF',
        borderRadius: 8,
        justifyContent: 'center',
    },
    title: {
        color: '#9700FF',
        fontSize: 17,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})