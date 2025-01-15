import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditTask = () => {
  return (
    <View>
      <Text style={styles.edit_title}>EditTask</Text>
    </View>
  )
}

export default EditTask

const styles = StyleSheet.create({
    edit_title: {
        fontSize: 80,
        marginTop: 150,
    }
})