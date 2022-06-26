import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../utils/color'
const Payments = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ViewStyle}>
        <TouchableOpacity onPress={() => props.navigation.navigate('MainHome')} >
          <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/colorLeft.png')} />
        </TouchableOpacity>
        <Text style={styles.TextStyle}>Payments</Text>
      </View>
    </View>
  )
}

export default Payments

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ViewStyle: {
    flexDirection:'row',
    height: 100,
    width: '100%',
    backgroundColor: color.teal_800
  },
  Images: {
    marginLeft: 30,
    marginTop: 35,
    height: 30,
    width: 30
  },
  TextStyle:{
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:20,
    marginLeft:30,
    color:color.B_00
  }
})