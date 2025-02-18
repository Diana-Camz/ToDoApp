import { Image, Pressable } from 'react-native'
import React from 'react'
import CustomTitle from './CustomTitle'
import { category } from '../styles/components/category'
import categoryImages from '../data/categoryImages'


const SelectCategory = ({title, image_url, onPress, style}) => {
    const imageSource = categoryImages[image_url] || require("../../assets/default.png");
    return (
    <Pressable 
        onPress={onPress}
        style={style}>
      <Image source={imageSource} style={category.image}/>
      <CustomTitle title={title} type='regular'/>
    </Pressable>
  )
}

export default SelectCategory