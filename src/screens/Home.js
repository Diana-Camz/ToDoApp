import { View, FlatList, Pressable } from 'react-native'
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
import { useUser } from '../hooks/useUser'
import Loader from '../components/Loader'



const Home = ({navigation}) => {
  const {user, loadingUser} = useUser(3);

  if(loadingUser) {
    return (
    <Loader/>
    )
  }

  return (
    <View style={containers.main}>
      <CustomUserName screen={'home'} {...user} />
      <View>
        <View style={containers.homeSections}>
            <CustomTitle title={'CATEGORIES'} type='regular'/>
            <Pressable onPress={() => {}}>
                <CustomTitle title={'See more'} type='link'/>
            </Pressable>
        </View>
        <View style={containers.category}>
            <FlatList
            data={category}
            keyExtractor={item => item.key}
            horizontal={true}
            renderItem={({item}) => 
                <Category 
                    onPress={() => {}}  
                    title={item.title} 
                    tasks={item.tasks} 
                    image={item.image}/>
            }
            showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
      <View>
        <View style={containers.homeSections}>
            <CustomTitle title={'TODAY TASKS'} type='regular'/>
            <View style={containers.homeSectionTask}>
                <Pressable onPress={() => {}}>
                    <CustomTitle title={'filters'} type='link'/>
                </Pressable>
                <Pressable onPress={() => {}}>
                    <CustomTitle title={'See all'} type='link'/>
                </Pressable>
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
        <CustomIcon 
            onPress={() => navigation.navigate('CreateTask')} 
            iconName="add-sharp" 
            size={50} 
            color={colorsTheme.dark} 
            background={true}/>
      </View>
    </View>
  )
}

export default Home;

