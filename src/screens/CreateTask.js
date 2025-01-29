import { View } from 'react-native'
import React from 'react'
import { containers } from '../styles/containers'
import TaskInput from '../components/TaskInput'
import { colorsTheme } from '../styles/colorsTheme'
import CustomTitle from '../components/CustomTitle'
import CustomIcon from '../components/CustomIcon'
import CustomUserName from '../components/CustomUserName'
import { create } from '../styles/screens/create'

const CreateTask = ({navigation}) => {
  return (
    <View style={containers.main}>
      <View style={containers.header}>
        <CustomIcon onPress={() => navigation.goBack()} iconName="arrow-back" size={35} color={colorsTheme.darkBlue}/>
        <CustomUserName name={'Diana Campos'} image={require('../images/user-avatar.png')}/>
      </View>
      <View>
        <CustomTitle title={`Let's do something \nelse!!`} type='msgScreen'/>
      </View>
      <View style={create.container}>
        <TaskInput 
          title={'Name'}
          placeholder={'Read for 20 minutes'} 
          type='input' 
          iconName='pencil-sharp'
          color={colorsTheme.lightblue} 
          size={20}/>
        <TaskInput 
          title={'Date'} 
          placeholder={'17 july, 2020'}
          type='input' 
          iconName='calendar-sharp'
          color={colorsTheme.lightblue} 
          size={20}/>
        <TaskInput 
          title={'Time'}
          placeholder={'8:30 am'} 
          type='input' 
          iconName='time'
          color={colorsTheme.lightblue} 
          size={20}/>
        <TaskInput 
          title={'Category'} 
          placeholder={'Personal'}
          type='input' 
          iconName='folder-open'
          color={colorsTheme.lightblue} 
          size={20}/>
        <TaskInput 
          title={'Priority'} 
          type='input' 
          iconName='podium'
          color={colorsTheme.lightblue} 
          size={20}/>
        <TaskInput 
          title={'Description'} 
          placeholder={'Read more was a new year purpouse'}
          type='input' 
          iconName='clipboard'
          color={colorsTheme.lightblue} 
          size={20}/>
      </View>
    </View>
  )
}

export default CreateTask