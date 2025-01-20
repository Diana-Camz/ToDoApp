import { Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import {customUserName} from '../styles/components/customUserName'
import { containers } from '../styles/containers'

const CustomUserName = ({name, image, screen}) => {

     const userNameStyles = screen === 'home' 
        ? [containers.userName_home, {marginLeft: 10}, customUserName.title_home] 
        : [containers.userName,{marginRight: 10}, customUserName.title]

    return (
        <View style={userNameStyles}>
            <View>
                { screen === 'home'
                ? (<Image source={image} style={customUserName.image_home}/>)
                : (<Image source={image} style={customUserName.image}/>)}
            </View>
            <View style={userNameStyles[1]}>
                <Text style={userNameStyles[2]}>{name}</Text>
                { screen === 'home'
                ? ( <Text style={customUserName.welcome_description}>Hello! what will we do today?</Text> )
                : null }
            </View>
            { screen === 'home' 
                ? ( <Pressable onPress={() => console.log('logout button pressed')} style={customUserName.marginLeft_logout}>
                        <Text style={customUserName.logout_text}>Log out</Text>
                    </Pressable> )
                : null }
        </View>
      )
}

export default CustomUserName