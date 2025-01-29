import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from '../components/CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import CustomUserName from '../components/CustomUserName'
import { containers } from '../styles/containers'
import { default as tasks } from '../data/exampleTask'
import CustomDetailField from '../components/CustomDetailField'
import { detail } from '../styles/screens/detail'
import CustomTitle from '../components/CustomTitle'

const DetailTask = ({navigation}) => {
  const taskDetails = [
    { field: 'status', value: tasks[0].status },
    { field: 'date', value: tasks[0].date },
    { field: 'time', value: tasks[0].time },
    { field: 'category', value: tasks[0].category.join(' | ') },
    { field: 'priority', value: tasks[0].priority },
    { field: 'description', value: tasks[0].description }
  ]
  return (
    <View style={containers.main}>
      <View style={containers.header}>
        <CustomIcon onPress={() => navigation.goBack()} iconName="arrow-back" size={35} color={colorsTheme.darkBlue}/>
        <CustomUserName name={'Diana Campos'} image={require('../images/user-avatar.png')}/>
      </View>
      <View>
        <CustomTitle title={`Take a look at your\ntask!`} type='msgScreen'/>
      </View>
      <View style={detail.container}>
        <View style={detail.titleContainer}>
          <Text style={detail.emoji}>{tasks[0].emoji}</Text>
          <CustomTitle title={tasks[0].title} type='xlarge'/>
        </View>
        <View style={detail.valuesContainer}>
          {taskDetails.map((item, index) => (
            <CustomDetailField key={index} field={item.field} value={item.value}/>
          ))}

        </View>
        <View style={detail.buttonContainer}>
          <CustomIcon onPress={() => navigation.navigate('EditTask')} iconName="pencil-sharp" size={35} color={colorsTheme.darkBlue}/>
          <CustomIcon onPress={() => {}} iconName="trash" size={35} color={colorsTheme.redTrash}/>
        </View>
      </View>
    </View>
  )
}

export default DetailTask

const styles = StyleSheet.create({
  icon_text: {
    color:'#ffffff',
  },
})