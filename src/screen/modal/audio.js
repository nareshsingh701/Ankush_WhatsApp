import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color';
const Audio = (props) => {
 
  return (
    <View style={styles.container}>
        <View style={styles.ViewStyle}>
          <View style={styles.flexStyle}>
            <TouchableOpacity onPress={()=> props.navigation.goBack()} >
              <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/Rite.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Viewhight}>
                <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/Audoi.png')} />
                <Text style={styles.PhotoStyle}>Audio</Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={styles.TextInput}
              placeholder='Search...'
            />
            <View style={styles.flexStyle}>
              <TouchableOpacity>
                <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/ListTwo.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> props.navigation.goBack()}>
                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/x.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

    </View>
  )
}

export default Audio

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ViewStyle: {
    height: 50,
    width: 400,
    backgroundColor: color.gray_50,
    marginTop: 10,
    marginLeft: 5

  },
  flexStyle: {
    flexDirection: 'row'
  },
  ImagesStyle: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginTop: 10
  },
  Viewhight: {
    flexDirection: 'row',
    height: 30,
    width: 100,
    backgroundColor: color.teal_800,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 20
  },
  Images: {
    height: 20,
    width: 20,
    marginLeft: 15,
    marginTop: 5
  },
  PhotoStyle: {
    color: color.B_00,
    marginLeft: 10,
    marginTop: 5
  },
  TextInput: {
    padding: 10
  },
  ImagesTwo: {
    marginLeft: 40,
    marginTop: 15,
    height: 20,
    width: 20
  },
  ImagesThree: {
    height: 20,
    width: 20,
    marginLeft: 20,
    marginTop: 15
  }


})