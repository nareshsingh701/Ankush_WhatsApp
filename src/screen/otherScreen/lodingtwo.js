import { StyleSheet, Text, View,ActivityIndicator,Linking } from 'react-native'
import React,{useEffect} from 'react'

const LodingTwo = (props) => {

  
  useEffect(() => {
    setTimeout(() => {
        props.navigation.navigate("Contact")
    },1000);
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

export default LodingTwo;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  View:{
    height:100,
    width:'90%',
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