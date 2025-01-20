import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import exampleCategory from '../data/exampleCategory'
import CustomIcon from '../components/CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import { containers } from '../styles/containers'
import CustomUserName from '../components/CustomUserName'
import Category from '../components/Category'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomUserName screen={'home'} name={'Diana Campos'} image={require('../images/user-avatar.png')} />
      <View style={styles.container_categories}>
        <View style={styles.container_categories_text}>
            <Text style={styles.categories_title}>CATEGORIES</Text>
            <Text style={styles.categories_option}>See more</Text>
        </View>
        <View style={containers.category}>
            <FlatList
            data={exampleCategory}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({item}) => 
                <Category onPress={() => {}}  title={item.title} tasks={item.tasks} image={item.image}/>
            }
            />
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
        <View style={styles.container_tasks_component}>
            <Text style={styles.tasks_title}>TASKS COMPONENT</Text>
            <Pressable onPress={() => navigation.navigate('DetailTask')}><Text style={styles.tasks_title}>TASKS</Text></Pressable>
            <Pressable><Text style={styles.tasks_title}>TASKS</Text></Pressable>
            <Pressable><Text style={styles.tasks_title}>TASKS</Text></Pressable>
            <Pressable><Text style={styles.tasks_title}>TASKS</Text></Pressable>
        </View>
      </View>
      <View style={styles.container_buttonAdd}>
        <CustomIcon onPress={() => navigation.navigate('CreateTask')} iconName="add-sharp" size={55} color={colorsTheme.dark} background={true}/>
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
    container_userName: {
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
    container_tasks_component:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
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
