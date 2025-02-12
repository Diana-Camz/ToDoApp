import { View, Text } from 'react-native'
import React from 'react'
import { fontsTheme } from '../styles/fontsTheme'


const CustomTitle = ({title, type, numberOfLines = 1}) => {
  return (
        <View>
            <Text 
            style={[fontsTheme[type]]}
            numberOfLines={numberOfLines} 
            ellipsizeMode="tail">{title}</Text>
        </View>
  )
}

export default CustomTitle