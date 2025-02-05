import { View, Text } from 'react-native'
import React from 'react'
import { containers } from '../styles/containers'
import CustomIcon from '../components/CustomIcon'
import { colorsTheme } from '../styles/colorsTheme'
import CustomTitle from '../components/CustomTitle'
import { useCategory } from '../hooks/useCategory'
import { FlatList } from 'react-native-gesture-handler'
import Category from '../components/Category'
import Loader from '../components/Loader'

const Categories = ({navigation}) => {
    const {categories, loadingCategories} = useCategory([]);

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
        <View>
            <FlatList
                data={categories}
                keyExtractor={item => item.category}
                numColumns={2}
                renderItem={({item}) => 
                <Category
                    title={item.category}
                    tasks={item.count}
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