import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from '../components/CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import CustomUserName from '../components/CustomUserName'
import { containers } from '../styles/containers'
import { default as tasks } from '../data/exampleTask'
import CustomDetailField from '../components/CustomDetailField'
import { detail } from '../styles/components/detail'

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
      <View>
        <View style={styles.container_icon}>
          <Text style={styles.icon_text}>icon</Text>
        </View>
        <CustomUserName name={'Diana Campos'} image={require('../images/user-avatar.png')}/>
      </View>
      <View style={styles.container_title}>
        <Text style={styles.title}>Take a look at your task!</Text>
      </View>
      <View style={detail.container}>
        <View style={detail.titleContainer}>
          <Text style={detail.emoji}>{tasks[0].emoji}</Text>
          <Text style={detail.title}>{tasks[0].title}</Text>
        </View>
        <View style={detail.valuesContainer}>
          {taskDetails.map((item, index) => (
            <CustomDetailField key={index} field={item.field} value={item.value}/>
          ))}

        </View>
        <View style={detail.buttonContainer}>
          <CustomIcon onPress={() => navigation.navigate('EditTask')} iconName="pencil-sharp" size={35} color={colorsTheme.darkBlue}/>
          <CustomIcon onPress={() => console.log('delete button pressed')} iconName="trash" size={35} color={colorsTheme.redTrash}/>
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
  container_title: {
    margin: 10,
    marginTop: 40,
  },
  title:{
    color:'#ffffff',
    marginTop: 40,
  },
})