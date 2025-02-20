import { Pressable, View, Image } from 'react-native'
import React from 'react'
import {category} from '../styles/components/category'
import CustomTitle from './CustomTitle'
import categoryImages from '../data/categoryImages'

const Category = ({title, tasks, image_url, navigation, user_id}) => {
  const imageSource = categoryImages[image_url] || require("../../assets/default.png");
  return (
      <Pressable onPress={() => {navigation.navigate('TaskList', {category: title, user_id: user_id})}} style={category.container}>
        <View>
          <Image source={imageSource} style={category.image}/>
        </View>
        <View style={category.container_description}>
          <CustomTitle title={title} type='regular'/>
          <CustomTitle title={tasks == 1 ?`${tasks} Task` : `${tasks} Tasks`} type='detail'/>
        </View>
      </Pressable>
  )
}

export default Category