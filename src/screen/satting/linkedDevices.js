import { StyleSheet, Text, View, Image, TouchableOpacity,Linking,ScrollView } from 'react-native'
import React from 'react'
import color from '../../utils/color'
const LinkedDevices = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.ViewStyle}>
        <View style={styles.flexStyle}>
          <TouchableOpacity onPress={()=> props. navigation.navigate('MainHome')}>
            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/left1.png')} />
          </TouchableOpacity>
          <Text style={styles.TextStyle}>Linked devices</Text>
        </View>
      </View>
      <View style={styles.ViewTwo}>
        <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/computer.jpg')} />

        <Text style={styles.TextTwo}>Use WhatsApp on other devices</Text>
        <TouchableOpacity style={styles.ViewTwoStyle}>
          <Text style={styles.TextThreeStyle}>LINK A DEVICE </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flexStyle}>

        <View style={styles.TextSeven}>
          <Text style={styles.TextFiveStyle}>Use WhatsApp on web, desktop or other devices without keeping your phone online</Text>
          <Text onPress={()=> Linking.openURL('https://faq.whatsapp.com/general/download-and-installation/about-linked-devices?lg=en&lc=GB&eea=0')} style={styles.TextSix}>Learn more</Text>
        </View>
      </View>

    </ScrollView>
  )
}

export default LinkedDevices

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  ViewStyle: {
    height: 100,
    width: '100%',
    backgroundColor: color.teal_800,
    justifyContent: 'center'
  },
  ImagesStyle: {
    marginLeft: 30,
    height: 25,
    width: 30
  },
  flexStyle: {
    flexDirection: 'row'
  },
  TextStyle: {
    fontSize: 20,
    marginLeft: 30,
    fontWeight: 'bold',
    color: color.B_00
  },
  ViewTwo: {
    height: 300,
    width: '100%',
    backgroundColor: color.B_00
  },
  Images: {
    height: 150,
    width: 150,
    alignSelf: 'center'
  },
  TextTwo: {
    fontSize: 30,
    textAlign: 'center',
    color: color.B_000,
    fontWeight: 'bold'
  },
  ViewTwoStyle: {
    height: 50,
    width: 350,
    backgroundColor: color.teal_800,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20
  },
  TextThreeStyle: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
    color: color.B_00
  },
  ViewForeStyle: {

    height: 120,
    width: '100%',
    backgroundColor: color.B_00,
    marginTop: 10
  },
  ImageTwoStyle: {
    height: 65,
    width: 65,
    marginLeft: 10,
    marginTop: 10
  },
  Styleflex: {
  },
  TextFiveStyle: {
    paddingHorizontal:16,
    fontSize: 17,
    fontWeight: '400',
    color: color.B_000,
    marginTop: 10,
    textAlign:'center'
  },
  TextSix: {
    fontSize: 16,
    alignSelf:'center',
    color:color.Blue_50

  },

})