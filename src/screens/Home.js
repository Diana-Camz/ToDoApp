import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { default as category } from '../data/exampleCategory'
import { default as tasks } from '../data/exampleTask'
import CustomIcon from '../components/CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import { containers } from '../styles/containers'
import CustomUserName from '../components/CustomUserName'
import Category from '../components/Category'
import Task from '../components/Task'
import CustomTitle from '../components/CustomTitle'



const Home = ({navigation}) => {
  return (
    <View style={containers.main}>
      <CustomUserName screen={'home'} name={'Diana Campos'} image={require('../images/user-avatar.png')} />
      <View>
        <View style={containers.homeSections}>
            <CustomTitle title={'CATEGORIES'} type='regular'/>
            <Text style={styles.categories_option}>See more</Text>
        </View>
        <View style={containers.category}>
            <FlatList
            data={category}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({item}) => 
                <Category onPress={() => {}}  title={item.title} tasks={item.tasks} image={item.image}/>
            }
            />
        </View>
      </View>
      <View>
        <View style={containers.homeSections}>
            <View>
                <Text style={styles.tasks_title}>TODAY TASK</Text>
            </View>
            <View style={containers.homeSectionTask}>
                <Text style={styles.tasks_option}>filters</Text>
                <Text style={styles.tasks_option}>See all</Text>
            </View>
        </View>
        <View style={containers.task}>
            <FlatList
            data={tasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
                <Task {...item}/>
            }
            showsVerticalScrollIndicator={false}/>
        </View>
      </View>
      <View style={containers.addButon}>
        <CustomIcon onPress={() => navigation.navigate('CreateTask')} iconName="add-sharp" size={50} color={colorsTheme.dark} background={true}/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    categories_title: {
        color:'#ffffff',
    },
    categories_option:{
        color:'#657FB1',
        marginRight: 40,
    },
    tasks_title: {
        color:'#ffffff',
    },
    tasks_option:{
        color:'#657FB1',
        marginRight: 40,
    },
});

