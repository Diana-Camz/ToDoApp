import { View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { containers } from '../styles/containers'
import TaskInput from '../components/TaskInput'
import { colorsTheme } from '../styles/colorsTheme'
import CustomTitle from '../components/CustomTitle'
import CustomIcon from '../components/CustomIcon'
import CustomUserName from '../components/CustomUserName'
import Loader from '../components/Loader'
import { useUser } from '../hooks/useUser'

const CreateTask = ({navigation}) => {
  const {user, loadingUser} = useUser(3);
  const [focusedInput, setFocusedInput] = useState(null);

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
        <CustomTitle title={"Let's do something else !!"} type='msgScreen' numberOfLines={0}/>
      </View>
      <View style={containers.createOrEdit}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TaskInput 
            title={'Name'}
            placeholder={'Read for 20 minutes'}  
            iconName='pencil-sharp'
            maxLength={30}
            isFocused={focusedInput === 'Name'}
            onFocus={() => setFocusedInput('Name')}
            onBlur={() => setFocusedInput(null)}
            />
          <TaskInput 
            title={'Date'} 
            placeholder={'17 july, 2020'} 
            iconName='calendar-sharp'
            isFocused={focusedInput === 'Date'}
            onFocus={() => setFocusedInput('Date')}
            onBlur={() => setFocusedInput(null)}
            />
          <TaskInput 
            title={'Time'}
            placeholder={'8:30 am'}  
            iconName='time'
            isFocused={focusedInput === 'Time'}
            onFocus={() => setFocusedInput('Time')}
            onBlur={() => setFocusedInput(null)}
            />
          <TaskInput 
            title={'Category'} 
            placeholder={'Personal'} 
            iconName='folder-open'
            isFocused={focusedInput === 'Category'}
            onFocus={() => setFocusedInput('Category')}
            onBlur={() => setFocusedInput(null)}
            />
          <TaskInput 
            title={'Priority'}  
            iconName='podium'
            isFocused={focusedInput === 'Priority'}
            onFocus={() => setFocusedInput('Priority')}
            onBlur={() => setFocusedInput(null)}
            />
          <TaskInput 
            title={'Description'} 
            placeholder={'Read more was a new year purpouse'} 
            iconName='clipboard'
            isFocused={focusedInput === 'Description'}
            onFocus={() => setFocusedInput('Description')}
            onBlur={() => setFocusedInput(null)}
            />
        </ScrollView>
      </View>
    </View>
  )
}

export default CreateTask