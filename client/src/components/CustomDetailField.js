import { Text, View } from 'react-native'
import React from 'react'
import { format, parse } from 'date-fns';
import CustomTitle from './CustomTitle';
import { customDetailField } from '../styles/components/customDetailField'
import { fontsTheme } from '../styles/fontsTheme';

const CustomDetailField = ({field, value}) => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const getDynamicStyle = () => {
    if(field === 'status') {
      return value
      ? fontsTheme.green
      : fontsTheme.red
    }

    if(field === 'priority'){
      switch(value.toLowerCase()) {
        case 'high':
          return fontsTheme.red;
        case 'medium':
          return fontsTheme.yellow;
        case 'low':
          return fontsTheme.green;
        default:
          return fontsTheme.default;
      }
    }
    return fontsTheme.default;
  }
  return (
    <View style={field === 'description' ? customDetailField.descriptionContainer : customDetailField.container}>
      <CustomTitle title={`${capitalizeFirstLetter(field)}: `} type='field'/>
      {field === 'description'
        ? (<View style={customDetailField.textContainer}>
            <CustomTitle title={value} type='medium' numberOfLines={0}/>
          </View>)
        : field === 'categories'
        ? (
          <Text style={[getDynamicStyle(), { flexWrap: "wrap" }]} numberOfLines={0}>
            {value}
          </Text>
        ): field === 'date' ? (
          <Text style={getDynamicStyle()}>
            {format(new Date(value), 'MMMM d, yyyy')}
          </Text>
        ) : field === 'time' ? (
          <Text style={getDynamicStyle()}>
            {format(parse(value, 'HH:mm:ss', new Date()), 'hh:mm a')}
          </Text>
        ): (<Text style={getDynamicStyle()}>{field === 'status' ? (value ? 'Completed' : 'Pending') : value}</Text>)
      }
    </View>
  )
}

export default CustomDetailField