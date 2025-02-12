import { View, Text, TextInput } from 'react-native';
import React, { use, useState } from 'react';
import CustomIcon from './CustomIcon';
import CustomTitle from './CustomTitle';
import SwitchSelector from "react-native-switch-selector";
import { taskInput } from '../styles/components/taskInput';
import { colorsTheme } from '../styles/colorsTheme';
import { fontsTheme } from '../styles/fontsTheme';

const TaskInput = ({iconName, title, placeholder, value, pointerEvents, editable, multiline = false, maxLength, isFocused, onFocus, onBlur}) => {
  const [switchValue, setSwitchValue] = useState('1');

  const getSelectedTextColor = (value) => {
    switch (value) {
      case '1': return colorsTheme.green;
      case '2': return colorsTheme.yellow;
      case '3': return colorsTheme.red;
      default: return colorsTheme.darkGray;
    }
  };
  
  const descrContainer = title === 'Description'
      ? taskInput.descriptionContainer
      : taskInput.container

      const options = [
        { label: "Low", value: "1", customIcon: <CustomIcon iconName="ellipse" size={25} color={switchValue === '1' ? colorsTheme.green : colorsTheme.greenDisabled}/>},
        { label: "Medium", value: "2", customIcon: <CustomIcon iconName="ellipse" size={25} color={switchValue === '2' ? colorsTheme.yellow : colorsTheme.yellowDisabled}/> },
        { label: "High", value: "3", customIcon: <CustomIcon iconName="ellipse" size={25} color={switchValue === '3' ? colorsTheme.red : colorsTheme.redDisabled}/> }
      ];

      const handleValue = (value) => {
        setSwitchValue(value)
      }
  return (
    <View 
      style={[descrContainer, isFocused ? taskInput.focusedInput : {}]}>
      <View style={taskInput.titleContainer}>
        <CustomIcon iconName={iconName} color={isFocused ? colorsTheme.lightBlueSecond : colorsTheme.darkBlue} size={20}/>
        <CustomTitle title={title} type={isFocused ? 'inputFocused':'input'}/>
      </View>
      { title === 'Priority' 
      ? <SwitchSelector
          options={options}
          initial={0}
          onPress={value => handleValue(value)}
          style={taskInput.swithContainer}
          textContainerStyle={taskInput.textContainerStyle}
          textColor={colorsTheme.darkGray}
          textStyle={taskInput.textStyle}
          selectedTextContainerStyle={taskInput.textContainerStyle}
          selectedTextStyle={taskInput.selectedTextStyle}
          selectedColor={getSelectedTextColor(switchValue)}
          buttonColor={colorsTheme.lightGray}
          borderWidth={2}
          borderColor={colorsTheme.darkGray}
          hasPadding
          backgroundColor={colorsTheme.lightDark}
        />
      : <TextInput
        onChangeText={(val) => console.log(val)}
        value={value}
        pointerEvents={pointerEvents}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={colorsTheme.darkBlue}
        maxLength={maxLength}
        style={[taskInput.input, fontsTheme.regular]}
        multiline={multiline}
        onFocus={onFocus}
        onBlur={onBlur}
      />}
    </View>
  )
}

export default TaskInput