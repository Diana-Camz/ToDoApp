import { View, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomIcon from './CustomIcon';
import CustomTitle from './CustomTitle';
import SwitchSelector from "react-native-switch-selector";
import { taskInput } from '../styles/components/taskInput';
import { colorsTheme } from '../styles/colorsTheme';
import { fontsTheme } from '../styles/fontsTheme';

const TaskInput = ({iconName, title, onChangeText, setPriority, placeholder, value, pointerEvents, editable, initial, multiline = false, maxLength, isFocused, onFocus, onBlur}) => {
  const priorityToValue = {
    "low": 0,
    "medium": 1,
    "high": 2
  };
  const valueToPriority = {
    0: "low",
    1: "medium",
    2: "high"
  };
  
  const [switchValue, setSwitchValue] = useState(priorityToValue[initial] ?? 0);

  useEffect(() => {
    if (initial && priorityToValue.hasOwnProperty(initial)) {
      setSwitchValue(priorityToValue[initial]);
    }
  }, [initial]);

  const getSelectedTextColor = (value) => {
    switch (value) {
      case 0: return colorsTheme.green;
      case 1: return colorsTheme.yellow;
      case 2: return colorsTheme.red;
      default: return colorsTheme.darkGray;
    }
  };
  
  const containers = title === 'Description'
      ? taskInput.descriptionContainer
      : title === 'Name'
      ? taskInput.nameContainer
      : taskInput.container

      const options = [
        { label: "Low", value: 0, customIcon: <CustomIcon iconName="ellipse" size={25} color={switchValue === '0' ? colorsTheme.green : colorsTheme.greenDisabled}/>},
        { label: "Medium", value: 1, customIcon: <CustomIcon iconName="ellipse" size={25} color={switchValue === '1' ? colorsTheme.yellow : colorsTheme.yellowDisabled}/> },
        { label: "High", value: 2, customIcon: <CustomIcon iconName="ellipse" size={25} color={switchValue === '2' ? colorsTheme.red : colorsTheme.redDisabled}/> }
      ];

      const handleValueChange = (val) => {
        setSwitchValue(val);
        setPriority(valueToPriority[val]);
      };

  return (
    <View 
      style={[containers, isFocused ? taskInput.focusedInput : {}]}>
      <View style={taskInput.titleContainer}>
        <CustomIcon iconName={iconName} color={isFocused ? colorsTheme.lightBlueSecond : colorsTheme.darkBlue} size={20}/>
        <CustomTitle title={title} type={isFocused ? 'inputFocused':'input'}/>
      </View>
      { title === 'Priority' 
      ? <SwitchSelector
          options={options}
          initial={0}
          value={switchValue}
          onPress={handleValueChange}
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
        onChangeText={onChangeText}
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