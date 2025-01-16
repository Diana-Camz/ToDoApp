import { Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import {customUserName} from '../styles/components/customUserName'
import { containers } from '../styles/containers'

const CustomUserName = ({name, image, home}) => {
  if(home){
    return (
        <View style={containers.userName_home}>
            <View>
                <Image source={image} style={customUserName.image}/>
            </View>
            <View style={customUserName.container_name}>
                <Text style={customUserName.title}>{name}</Text>
                <Text style={customUserName.welcome_description}>Hello! what will we do today?</Text>
            </View>
            <Pressable onPress={() => console.log('logout button pressed')} style={customUserName.container_logout}>
                <Text style={customUserName.logout_text}>Log out</Text>
            </Pressable>
        </View>
      )
  } else {
    return (
        <View style={containers.userName}>
            <View>
                <Image source={image} style={customUserName.image}/>
            </View>
            <View style={customUserName.container_name}>
                <Text style={customUserName.title}>{name}</Text>
            </View>
        </View>
      )
  }
}

export default CustomUserName