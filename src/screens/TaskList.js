import { View } from 'react-native'
import React, { useRef, useState } from 'react'
import { containers } from '../styles/containers'
import CustomIcon from '../components/CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import CustomTitle from '../components/CustomTitle'
import CustomButton from '../components/CustomButton'
import { FlatList } from 'react-native-gesture-handler'
import Loader from '../components/Loader'
import { useTasks } from '../hooks/useTasks'
import Task from '../components/Task'
import { taskList } from '../styles/screens/taskList'
import { customButton } from '../styles/components/customButton'

const TaskList = ({navigation, route}) => {
    const {category, showAll} = route.params || {};
    const {tasks, loadingTasks} = useTasks(5);
    const [openTaskId, setOpenTaskId] = useState(null);
    const swipeableRef = useRef(null);


    const filteredTasks = showAll
        ? tasks || []
        : category
            ? (tasks || []).filter(task => task.category.includes(category))
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
            <CustomTitle title={category? `${category} Tasks` : 'ALL TASKS'} type='large'/>
        </View>
        <View style={taskList.container}>
            <FlatList
                data={filteredTasks}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => 
                    <Task {...item} 
                      openTaskId={openTaskId} 
                      setOpenTaskId={setOpenTaskId} 
                      swipeableRef={swipeableRef}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
        {category
        && 
        <View style={taskList.buttonContainer}>
            <CustomButton 
            title={'Delete Category'}
            container={customButton.darkContainer} />
        </View>}
      </View>
    </View>
  )
}

export default TaskList;