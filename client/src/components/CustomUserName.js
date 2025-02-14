import { Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import {customUserName} from '../styles/components/customUserName'
import { containers } from '../styles/containers'
import CustomTitle from './CustomTitle'

const CustomUserName = ({name, lastname, image, screen}) => {

     const userNameStyles = screen === 'home' 
        ? [containers.userName_home, {marginLeft: 10}] 
        : [containers.userName,{marginRight: 10}]
    return (
        <View style={userNameStyles}>
            <View>
                { screen === 'home'
                ? (<Image source={image} style={customUserName.image_home}/>)
                : (<Image source={image} style={customUserName.image}/>)}
            </View>
            <View style={userNameStyles[1]}>
                { screen === 'home'
                ? <CustomTitle title={`${name} ${lastname}`} type='large'/>
                : <CustomTitle title={`${name} ${lastname}`} type='regular'/>}
                { screen === 'home'
                ? ( <Text style={customUserName.welcome_description}>Hello! what will we do today?</Text> )
                : null }
            </View>
            { screen === 'home' 
                ? ( <Pressable onPress={() => {}} style={customUserName.mgL}>
                        <CustomTitle title={'Log out'} type='link'/>
                    </Pressable> )
                : null }
        </View>
      )
}

export default CustomUserName