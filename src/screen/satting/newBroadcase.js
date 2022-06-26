
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'


const data = [

  {
    countryName: "+91 9129387554",
    countryNumber: "Hey there! I am using WhatsApp.",
    Image: require('../../assets/images/Anshika.jpg'),
  },
  {
    countryName: "+91 7307869758 Monu",
    countryNumber: "Hey there! I am using WhatsApp.",
    Image: require('../../assets/images/Anshu.jpg'),
  },
  {
    countryName: "7518822184",
    countryNumber: "Hey there! I am using WhatsApp.",
    Image: require('../../assets/images/Anshika.jpg'),
  },
  {
    countryName: "7985845079",
    countryNumber: "Hey there! I am using WhatsApp.",
    Image: require('../../assets/images/Anshu.jpg'),
  },
  {
    countryName: "Akash Rpn",
    countryNumber: "Hey there! I am using WhatsApp.",
    Image: require('../../assets/images/Anshika.jpg'),
  },
  {
    countryName: "Anshu singh",
    countryNumber: "Hey there! I am using WhatsApp.",
    Image: require('../../assets/images/Anshu.jpg'),
  },
  {
    countryName: "Ankush",
    countryNumber: "",
    Image: require('../../assets/images/Anshu.jpg'),
  },
  {
    countryName: "Anshu singh",
    countryNumber: "Hey there! I am using WhatsApp.",
    Image: require('../../assets/images/Anshu.jpg'),
  },
  {
    countryName: "Ankush",
    countryNumber: "",
    Image: require('../../assets/images/Anshu.jpg'),
  },

]
const NewBroadcase = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const renderListData = (listData) => {
    const { item, index } = listData;
    return (

      <View style={styles.container}>
        <TouchableOpacity >
          <View style={styles.Image} >
            <TouchableOpacity>

              <Image resizeMode={'cover'} style={styles.ImageStyle} source={item.Image} />
            </TouchableOpacity>
            <View style={styles.flex} >
              <Text style={styles.text}>{item.countryName}</Text>
              <Text style={styles.texts}>{item.countryNumber}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View >
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.ViewStyle}>
        <View style={styles.flexStyle}>
          <TouchableOpacity onPress={() => props.navigation.navigate('MainHome')}>
            <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/colorLeft.png')} />
          </TouchableOpacity>
          <View>
            <Text style={styles.TextStyle}>Newbroadcase</Text>
            <Text style={styles.TextTwoStyle}>0 of 7 selected</Text>
          </View>
          < TouchableOpacity onPress={() => setModalVisible(true)} style={styles.SearchStyle}>
            <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/two.png')} />
          </TouchableOpacity>
        </View>
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.ViewModal}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/colorLeft.png')} />
            </TouchableOpacity>
            <TextInput
              style={styles.TextInputStyle}
              placeholder='Search...'
            />
          </View>
        </Modal>
      </View>
      <View style={styles.Viewhight}>
        <Text style={styles.TextTwo}>Only contacts with +91 8957729509 in their address</Text>
        <Text style={styles.TextTwo}>book will receive your broadcast messages.</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index,) => index.toString()}
        renderItem={renderListData}
      />
    </View>
  )
}

export default NewBroadcase

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ViewStyle: {
    justifyContent: 'center',
    height: 100,
    width: '100%',

    backgroundColor: color.teal_800
  },
  ImagesTwo: {
    marginTop: 35,
    marginLeft: 30,
    height: 30,
    width: 30
  },
  flexStyle: {
    flexDirection: 'row'
  },
  TextStyle: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: color.B_00
  },
  TextTwoStyle: {
    marginLeft: 30,
    marginTop: 5,
    color: color.gray_50
  },
  SearchStyle: {
    marginLeft: 120
  },
  Image: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    backgroundColor: color.B_00,
    padding: 10,

  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 20,

  },
  texts: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  ImageStyle: {
    height: 50,
    width: 50,
    marginLeft: 20,
    borderRadius: 50
  },
  ViewModal: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    backgroundColor: color.B_00,
    marginTop: 10
  },
  TextInputStyle: {
    marginLeft: 50,
    fontSize: 18,
    fontWeight: '600'
  },
  Images: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginTop: 15
  },
  ImagesThree: {
    marginTop: 40
  },
  Viewhight: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    borderWidth: 0.5
  },
  TextTwo:{
    textAlign:'center',
    fontSize:15
  }
})