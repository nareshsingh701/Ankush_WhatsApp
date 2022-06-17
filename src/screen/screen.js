import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

const Screen = (props) => {
  return (
    <View style={styles.container}>
<View style={styles.View}>

</View>
    </View>
  )
}

export default Screen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        
    },
    View:{
      height:50,
      width:150,
      backgroundColor:'pink'
    }
})