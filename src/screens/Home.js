import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerUserName}>
        <View>
            <Text style={styles.userName_title}>Home Screen</Text>
            <Text style={styles.userName_description}>Hello! what will we do today?</Text>
        </View>
        <Text style={styles.userName_logout}>Log out</Text>
      </View>
      <View style={styles.container_categories}>
        <View style={styles.container_categories_text}>
            <Text style={styles.categories_title}>CATEGORIES</Text>
            <Text style={styles.categories_option}>See more</Text>
        </View>
        <View>
            <Text style={styles.categories_title}>CATEGORIES COMPONENT</Text>
        </View>
      </View>
      <View>
        <View style={styles.container_tasks_text}>
            <View style={styles.container_tasks_title}>
                <Text style={styles.tasks_title}>TODAY TASK</Text>
            </View>
            <View style={styles.container_tasks_options}>
                <Text style={styles.tasks_option}>filters</Text>
                <Text style={styles.tasks_option}>See all</Text>
            </View>
        </View>
        <View>
            <Text style={styles.tasks_title}>TASKS COMPONENT</Text>
        </View>
      </View>
      <View style={styles.container_buttonAdd}>
        <Pressable>
            <Text style={styles.tasks_title}>BUTTON ADD COMPONENT</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#141315',
    },
    containerUserName: {
        marginTop: 80,
        paddingLeft: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userName_title:{
        color:'#ffffff',
    },
    userName_description:{
        color:'#ffffff',
    },
    userName_logout: {
        color:'#657FB1',
        marginRight: 40,
    },
    container_categories_text: {
        marginTop: 80,
        paddingLeft: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categories_title: {
        color:'#ffffff',
    },
    categories_option:{
        color:'#657FB1',
        marginRight: 40,
    },
    container_tasks_text:{
        marginTop: 80,
        paddingLeft: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tasks_title: {
        color:'#ffffff',
    },
    container_tasks_options:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end', 
    },
    tasks_option:{
        color:'#657FB1',
        marginRight: 40,
    },
    container_buttonAdd:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})