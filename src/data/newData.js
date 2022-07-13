import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewData = () => {
  return (
    <View style={styles.container}>
      <Text>newData</Text>
    </View>
  )
}

export default NewData

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})