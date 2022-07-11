import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import color from '../utils/color'

console.log()
const Chating = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.ViewStyle}>
        <TouchableOpacity onPress={() => props.navigation.navigate('MainHome')} >
          <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/colorLeft.png')} />
        </TouchableOpacity>

        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/ankush.jpg')} />
        <View style={{ alignSelf: 'center', width: '30%' }}>

          <Text numberOfLines={1} style={styles.TextStyle}>Payments</Text>
          <Text numberOfLines={1} style={{ marginHorizontal: 16, color: color.gray_50 }}>hello</Text>
        </View>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/video4.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/calling3.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/dottwo.png')} />
        </TouchableOpacity>

      </View>

      <ImageBackground resizeMode={'cover'} style={styles.Imagesthree} source={require('../assets/images/downlode1.jpg')} >
        <View style={{ alignItems: 'flex-end', flex: 1, flexDirection: 'row', marginBottom: 3 }}>

          <View style={styles.TextInputTwo}>
            <TouchableOpacity>
              <Image resizeMode={'cover'} style={styles.ImagesSeven} source={require('../assets/images/happy2.png')} />
            </TouchableOpacity>
            <TextInput
              placeholder='Message'
              style={styles.TextInput}
            />
            <Image resizeMode={'cover'} style={styles.Imagessix} source={require('../assets/images/links.jpg')} />
            <Image resizeMode={'cover'} style={styles.Imagessix} source={require('../assets/images/pay2.jpg')} />
            <Image resizeMode={'cover'} style={styles.ImagesFour} source={require('../assets/images/camra3.png')} />
          </View>
          <View style={styles.ViewStyleTwo}>
            <Image resizeMode={'cover'} style={styles.ImagesFive} source={require('../assets/images/phone2.png')} />
          </View>
        </View>
      </ImageBackground>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable onPress={()=>setModalVisible(!modalVisible)} style={{flex:1}}>
          <View style={styles.Modal}>
            <Text onPress={()=>setModalVisible(!modalVisible)} style={styles.TextModal}>View contact</Text>
            <Text onPress={()=>setModalVisible(!modalVisible)} style={styles.TextModal}>Media, links, and docs</Text>
            <Text onPress={()=>setModalVisible(!modalVisible)} style={styles.TextModal}>Search</Text>
            <Text onPress={()=>setModalVisible(!modalVisible)} style={styles.TextModal}>Mute nonifications</Text>
            <Text onPress={()=>{
              props.navigation.navigate('DefaultMessageTime')
              setModalVisible(!modalVisible)}}
               style={styles.TextModal}>Disappearing messages</Text>
            <Text onPress={()=>setModalVisible(!modalVisible)} style={styles.TextModal}>Wallpaper</Text>
            <Text onPress={()=>setModalVisible(!modalVisible)} style={styles.TextModal}>More</Text>
          </View>
        </Pressable>
      </Modal>
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
  Imagessix: {
    height: 40,
    width: 40,
    marginHorizontal: 14,
    marginTop: 5
  },
  ImagesSeven: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
    marginTop: 10
  },
  ImagesFive: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginTop: 9,
    borderRadius: 50
  },
  TextStyle: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 18,
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
  },
  Modal: {
    width: '60%',
    height: 350,
    backgroundColor: color.gray_50,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 5,
    borderRadius: 5
  },
  TextModal: {
    marginHorizontal: 16,
    marginTop: 23,
    fontSize: 18,
    fontWeight: '500',
    color: color.B_000
  }
})