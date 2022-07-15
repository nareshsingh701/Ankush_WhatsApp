import { StyleSheet, Text, View, ScrollView, FlatList, ImageBackground, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'
const data = [

  {
    name: "+91 8957729509",
    Icon: require('../../assets/images/videocalling.png'),
    secendName: "Today, 9:07 am",
    imagesone: require('../../assets/images/Anshika.jpg'),
    user: "Hey there! I am using WhatsApp",
  },
  {
    name: "Ankush",
    Icon: require('../../assets/images/colling.png'),
    secendName: "Today, 9:07 am",
    imagesone: require('../../assets/images/pravesh.jpg'),
    user: "Hey there! I am using WhatsApp",
  },
  {
    name: "Anshika",
    Icon: require('../../assets/images/videocalling.png'),
    secendName: "Today, 9:07 am",
    imagesone: require('../../assets/images/Anshu.jpg'),
    user: "Hey there! I am using WhatsApp",
  },
  {
    name: "Naresh",
    Icon: require('../../assets/images/videocalling.png'),
    secendName: "Today, 9:07 am",
    imagesone: require('../../assets/images/ankush.jpg'),
    user: "Hey there! I am using WhatsApp",
  },
  {
    name: "Anshu",
    Icon: require('../../assets/images/colling.png'),
    secendName: "Today, 9:07 am",
    imagesone: require('../../assets/images/priyanshu.jpg'),
    user: "Hey there! I am using WhatsApp",
  },
  {
    name: "Naresh",
    Icon: require('../../assets/images/videocalling.png'),
    secendName: "Today, 9:07 am",
    imagesone: require('../../assets/images/ankush.jpg'),
    user: "Hey there! I am using WhatsApp",
  },
  {
    name: "Anshu",
    Icon: require('../../assets/images/colling.png'),
    secendName: "Today, 9:07 am",
    imagesone: require('../../assets/images/priyanshu.jpg'),
    user: "Hey there! I am using WhatsApp",
  },
  {
    name: "Naresh",
    Icon: require('../../assets/images/videocalling.png'),
    secendName: "Today, 9:07 am",
    imagesone: require('../../assets/images/ankush.jpg'),
    user: "Hey there! I am using WhatsApp",
  },
  {
    name: "Anshu",
    Icon: require('../../assets/images/colling.png'),
    secendName: "Today, 9:07 am",
    imagesone: require('../../assets/images/priyanshu.jpg'),
    user: "Hey there! I am using WhatsApp",
  },
  {
    name: "Anshu",
    Icon: require('../../assets/images/colling.png'),
    secendName: "Today, 9:07 am",
    imagesone: require('../../assets/images/priyanshu.jpg'),
    user: "Hey there! I am using WhatsApp",
  },

]
const Calls = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modaloneVisible, setModalOneVisible] = useState(false);
  const [uri, setURI] = useState({})
  const [dataOne, setDataOne] = useState({})
  const [datatwo, setDataTwo] = useState("")

  const [showTip, setTip] = useState(true);

  const renderListData = (listData) => {
    const { item, index } = listData;
    return (


      <View style={styles.Container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Callinfo', {
          item
        })}>
          <View style={styles.Image} >
            <TouchableOpacity
              onPress={() => {
                setURI(item)
                setDataOne(item.imagesone)
                setModalVisible(true)
                setDataTwo(item.name)
              }}>
              <Image style={styles.ImageSix} resizeMode={'cover'} source={item.imagesone} />
            </TouchableOpacity>
            <View style={styles.flex} >
              <View>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.secendName}</Text>
              </View>
              <TouchableOpacity style={styles.Video}>
                <Image style={styles.Imagefive} resizeMode={'cover'} source={item.Icon} />
              </TouchableOpacity>
            </View>

          </View>
        </TouchableOpacity>

      </View >

    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: color.B_00 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index,) => index.toString()}
        renderItem={renderListData}
      />
      <View style={{ flex: 1, }}>
        <TouchableOpacity style={styles.ViewStyle}>
          <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/calls.png')} />
        </TouchableOpacity>
      </View>
      <Modal

        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setURI({})
        }}
      >
        <Pressable onPress={() => {
          setURI({})
          setModalVisible(!modalVisible)
        }}
          style={{ flex: 1 }}>
          <View style={styles.Modal}>
            <TouchableOpacity onPress={() => {
              setModalVisible(!modalVisible)
              setModalOneVisible(true)
            }}>
              <ImageBackground style={styles.ImagesTwo} resizeMode={'cover'} source={uri.imagesone} >
                <Text style={styles.TextThree}>{datatwo}</Text>
              </ImageBackground>
            </TouchableOpacity>
            <View style={styles.flexTwo}>
              <TouchableOpacity onPress={() => {
                setModalVisible(!modalVisible)
                props.navigation.navigate('Chating', {
                  item: uri
                })
              }}>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/chating.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/colling.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/videocalling.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setModalVisible(!modalVisible)
                props.navigation.navigate('DataChange', {
                  item: uri
                })
              }}>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/info.png')} />
              </TouchableOpacity>
            </View>
          </View>

        </Pressable>
      </Modal>
      <Modal
        transparent={true}
        visible={modaloneVisible}
        onRequestClose={() => {
          setModalOneVisible(!modaloneVisible);
          setDataOne("")
          setDataTwo("")
        }}
      >
        <Pressable onPress={() => {
          setDataTwo("")
          setModalOneVisible(!modaloneVisible)
        }}
          style={{ flex: 1 }}>
          <View style={styles.ModalTwo}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => setModalOneVisible(!modaloneVisible)}>
                <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/colorLeft.png')} />
              </TouchableOpacity>
              <Text style={styles.TextTwo}>{datatwo}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Image style={styles.ImagesThree} resizeMode={'cover'} source={dataOne} />
            </View>
          </View>
        </Pressable>
      </Modal >
    </View >

  )
}
export default Calls
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  flex: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 16
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 20,
  },
  texts: {
    alignSelf: 'center',
    marginLeft: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  Image: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    backgroundColor: color.B_00,
    padding: 5
  },
  ImageSix: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 20

  },
  Imagefive: {
    height: 30,
    width: 30,
    marginTop: 5,
    backgroundColor: color.B_00,

  },
  Video: {
  },
  ViewStyle: {
    position: 'absolute',
    height: 50,
    width: 50,
    backgroundColor: color.teal_800,
    borderRadius: 50,
    right: 10,
    bottom: 10,
    elevation: 2

  },
  ImagesStyles: {
    height: 25,
    width: 25,
    marginLeft: 12,
    marginTop: 12,
  },
  Modal: {
    width: '80%',
    height: '60%',
    backgroundColor: color.gray_50,
    alignSelf: 'center',
    marginTop: 100
  },
  ImagesTwo: {
    height: 350,
    width: '100%'
  },
  ImagesThree: {
    height: '60%',
    width: '100%',


  },
  flexTwo: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  ImagesStyles: {
    height: 25,
    width: 25,
    marginLeft: 12,
    marginTop: 12
  },
  ModalTwo: {
    width: '100%',
    height: '100%',
    backgroundColor: color.B_000
  },
  Images: {
    width: 30,
    height: 30,
    marginHorizontal: 30,
    marginTop: 25
  },
  TextTwo: {
    color: color.B_00,
    marginTop: 25,
    fontSize: 20,
    fontWeight: '500'
  },
  TextThree: {
    color: color.B_00,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '500',
    marginHorizontal: 30
  }
})
