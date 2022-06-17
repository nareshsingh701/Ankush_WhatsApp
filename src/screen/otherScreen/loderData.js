import { StyleSheet, Text, View,ActivityIndicator,Linking } from 'react-native'
import React,{useEffect} from 'react'

const LoderData = (props) => {

  
  useEffect(() => {
    setTimeout(() => {
      
    },500);
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.View}>
      <ActivityIndicator size="large"
      style={styles.ActivityIndicator}
      />
      <Text style={styles.Text}>Parparing...</Text>
      </View>
    </View>
  )
}

export default LoderData;

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