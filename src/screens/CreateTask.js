import { View } from 'react-native'
import React from 'react'
import { containers } from '../styles/containers'
import TaskInput from '../components/TaskInput'
import { colorsTheme } from '../styles/colorsTheme'
import CustomTitle from '../components/CustomTitle'
import CustomIcon from '../components/CustomIcon'
import CustomUserName from '../components/CustomUserName'
import { create } from '../styles/screens/create'
import Loader from '../components/Loader'
import { useUser } from '../hooks/useUser'

const CreateTask = ({navigation}) => {
  const {user, loadingUser} = useUser(3);

  if(loadingUser) {
    return (
    <Loader/>
    )
  };

  return (
    <View style={containers.main}>
      <View style={containers.header}>
        <CustomIcon onPress={() => navigation.goBack()} iconName="arrow-back" size={35} color={colorsTheme.darkBlue}/>
        <CustomUserName {...user}/>
      </View>
      <View>
        <CustomTitle title={`Let's do something \nelse!!`} type='msgScreen'/>
      </View>
      <View style={create.container}>
        <TaskInput 
          title={'Name'}
          placeholder={'Read for 20 minutes'}  
          iconName='pencil-sharp'
          />
        <TaskInput 
          title={'Date'} 
          placeholder={'17 july, 2020'} 
          iconName='calendar-sharp'
          />
        <TaskInput 
          title={'Time'}
          placeholder={'8:30 am'}  
          iconName='time'
          />
        <TaskInput 
          title={'Category'} 
          placeholder={'Personal'} 
          iconName='folder-open'
          />
        <TaskInput 
          title={'Priority'}  
          iconName='podium'
          />
        <TaskInput 
          title={'Description'} 
          placeholder={'Read more was a new year purpouse'} 
          iconName='clipboard'
          />
      </View>
    </View>
  )
}

export default CreateTask