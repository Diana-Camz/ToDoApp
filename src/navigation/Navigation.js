import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import DetailTask from '../screens/DetailTask'


const Navigation = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='DetailTask' component={DetailTask}/>
        </Stack.Navigator>
    )
}

export default Navigation;