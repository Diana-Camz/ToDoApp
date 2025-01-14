import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailTask = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <View style={styles.container_icon}>
          <Text style={styles.icon_text}>icon</Text>
        </View>
        <View style={styles.container_userName}>
          <Text style={styles.userName_title}>User Name</Text>
        </View>
      </View>
      <View style={styles.container_title}>
        <Text style={styles.title}>Take a look at your task!</Text>
      </View>
      <View style={styles.container_task_detail}>
        <View style={styles.container_header_task_detail}>
          <Text style={styles.userName_title}>Emoji</Text>
          <Text style={styles.userName_title}>Task Name</Text>
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
          <Pressable onPress={() => {}}><Text style={styles.userName_title}>Edit</Text></Pressable>
          <Pressable onPress={() => {}}><Text style={styles.userName_title}>Delete</Text></Pressable>
        </View>
      </View>
    </View>
  )
}

export default DetailTask

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141315',
  },
  container_header: {
    marginTop: 80,
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container_userName: {

  },
  icon_text: {
    color:'#ffffff',
  },
  userName_title:{
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