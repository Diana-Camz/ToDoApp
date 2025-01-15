import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreateTask = () => {
  return (
    <View>
      <Text style={styles.create_title}>CreateTask</Text>
    </View>
  )
}

export default CreateTask

const styles = StyleSheet.create({
    create_title: {
        fontSize: 80,
        marginTop: 150,
    }
})