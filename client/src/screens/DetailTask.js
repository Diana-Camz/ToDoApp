import { Alert, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from '../components/CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import CustomUserName from '../components/CustomUserName'
import { containers } from '../styles/containers'
import CustomDetailField from '../components/CustomDetailField'
import { detail } from '../styles/screens/detail'
import CustomTitle from '../components/CustomTitle'
import Loader from '../components/Loader'
import { useUser } from '../hooks/useUser'
import { useTask } from '../hooks/useTask'
import { FlatList } from 'react-native-gesture-handler'
import { useUserContext } from '../context/userContext'
import { useDeleteTask } from '../hooks/useDeleteTask'

const DetailTask = ({navigation, route,}) => {
  const {user_id, task_id} = route.params;
  const { user } = useUserContext();
  const {userData, loadingUser} = useUser(user);
  const { deleteTask, loadingDelete } = useDeleteTask();
  const {task, loadingTask} = useTask(user_id, task_id)

  const handleDeleteTask = async () => {
    Alert.alert(
        "Confirm Delete",
        "Are you sure you want to delete this task?",
        [
            { text: "Cancel", style: "cancel" },
            {
                text: "Delete",
                style: "destructive",
                onPress: async () => {
                    const success = await deleteTask(user_id, task_id);
                    if (success) {
                        Alert.alert('Task deleted', 'Task has been deleted successfully.', [
                            { text: 'Ok', onPress: () => navigation.navigate("Home")}
                          ])
                        } else {
                          Alert.alert('Error', 'An error occurred while deleting Task. Please try again', [
                            { text: 'Try Again'}
                          ])
                    }
                },
            },
        ]
    )
}

  if(loadingUser || loadingTask || loadingDelete) {
    return (
    <Loader/>
    )
  }

  return (
    <View style={containers.main}>
      <View style={containers.header}>
        <CustomIcon onPress={() => navigation.goBack()} iconName="arrow-back" size={35} color={colorsTheme.darkBlue}/>
        <CustomUserName {...userData}/>
      </View>
      <View>
        <CustomTitle title={'Take a look at your task !!'} type='msgScreen' numberOfLines={0}/>
      </View>
      <View style={detail.container}>
        <View style={detail.titleContainer}>
          <Text style={detail.emoji}>{task.emoji}</Text>
          <CustomTitle title={task.title} type='xlarge' numberOfLines={0}/>
        </View>
        <View style={detail.valuesContainer}>
          <FlatList
            data={[task]}
            keyExtractor={item => item.task_id.toString()}
            renderItem={({item}) => {
              const orderedFields = ["status", "date", "time", "priority", "categories", "description"];
              return (<>
                {orderedFields.map((key) => {
                   if (item[key] === undefined) return null;
                  const formattedValue = key === "categories" ? item[key] : item[key]; 
                  return  <CustomDetailField key={key} field={key} value={formattedValue}/> 
                })}
              </>
              )
            }}
            showsHorizontalScrollIndicator={false} />
        </View>
        <View style={detail.buttonContainer}>
          <CustomIcon onPress={() => navigation.navigate('EditTask', {user_id: userData.id, task_id: task.task_id})} iconName="pencil-sharp" size={35} color={colorsTheme.darkBlue}/>
          <CustomIcon onPress={()=> handleDeleteTask()} iconName="trash" size={35} color={colorsTheme.redTrash}/>
        </View>
      </View>
    </View>
  )
}

export default DetailTask