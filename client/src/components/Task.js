import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import Reanimated, {useDerivedValue, useAnimatedStyle} from 'react-native-reanimated'
import { View, Text, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import { parse, format } from 'date-fns';
import CustomIcon from './CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import { task } from '../styles/components/task'
import { useNavigation } from '@react-navigation/native'
import CustomTitle from './CustomTitle'


const RightAction = ({prog, drag, user_id, task_id}) => {
    const navigation = useNavigation();

    const animatedOffset = useDerivedValue(() => {
        return drag.value + 100;
    });

    const styleAnimation = useAnimatedStyle(() => {
        return {
            transform: [{translateX: animatedOffset.value}],
            position: 'relative',
            right: 0,
        };
    });
    return (
        <Reanimated.View style={styleAnimation}>
            <View style={[task.basicContainer]}>
                <CustomIcon 
                    onPress={() => navigation.navigate('EditTask', {user_id: user_id, task_id: task_id })} 
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

const Task = ({title, emoji, time, status, priority, task_id, user_id, openTaskId, setOpenTaskId, swipeableRef}) => {
    const navigation = useNavigation();
    const localSwipeableRef = useRef(null);
    const formattedTime = time ? format(parse(time, 'HH:mm:ss', new Date()), 'hh:mm a') : '05:00 PM';
    const [completed, setCompleted] = useState(status);
    const handleSwipeableOpen = () => {
        if (swipeableRef.current && swipeableRef.current !== localSwipeableRef.current) {
            swipeableRef.current.close();
        }
        swipeableRef.current = localSwipeableRef.current;
        setOpenTaskId(task_id);
    };

    const priorityColor = () => {
        switch (priority) {
            case 'high': return colorsTheme.red;
            case 'medium': return colorsTheme.yellow;
            default: return colorsTheme.green;
        }
    };
  return (
        <ReanimatedSwipeable
            key={task_id}
            ref={localSwipeableRef}
            friction={4}
            overshootFriction={8}
            rightThreshold={40}
            renderRightActions={(progress, drag) => <RightAction prog={progress} drag={drag} user_id={user_id} task_id={task_id}/>}
            onSwipeableWillOpen={handleSwipeableOpen}
            onSwipeableClose={() => {
                if (openTaskId === task_id) {
                    setOpenTaskId(null);
                }
            }}
        >
            <Pressable 
                onPress={() => navigation.navigate('DetailTask', { user_id: user_id, task_id: task_id })}
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
                        <CustomTitle title={title} type='medium'/>
                        <CustomTitle title={formattedTime} type='detail'/>
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