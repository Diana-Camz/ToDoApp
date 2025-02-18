import { View } from 'react-native'
import React, { useRef, useState } from 'react'
import { containers } from '../styles/containers'
import CustomIcon from '../components/CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import CustomTitle from '../components/CustomTitle'
import { FlatList } from 'react-native-gesture-handler'
import Loader from '../components/Loader'
import { useTasks } from '../hooks/useTasks'
import Task from '../components/Task'
import { taskList } from '../styles/screens/taskList'

const TaskList = ({navigation, route}) => {
    const {category, user_id, showAll} = route.params || {};
    const {tasks, loadingTasks} = useTasks(user_id);
    const [openTaskId, setOpenTaskId] = useState(null);
    const swipeableRef = useRef(null);


    const filteredTasks = showAll
        ? tasks || []
        : category
            ? (tasks || []).filter(task => Array.isArray(task.categories)
                ? task.categories.includes(category)
                : String(task.categories).includes(category))
            : [];

            if(loadingTasks || (filteredTasks.length === 0 && !showAll)){
                return <Loader/>
            }

  return (
    <View style={containers.main}>
      <View style={containers.header}>
        <CustomIcon 
            onPress={() => navigation.goBack()} 
            iconName="arrow-back" 
            size={35} 
            color={colorsTheme.darkBlue}
        />
      </View>
      <View>
        <View style={containers.homeSections}>
            <CustomTitle title={category? `${category.toUpperCase()} TASKS` : 'ALL TASKS'} type='large'/>
        </View>
        <View style={taskList.container}>
            <FlatList
                data={filteredTasks}
                keyExtractor={item => item.task_id.toString()}
                renderItem={({item}) => 
                    <Task {...item} 
                      openTaskId={openTaskId} 
                      setOpenTaskId={setOpenTaskId} 
                      swipeableRef={swipeableRef}
                    />}
                showsVerticalScrollIndicator={false}
            />
        </View>
      </View>
    </View>
  )
}

export default TaskList;