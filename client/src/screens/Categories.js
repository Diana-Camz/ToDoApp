import { View } from 'react-native'
import React from 'react'
import { containers } from '../styles/containers'
import CustomIcon from '../components/CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import CustomTitle from '../components/CustomTitle'
import { useCategoryForUser } from '../hooks/useCategoryForUser'
import { FlatList } from 'react-native-gesture-handler'
import Category from '../components/Category'
import Loader from '../components/Loader'

const Categories = ({navigation, route}) => {
    const {user_id} = route.params;
    const {categoriesForUser, loadingCategories} = useCategoryForUser(user_id);


    if(loadingCategories){
        return <Loader/>
    }
  return (
    <View style={containers.main}>
      <View style={containers.header}>
        <CustomIcon 
            onPress={() => navigation.goBack()} 
            iconName="arrow-back" 
            size={35} 
            color={colorsTheme.darkBlue}
        />
      </View>
      <View>
        <View style={containers.homeSections}>
            <CustomTitle title={'ALL CATEGORIES'} type='large'/>
        </View>
        <View style={containers.categoryList}>
            <FlatList
                data={categoriesForUser}
                keyExtractor={item => item.category}
                numColumns={2}
                renderItem={({item}) => 
                <Category
                    title={item.category}
                    tasks={item.count}
                    image_url={item.image_url}
                    user_id={user_id}
                    navigation={navigation}
                />}
                showsVerticalScrollIndicator={false}
            />
        </View>
      </View>
    </View>
  )
}

export default Categories