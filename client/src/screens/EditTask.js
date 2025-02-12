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
import { useTask } from '../hooks/useTask'

const EditTask = ({navigation, route}) => {
  const {id} = route.params;
  const {user, loadingUser} = useUser(3);
  const {task, loadingTask} = useTask(id);
  const [focusedInput, setFocusedInput] = useState(null);

  if(loadingUser || loadingTask) {
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
        <CustomTitle title={"We can always improve our activities !!"} type='msgScreen' numberOfLines={0}/>
      </View>
      <View style={containers.createOrEdit}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TaskInput 
            title={'Name'}
            placeholder={'Read for 20 minutes'}  
            iconName='pencil-sharp'
            value={task.title}
            maxLength={30}
            isFocused={focusedInput === 'Name'}
            onFocus={() => setFocusedInput('Name')}
            onBlur={() => setFocusedInput(null)}
            />
          <TaskInput 
            title={'Date'} 
            placeholder={'17 july, 2020'} 
            iconName='calendar-sharp'
            value={task.date}
            isFocused={focusedInput === 'Date'}
            onFocus={() => setFocusedInput('Date')}
            onBlur={() => setFocusedInput(null)}
            />
          <TaskInput 
            title={'Time'}
            placeholder={'8:30 am'}  
            iconName='time'
            value={task.time}
            isFocused={focusedInput === 'Time'}
            onFocus={() => setFocusedInput('Time')}
            onBlur={() => setFocusedInput(null)}
            />
          <TaskInput 
            title={'Category'} 
            placeholder={'Personal'} 
            iconName='folder-open'
            value={task.category}
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
            multiline={true}
            maxLength={80}
            value={task.description}
            isFocused={focusedInput === 'Description'}
            onFocus={() => setFocusedInput('Description')}
            onBlur={() => setFocusedInput(null)}
            />
        </ScrollView>
      </View>
    </View>
  )
}

export default EditTask;