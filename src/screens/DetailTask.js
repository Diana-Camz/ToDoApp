import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from '../components/CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import CustomUserName from '../components/CustomUserName'
import { containers } from '../styles/containers'

const DetailTask = ({navigation}) => {
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
      <View style={styles.container_task_detail}>
        <View style={styles.container_header_task_detail}>
          <Text>Emoji</Text>
          <Text>Task Name</Text>
        </View>
        <View style={styles.container_description_task_detail}>
          <Text style={styles.name_title}> Status</Text>
          <Text style={styles.name_title}> Date</Text>
          <Text style={styles.name_title}> Time</Text>
          <Text style={styles.name_title}> Category</Text>
          <Text style={styles.name_title}> Priority</Text>
          <Text style={styles.name_title}> Description</Text>
        </View>
        <View style={styles.container_buttons_task_detail}>
          <CustomIcon onPress={() => navigation.navigate('EditTask')} iconName="pencil-sharp" size={40} color={colorsTheme.darkBlue}/>
          <CustomIcon onPress={() => console.log('delete button pressed')} iconName="trash" size={40} color={colorsTheme.redTrash}/>
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
  container_task_detail:{
    height: 500,
    marginTop: 40,
    marginHorizontal: 30,
    justifyContent: 'space-between',
    backgroundColor: '#080b10',
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  container_header_task_detail: {
    alignItems: 'center',
  },
  name_title:{
    color: '#505257',
    margin: 5,
  },
  container_buttons_task_detail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    marginBottom: 25,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ffffff',

  }
})