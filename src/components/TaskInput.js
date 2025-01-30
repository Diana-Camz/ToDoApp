import { View, Text, TextInput } from 'react-native';
import React from 'react';
import CustomIcon from './CustomIcon';
import CustomTitle from './CustomTitle';
import { taskInput } from '../styles/components/taskInput';
import { colorsTheme } from '../styles/colorsTheme';
import { fontsTheme } from '../styles/fontsTheme';

const TaskInput = ({iconName, title, placeholder}) => {
  return (
    <View style={taskInput.container}>
      <View style={taskInput.titleContainer}>
        <CustomIcon iconName={iconName} color={colorsTheme.lightblue} size={20}/>
        <CustomTitle title={title} type='input'/>
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