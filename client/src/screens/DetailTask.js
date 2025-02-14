import { Text, View } from 'react-native'
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

const DetailTask = ({navigation, route}) => {
  const {id} = route.params;
  const {user, loadingUser} = useUser(6);
  const {task, loadingTask} = useTask(id)

  if(loadingUser || loadingTask) {
    return (
    <Loader/>
    )
  }

  return (
    <View style={containers.main}>
      <View style={containers.header}>
        <CustomIcon onPress={() => navigation.goBack()} iconName="arrow-back" size={35} color={colorsTheme.darkBlue}/>
        <CustomUserName {...user}/>
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
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <>
                {Object.entries(item).map(([key, value]) => {
                  if (["id", "title", "emoji", "userId"].includes(key)) return null;
                  const formattedValue = key === "category" ? value.join(' | ') : value; 
                  return  <CustomDetailField key={key} field={key} value={formattedValue}/> 
                })}
              </>
            )}
            showsHorizontalScrollIndicator={false} />
        </View>
        <View style={detail.buttonContainer}>
          <CustomIcon onPress={() => navigation.navigate('EditTask', {id:id})} iconName="pencil-sharp" size={35} color={colorsTheme.darkBlue}/>
          <CustomIcon onPress={() => {}} iconName="trash" size={35} color={colorsTheme.redTrash}/>
        </View>
      </View>
    </View>
  )
}

export default DetailTask