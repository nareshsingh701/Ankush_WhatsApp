import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'

const LoderFile = (props) => {

  
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("dataAdd")
    },1000);
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

export default LoderFile;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  View:{
    height:100,
    width:300,
    backgroundColor:'#FFFFFFff',
    borderRadius:10,
  
  
  },
  ActivityIndicator:{
    marginTop:30, 
    
  },
  Text:{
    textAlign:'center'
  }
})