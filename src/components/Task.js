import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import Reanimated, {useAnimatedStyle} from 'react-native-reanimated'
import { View, Text } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import { task } from '../styles/components/task'

const RightAction = (prog, drag) => {
    const styleAnimation = useAnimatedStyle(() => {
        return {
            transform: [{translateX: drag.value + 100}],
        }
    });

    <Reanimated.View style={styleAnimation}>
        <View style={task.basicContainer}>
            <CustomIcon onPress={() => navigation.navigate('EditTask')} iconName="pencil-sharp" size={35} color={colorsTheme.darkBlue}/>
            <CustomIcon onPress={() => {}} iconName="trash" size={35} color={colorsTheme.redTrash}/>
        </View>
    </Reanimated.View>
}

const Task = ({title, emoji, time, status, priority}) => {
    const priorityColor = () => {
        if(priority === 'high'){
            return colorsTheme.red;
        } else if(priority === 'medium'){
            return colorsTheme.yellow;
        } else {
            return colorsTheme.green;
        }
    }
  return (
    // <GestureHandlerRootView>
    //   <Text>Task</Text>
    // </GestureHandlerRootView>
    <View style={[task.basicContainer, task.taskContainer]}>
        <View style={task.ellipseContainer}>
            <CustomIcon iconName={status ?'checkmark-circle' : 'ellipse-outline'} color={status ? colorsTheme.green : colorsTheme.darkGray} size={40}/>
        </View>
        <View style={[task.basicContainer, task.descriptionContainer]}>
            <View>
                <Text style={task.emoji}>{emoji}</Text>
            </View>
            <View style={task.textContainer}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={task.title}>{title}</Text>
                <Text style={task.date}>{time}</Text>
            </View>
        </View>
        <View style={task.ellipseContainer}>
            <CustomIcon iconName={'ellipse'} color={priorityColor(priority)} size={40}/>
        </View>
    </View>
  )
}

export default Task