import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addition, subtraction } from '../store/action';
import color from '../utils/color'
const Counter = (props) => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => dispatch(addition())} >
<View style={styles.View}>
  <Text style={styles.Text}>addition</Text>
</View>
        </TouchableOpacity>
      <Text style={styles.TextTwo}>{data}</Text>
      <TouchableOpacity
      onPress={() => dispatch(subtraction())}>
<View style={styles.View}>
  <Text  style={styles.Text}>subtraction</Text>
</View>
      </TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  View:{
    width:150,
    height:50,
    backgroundColor:color.Blue_50,
    borderRadius:20
  },
  Text:{
    alignSelf:'center',
    marginTop:10,
    fontSize:19,
    fontWeight:'500',
    color:color.B_00
  },
  TextTwo:{
    color:color.teal_800,
    fontSize:30,
    fontWeight:'500'
  }
})