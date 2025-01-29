import { View, Text, TextInput } from 'react-native';
import React from 'react';
import CustomIcon from './CustomIcon';
import CustomTitle from './CustomTitle';
import { taskInput } from '../styles/components/taskInput';
import { colorsTheme } from '../styles/colorsTheme';
import { fontsTheme } from '../styles/fontsTheme';

const TaskInput = ({iconName, color, size, title, type, placeholder}) => {
  return (
    <View style={taskInput.container}>
      <View style={taskInput.titleContainer}>
        <CustomIcon iconName={iconName} color={color} size={size}/>
        <CustomTitle title={title} type={type}/>
      </View>
      <TextInput
        onChangeText={(val) => console.log(val)}
        placeholder={placeholder}
        placeholderTextColor={colorsTheme.darkBlue}
        maxLength={20}
        style={[taskInput.input, fontsTheme.regular]}
      />
    </View>
  )
}

export default TaskInput