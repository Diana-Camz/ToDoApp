import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Home from '../screens/Home'
import DetailTask from '../screens/DetailTask'
import CreateTask from '../screens/CreateTask'
import EditTask from '../screens/EditTask'
import Categories from '../screens/Categories';
import TaskList from '../screens/TaskList';


const Navigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator 
            initialRouteName='Home' 
            screenOptions={{headerShown:false, 
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='DetailTask' component={DetailTask}/>
            <Stack.Screen name='CreateTask' component={CreateTask}/>
            <Stack.Screen name='EditTask' component={EditTask}/>
            <Stack.Screen name='Categories' component={Categories}/>
            <Stack.Screen name='TaskList' component={TaskList}/>
        </Stack.Navigator>
    )
}

export default Navigation;