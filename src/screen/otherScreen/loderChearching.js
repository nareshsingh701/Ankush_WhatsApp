import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'

const LoderChearching = (props) => {

  
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("loderData")
    },500);
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.View}>
      <ActivityIndicator size="large"
      style={styles.ActivityIndicator}
      />
      <Text style={styles.Text}>connacting...</Text>
      </View>
    </View>
  )
}

export default LoderChearching;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  View:{
    height:100,
    width:350,
    backgroundColor:'#FFFFFFff',
    borderRadius:10,
    marginLeft:25,
    marginTop:300
  },
  ActivityIndicator:{
    marginTop:30, 
    
  },
  Text:{
    textAlign:'center'
  }
})