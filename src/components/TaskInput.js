import { View, Text, TextInput } from 'react-native';
import React from 'react';
import CustomIcon from './CustomIcon';
import CustomTitle from './CustomTitle';
import { taskInput } from '../styles/components/taskInput';
import { colorsTheme } from '../styles/colorsTheme';
import { fontsTheme } from '../styles/fontsTheme';

const TaskInput = ({iconName, title, placeholder, value, multiline = false, maxLength, isFocused, onFocus, onBlur}) => {
  const descrContainer = title === 'Description'
      ? taskInput.descriptionContainer
      : taskInput.container
  return (
    <View style={[descrContainer, isFocused ? taskInput.focusedInput : {}]}>
      <View style={taskInput.titleContainer}>
        <CustomIcon iconName={iconName} color={isFocused ? colorsTheme.lightBlueSecond : colorsTheme.darkBlue} size={20}/>
        <CustomTitle title={title} type={isFocused ? 'inputFocused':'input'}/>
      </View>
      <TextInput
        onChangeText={(val) => console.log(val)}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colorsTheme.darkBlue}
        maxLength={maxLength}
        style={[taskInput.input, fontsTheme.regular]}
        multiline={multiline}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  )
}

export default TaskInput