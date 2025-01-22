import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import Reanimated, {useDerivedValue, useAnimatedStyle} from 'react-native-reanimated'
import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import CustomIcon from './CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import { task } from '../styles/components/task'
import { useNavigation } from '@react-navigation/native'


const RightAction = ({prog, drag}) => {
    const navigation = useNavigation();

    const animatedOffset = useDerivedValue(() => {
        return drag.value + 100;
    });

    const styleAnimation = useAnimatedStyle(() => {
        return {
            transform: [{translateX: animatedOffset.value}],
        };
    });
    return (
        <Reanimated.View style={styleAnimation}>
            <View style={[task.basicContainer, task.swipeableContainer]}>
                <CustomIcon 
                    onPress={() => navigation.navigate('EditTask')} 
                    iconName="pencil-sharp" size={35} 
                    color={colorsTheme.darkBlue}
                />
                <CustomIcon 
                    onPress={() => {}} 
                    iconName="trash" 
                    size={35} 
                    color={colorsTheme.redTrash}
                />
            </View>
        </Reanimated.View>
    );
}

const Task = ({title, emoji, time, status, priority}) => {
    const navigation = useNavigation();
    const [completed, setCompleted] = useState(status);
    const priorityColor = () => {
        switch (priority) {
            case 'high': return colorsTheme.red;
            case 'medium': return colorsTheme.yellow;
            default: return colorsTheme.green;
        }
    };
  return (
        <ReanimatedSwipeable
            friction={2}
            rightThreshold={40}
            renderRightActions={(progress, drag) => <RightAction prog={progress} drag={drag} />}
            shouldCancelWhenOutside={false}
        >
            <Pressable 
                onPress={() => navigation.navigate('DetailTask')}
                style={[task.basicContainer, task.taskContainer]}
            >
                <View style={task.ellipseContainer}>
                    <CustomIcon 
                        onPress={() => setCompleted(!completed)}
                        iconName={completed ?'checkmark-circle' : 'ellipse-outline'} 
                        color={completed ? colorsTheme.green : colorsTheme.darkGray} 
                        size={40}/>
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
            </Pressable>
        </ReanimatedSwipeable>
  )
}

export default Task