import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import color from '../../utils/color'
const Satting = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ViewStyle}>
        <TouchableOpacity onPress={() => props.navigation.navigate('MainHome')} >
          <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/colorLeft.png')} />
        </TouchableOpacity>
        <Text style={styles.TextStyle}>Sattings</Text>
      </View>
      <ScrollView>
        <TouchableOpacity >
          <View style={styles.ViewTwoStyle}>
            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/Anshu.jpg')} />
            <View style={styles.flexStyle}>
              <Text style={styles.TextTwoStyle}>Ankush singh</Text>
              <Text style={styles.TextTwoStyle}>ankush</Text>
            </View>
            <TouchableOpacity>
              <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/qr.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.ViewSeven}></View>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Account')} style={styles.ViewTwoStyles}>
          <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/key.png')} />
          <View style={styles.ViewSix}>
            <Text style={styles.TextThree}>Account</Text>
            <Text style={styles.TextFore}>privacy, security, change number</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Chats')}  style={styles.ViewTwoStyles}>
          <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/chatStyle.png')} />
          <View style={styles.ViewSix}>
            <Text style={styles.TextThree}>Chats</Text>
            <Text style={styles.TextFore}>Theme, wallpapers, chat history</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ViewTwoStyles}>
          <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/nonifications.png')} />
          <View style={styles.ViewSix}>
            <Text style={styles.TextThree}>Notifications</Text>
            <Text style={styles.TextFore}>Message, group & call tones</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ViewTwoStyles}>
          <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/storage.png')} />
          <View style={styles.ViewSix}>
            <Text style={styles.TextThree}>Storage and data</Text>
            <Text style={styles.TextFore}>Network usage, auto-download</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ViewTwoStyles}>
          <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/help.png')} />
          <View style={styles.ViewSix}>
            <Text style={styles.TextThree}>Help</Text>
            <Text style={styles.TextFore}>Help center, contact us, privacy polocy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ViewTwoStyles}>
          <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/invite.png')} />
          <View style={styles.ViewSix}>
            <Text style={styles.TextThree}>Invite a friend</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.flexStyles}>
          <Text>from</Text>
          <View style={styles.flexDirectionStyle}>
            <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/meta.png')} />
            <Text style={styles.Style}>Meta</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Satting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.B_00,
  },
  ViewStyle: {
    flexDirection: 'row',
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
  TextStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
    color: color.B_00
  },
  ViewTwoStyle: {
    justifyContent:'space-between',
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: color.B_00,

  },
  ViewTwoStyles: {
    flexDirection: 'row',
    height: 90,
    width: '100%',
    backgroundColor: color.B_00,
  },
  ImagesStyle: {
    height: 60,
    width: 60,
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 50
  },
  flexStyle: {
    alignSelf: 'center'
  },
  flexStyles: {
    alignSelf: 'center',
    marginTop: 20
  },
  TextTwoStyle: {
    fontSize: 18,
    color: color.B_000,
    marginLeft: 30,
  },
  ImagesTwo: {
    marginTop: 30,
    height: 30,
    width: 30,
  marginHorizontal:30
  },
  ImagesThree: {
    marginTop: 35,
    height: 25,
    width: 25,
    marginLeft: 30
  },
  TextThree: {
    fontSize: 18,
    fontWeight: '600',
    color: color.B_000
  },
  ViewSix: {
    marginLeft: 30,
    marginTop: 30,
  },
  TextFore: {
    fontWeight: '500',
  },
  ImagesFore: {
    height: 20,
    width: 20,
  },
  flexDirectionStyle:{
    flexDirection:'row'
  },
  Style:{
    fontSize:15,
    marginLeft:5,
    fontWeight:'bold',
    color:color.B_000
  },
  ViewSeven:{
    width:'100%',
    height:1,
    backgroundColor:color.gray_50
  }
})