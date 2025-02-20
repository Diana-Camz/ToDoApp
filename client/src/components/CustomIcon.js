import { Pressable, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import {customIcon} from '../styles/components/customIcon'

const CustomIcon = ({onPress, iconName, color, size, background}) => {
  return (
    <View style={background ? [customIcon.container, customIcon.background] : customIcon.container}>
      <Pressable onPress={onPress}>
        <Ionicons name={iconName} size={size} color={color}/>
      </Pressable>
    </View>
  )
}

export default CustomIcon