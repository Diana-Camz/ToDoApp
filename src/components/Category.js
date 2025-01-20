import { Pressable, Text, View, Image } from 'react-native'
import React from 'react'
import {category} from '../styles/components/category'

const Category = ({onPress, image, title, tasks}) => {
  return (
      <Pressable onPress={onPress} style={category.container}>
        <View>
          <Image source={image} style={category.image}/>
        </View>
        <View style={category.container_description}>
          <Text style={category.title} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
          <Text style={category.tasks}>{tasks}{tasks === '1' ? ' Task' : ' Tasks'}</Text>
        </View>
      </Pressable>
  )
}

export default Category