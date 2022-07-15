import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { addition, subtraction } from '../../actions/counterActions';
import color from '../../utils/color'
const PhoneNumber = (props) => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.TextTwo}>{counter}</Text>
      <View style={styles.ViewTwo}>
        
        <View style={styles.ViewThree}>
          <TouchableOpacity
            onPress={() => dispatch(addition())} >
            <View style={styles.View}>
              <Text style={styles.Text}>+</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => dispatch(subtraction())}>
            <View style={styles.View}>
              <Text style={styles.Text}>-</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PhoneNumber

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  View: {
    width: 50,
    height: 50,
    backgroundColor: color.Blue_50,
    borderRadius: 20,
    marginLeft:40,
    
  },
  Text: {
    alignSelf: 'center',
    fontSize: 35,
    fontWeight: '500',
    color: color.B_00,

  },
  TextTwo: {
    color: color.teal_800,
    fontSize: 30,
    fontWeight: '500'
  },
  ViewTwo: {
    width: '60%',
    height: 100,
    backgroundColor: color.gray_50,
    flexDirection: 'row',
    borderRadius:10
  
  },
  ViewThree:{
    alignSelf:'center',
    flexDirection:'row',
    marginHorizontal:16
  }
})