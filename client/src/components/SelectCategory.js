import { Image, Pressable } from 'react-native'
import React from 'react'
import imagesCategory from '../data/imagesCategory'
import CustomTitle from './CustomTitle'
import { category } from '../styles/components/category'


const SelectCategory = ({title, onPress, style}) => {
    const categoryImage = imagesCategory.find(img => img.title === title)?.image || require('../images/default.png')
    return (
    <Pressable 
        onPress={onPress}
        style={style}>
      <Image source={categoryImage} style={category.image}/>
      <CustomTitle title={title} type='regular'/>
    </Pressable>
  )
}

export default SelectCategory