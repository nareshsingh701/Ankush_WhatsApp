import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import color from '../utils/color'

console.log()
const Chating = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ViewStyle}>
        <TouchableOpacity onPress={() => props.navigation.navigate('MainHome')} >
          <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/colorLeft.png')} />
        </TouchableOpacity>

        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/ankush.jpg')} />
        <View style={{ alignSelf: 'center', width: '30%' }}>

          <Text numberOfLines={1} style={styles.TextStyle}>Payments</Text>
        </View>
        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/colorLeft.png')} />
        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/colorLeft.png')} />
        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/dottwo.png')} />

      </View>

      <ImageBackground resizeMode={'cover'} style={styles.Imagesthree} source={require('../assets/images/ankush.jpg')} >
        <View style={{ alignItems: 'flex-end', flex: 1, flexDirection: 'row', marginBottom: 3 }}>
          <View style={styles.TextInputTwo}>
            <TextInput
              placeholder='Message'
              style={styles.TextInput}
            />
            <Image resizeMode={'cover'} style={styles.ImagesFour} source={require('../assets/images/colorLeft.png')} />
            <Image resizeMode={'cover'} style={styles.ImagesFour} source={require('../assets/images/colorLeft.png')} />
            <Image resizeMode={'cover'} style={styles.ImagesFour} source={require('../assets/images/dottwo.png')} />
          </View>
          <View style={styles.ViewStyleTwo}>
            <Image resizeMode={'cover'} style={styles.ImagesFive} source={require('../assets/images/dottwo.png')} />
          </View>
        </View>
      </ImageBackground>
    </View>

  )
}

export default Chating

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ViewStyle: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: color.teal_800,
  },
  Images: {
    marginHorizontal: 10,
    marginTop: 35,
    height: 30,
    width: 30
  },
  ImagesTwo: {
    marginTop: 35,
    height: 30,
    width: 30,
    marginHorizontal: 16
  },
  ImagesFour: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
    marginTop: 10
  },
  ImagesFive: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginTop: 10
  },
  TextStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 10,
    color: color.B_00
  },
  ImagesStyle: {
    marginTop: 35,
    width: 40,
    height: 40,
    borderRadius: 30
  },
  Imagesthree: {
    width: '100%',
    height: '100%',
    flex: 1,

  },
  TextInput: {
    marginHorizontal: 40,
    fontSize: 20
  },
  TextInputTwo: {
    width: '84%',
    height: 50,
    backgroundColor: color.B_00,
    borderRadius: 30,
    marginHorizontal: 2,
    flexDirection: 'row',
  },
  ViewStyleTwo: {
    width: 50,
    height: 50,
    backgroundColor: color.teal_800,
    borderRadius: 40,
    marginHorizontal: 5
  }
})