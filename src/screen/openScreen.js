import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const OpenScreen = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("welcome")
    },1000);
  },[])
  return (
    <View style={styles.container}>
      <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../src/assets/images/WhatsApp.png')} />
    </View>
  )
}

export default OpenScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    
  },
  ImagesStyles:{
    height:100,
    width:100
  }
})