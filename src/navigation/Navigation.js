import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import DetailTask from '../screens/DetailTask'
import CreateTask from '../screens/CreateTask'
import EditTask from '../screens/EditTask'


const Navigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='DetailTask' component={DetailTask}/>
            <Stack.Screen name='CreateTask' component={CreateTask}/>
            <Stack.Screen name='EditTask' component={EditTask}/>
        </Stack.Navigator>
    )
}

export default Navigation;