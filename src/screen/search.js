import { View, Text,TextInput,StyleSheet,Image } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.container}>
       
   <TextInput
   style={styles.TextInput} 
   placeholder='Search'
   
   />
    </View>
  )
}

export default Search;
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    TextInput:{
        height:40,
        width:300,
        borderWidth:1,
        padding:10,
        borderRadius:15,
        marginLeft:70
    }
})