import { Pressable, Text, View, Image } from 'react-native'
import React from 'react'
import {category} from '../styles/components/category'
import CustomTitle from './CustomTitle'

const Category = ({onPress, image, title, tasks}) => {
  return (
      <Pressable onPress={onPress} style={category.container}>
        <View>
          <Image source={image} style={category.image}/>
        </View>
        <View style={category.container_description}>
          <CustomTitle title={title} type='regular'/>
          <CustomTitle title={tasks == 1 ?`${tasks} Tasks` : `${tasks} Task`} type='detail'/>
        </View>
      </Pressable>
  )
}

export default Category