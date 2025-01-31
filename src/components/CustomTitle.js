import { View, Text } from 'react-native'
import React from 'react'
import { fontsTheme } from '../styles/fontsTheme'


const CustomTitle = ({title, type}) => {
  const containsNewLine = title.includes('\n') || "Description";
  return (
        <View>
            <Text 
            style={[fontsTheme[type]]}
            numberOfLines={containsNewLine ? 0 : 1} 
            ellipsizeMode="tail">{title}</Text>
        </View>
  )
}

export default CustomTitle