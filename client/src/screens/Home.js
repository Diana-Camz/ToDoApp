import { View, FlatList, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomIcon from '../components/CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import { containers } from '../styles/containers'
import CustomUserName from '../components/CustomUserName'
import Category from '../components/Category'
import Task from '../components/Task'
import CustomTitle from '../components/CustomTitle'
import { useUserContext } from '../context/userContext'; 
import { useUser } from '../hooks/useUser'
import Loader from '../components/Loader'
import { useTasks } from '../hooks/useTasks'
import { useCategoryForUser } from '../hooks/useCategoryForUser'



const Home = ({navigation, route}) => {
  const { user } = useUserContext();
  const {userData, loadingUser} = useUser(user);
  const {tasks, loadingTasks, getTasksData} = useTasks(user);
  const {categoriesForUser, loadingCategories} = useCategoryForUser(tasks)
  const [showAll, setShowAll] = useState(false);
  const [openTaskId, setOpenTaskId] = useState(null);
  const swipeableRef = useRef(null);
  const visibleCategories = showAll ? categoriesForUser : categoriesForUser.slice(0,4)


  if(loadingUser || loadingTasks || loadingCategories) {
    return (
    <Loader/>
    )
  }

  return (
    <View style={containers.main}>
      <CustomUserName screen={'home'} {...userData} />
      <View>
        <View style={containers.homeSections}>
            <CustomTitle title={'CATEGORIES'} type='regular'/>
            <Pressable onPress={() => {navigation.navigate('Categories', {user_id: userData.id})}}>
                <CustomTitle title={'See more'} type='link'/>
            </Pressable>
        </View>
        <View style={containers.category}>
            {visibleCategories.length == 0
            ? <View style={[containers.emptyData, {marginTop: 10}]}>
                <CustomTitle title={"You haven't any category"} type='field' numberOfLines={0}/>
              </View>
            : <FlatList
                data={visibleCategories}
                keyExtractor={item => item.category}
                horizontal={true}
                initialNumToRender={4}
                renderItem={({item}) => 
                <Category   
                    title={item.category} 
                    tasks={item.count}
                    user_id={userData.id}
                    image_url={item.image_url}
                    navigation={navigation} 
                    />
            }
            showsHorizontalScrollIndicator={false}
            />}
        </View>
      </View>
      <View>
        <View style={containers.homeSections}>
            <CustomTitle title={'TODAY TASKS'} type='regular'/>
            <View style={containers.homeSectionTask}>
                <Pressable onPress={() => {navigation.navigate('TaskList', {showAll: true, user_id: userData.id})}}>
                    <CustomTitle title={'See all'} type='link'/>
                </Pressable>
            </View>
        </View>
        <View style={containers.task}>
            {tasks.length == 0
            ? <View style={containers.emptyData}>
                <CustomTitle title={"You haven't any Tasks yet !!"} type='msgScreen' numberOfLines={0}/>
              </View>
            : <FlatList
                data={tasks}
                keyExtractor={item => item.task_id.toString()}
                extraData={tasks}
                renderItem={({item}) => 
                  <Task {...item}
                    user_id={item.user_id}
                    openTaskId={openTaskId} 
                    setOpenTaskId={setOpenTaskId} 
                    swipeableRef={swipeableRef}
                    getTasksData={getTasksData}
                  />
                }
                showsVerticalScrollIndicator={false}
            />}
        </View>
      </View>
      <View style={[containers.addButon, {marginTop: 30}]}>
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

