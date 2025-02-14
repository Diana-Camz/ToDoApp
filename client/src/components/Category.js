import { Pressable, View, Image } from 'react-native'
import React from 'react'
import {category} from '../styles/components/category'
import imagesCategory from '../data/imagesCategory'
import CustomTitle from './CustomTitle'

const Category = ({title, tasks, navigation}) => {
  const categoryImage = imagesCategory.find(img => img.title === title)?.image || require('../images/default.png')
  return (
      <Pressable onPress={() => {navigation.navigate('TaskList', {category: title})}} style={category.container}>
        <View>
          <Image source={categoryImage} style={category.image}/>
        </View>
        <View style={category.container_description}>
          <CustomTitle title={title} type='regular'/>
          <CustomTitle title={tasks == 1 ?`${tasks} Task` : `${tasks} Tasks`} type='detail'/>
        </View>
      </Pressable>
  )
}

export default Category