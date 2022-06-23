import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'

const Loder = (props) => {

  
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("dataStor")
    },500);
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.View}>
      <ActivityIndicator size="large"
      style={styles.ActivityIndicator}
      />
      <Text style={styles.Text}>Working...</Text>
      </View>
    </View>
  )
}

export default Loder;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignSelf:'center',
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