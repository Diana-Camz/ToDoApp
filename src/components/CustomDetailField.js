import { Text, View } from 'react-native'
import React from 'react'
import { customDetailField } from '../styles/components/customDetailField'

const CustomDetailField = ({field, value}) => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const getDynamicStyle = () => {
    if(field === 'status') {
      return value
      ? customDetailField.green
      : customDetailField.red
    }

    if(field === 'priority'){
      switch(value.toLowerCase()) {
        case 'high':
          return customDetailField.red;
        case 'medium':
          return customDetailField.yellow;
        case 'low':
          return customDetailField.green;
        default:
          return customDetailField.value;
      }
    }
    return customDetailField.value;
  }
  return (
    <View style={field === 'description' ? customDetailField.descriptionContainer : customDetailField.container}>
      <Text style={customDetailField.title}>{capitalizeFirstLetter(field)}: </Text>
      {field === 'description'
      ? (<View style={customDetailField.textContainer}>
          <Text style={customDetailField.value}>{value}</Text>
        </View>)
      : <Text style={getDynamicStyle()}>{field === 'status' ? (value ? 'Completed' : 'Pending') : value}</Text>}
    </View>
  )
}

export default CustomDetailField