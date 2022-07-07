import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../utils/color'

const Calls = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [uri, setURI] = useState("")
  const data = [

    {
      Name: "+91 8957729509",
      Icon: require('../../assets/images/videocalling.png'),
      secendName: "Today, 9:07 am",
      Image: require('../../assets/images/Anshika.jpg'),

    },
    {
      Name: "Ankush",
      Icon: require('../../assets/images/colling.png'),
      secendName: "Today, 9:07 am",
      Image: require('../../assets/images/pravesh.jpg'),

    },
    {
      Name: "Anshika",
      Icon: require('../../assets/images/videocalling.png'),
      secendName: "Today, 9:07 am",
      Image: require('../../assets/images/Anshu.jpg'),

    },
    {
      Name: "Naresh",
      Icon: require('../../assets/images/videocalling.png'),
      secendName: "Today, 9:07 am",
      Image: require('../../assets/images/ankush.jpg'),

    },
    {
      Name: "Anshu",
      Icon: require('../../assets/images/colling.png'),
      secendName: "Today, 9:07 am",
      Image: require('../../assets/images/priyanshu.jpg'),

    },
    {
      Name: "Naresh",
      Icon: require('../../assets/images/videocalling.png'),
      secendName: "Today, 9:07 am",
      Image: require('../../assets/images/ankush.jpg'),

    },
    {
      Name: "Anshu",
      Icon: require('../../assets/images/colling.png'),
      secendName: "Today, 9:07 am",
      Image: require('../../assets/images/priyanshu.jpg'),

    },
    {
      Name: "Naresh",
      Icon: require('../../assets/images/videocalling.png'),
      secendName: "Today, 9:07 am",
      Image: require('../../assets/images/ankush.jpg'),

    },
    {
      Name: "Anshu",
      Icon: require('../../assets/images/colling.png'),
      secendName: "Today, 9:07 am",
      Image: require('../../assets/images/priyanshu.jpg'),

    },

  ]
  const [showTip, setTip] = useState(true);

  const renderListData = (listData) => {
    const { item, index } = listData;
    return (


      <View style={styles.Container}>
        <TouchableOpacity >
          <View style={styles.Image} >
            <TouchableOpacity
              onPress={() => {
                setURI(item.Image)
                setModalVisible(true)
              }}>
              <Image style={styles.ImageSix} resizeMode={'cover'} source={item.Image} />
            </TouchableOpacity>
            <View style={styles.flex} >
              <View>
                <Text style={styles.text}>{item.Name}</Text>
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
    <View style={{ flex: 1, }}>
      <FlatList
        data={data}
        keyExtractor={(item, index,) => index.toString()}
        renderItem={renderListData}
      />
      <View style={{ flex: 1, justifyContent: 'flex-end', marginRight: 20, marginBottom: 20 }}>
        <TouchableOpacity style={styles.ViewStyle}>
          <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/calls.png')} />
        </TouchableOpacity>
      </View>
      <Modal
      
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          setURI("")
        }}
      >
        <Pressable onPress={() => {
          setURI("")
          setModalVisible(!modalVisible)
        }}
          style={{ flex: 1 }}>
          <View style={styles.Modal}>
            <Image style={styles.ImagesTwo} resizeMode={'cover'} source={uri} />
            <View style={styles.flexTwo}>
              <TouchableOpacity>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/chating.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/colling.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/videocalling.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/info.png')} />
              </TouchableOpacity>
            </View>
          </View>

        </Pressable>
      </Modal>
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
    alignSelf: 'flex-end',

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
    height: '85%',
    width: '100%'
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
})
