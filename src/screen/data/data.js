import { StyleSheet, Text, View, Image, FlatList, Modal, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import color from '../../utils/color'

const data = [

  {
    countryName: "India",
    countryNumber: "+91",
    Image: require('../../assets/images/India.png'),
  },
  {
    countryName: "Pakistan",
    countryNumber: "+92",
    Image: require('../../assets/images/India.png'),
  },
  // {
  //   countryName: "South Africa",
  //   countryNumber: "+27",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "United Kingdom",
  //   countryNumber: "+44",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "United States",
  //   countryNumber: "+1",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "Afghanistan",
  //   countryNumber: "+93",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "Aland lslands",
  //   countryNumber: "+358",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "Algeria",
  //   countryNumber: "+213",
  //   Image: require('../../assets/images/India.png'),
  // },

  // {
  //   countryName: "American Samoa",
  //   countryNumber: "+1",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "Andorra",
  //   countryNumber: "+376",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "Angola",
  //   countryNumber: "+244",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "Anguilla",
  //   countryNumber: "+1",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "Antigua & Barbuda",
  //   countryNumber: "+1",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "Argentina",
  //   countryNumber: "+54",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "Armenia",
  //   countryNumber: "+374",
  //   Image: require('../../assets/images/India.png'),
  // },
  // {
  //   countryName: "Aruba",
  //   countryNumber: "+297",
  //   Image: require('../../assets/images/India.png'),
  // },
]

const Data = (props) => {
  const [showTip, setTip] = useState(true);

  const renderListData = (listData) => {
    const { item, index } = listData;
    return (

      <View style={styles.Container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('logIn')}>
          <View style={styles.Image} >
            <View style={styles.ImageStyle}>

              <Image resizeMode={'cover'} source={item.Image} />
            </View>
            <View style={styles.flex} >
              <View>
                <Text style={styles.text}>{item.countryName}</Text>
              </View>
              <View style={styles.And}>
                <Text style={styles.texts}>{item.countryNumber}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View >
    )
  }
  return (
    <View>
      <View style={styles.ViewEight}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image resizeMode={'cover'} style={styles.imageOne} source={require('../../assets/images/left1.png')} />
        </TouchableOpacity>
        <View style={styles.ViewTwo}>
          <TextInput
            style={styles.TextInputStyle}
            placeholder='Search countries'
          />
        </View>
        <View>
          <Text style={styles.textTwo}>Choose a country</Text>
        </View>

        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.imageTwo} source={require('../../assets/images/two.png')} />
        </TouchableOpacity>
      </View>
      <FlatList

        data={data}
        keyExtractor={(item, index,) => index.toString()}
        renderItem={renderListData}

      />
    </View>
  )
}

export default Data

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  View: {
    width: 360,
    height: 80,
    backgroundColor: color.B_00,
  },
  flex: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 20,
    marginTop: 20,
  },
  texts: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
  Image: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    backgroundColor: color.B_00,
    padding: 10,
    margin: 1,
  },
  ImageStyle: {
    marginTop: 10,
    marginLeft: 10
  },
  And: {
    marginLeft: 150
  },
  ViewEight: {
    width: '100%',
    height: 50,
    backgroundColor: color.B_00,
    flexDirection: 'row'
  },
  imageOne: {
    height: 25,
    width: 25,
    marginTop: 13,
    marginLeft: 20
  },
  textTwo: {
    fontSize: 20,
    marginLeft: 40,
    marginTop: 10,
    color: color.teal_800,
    fontWeight: 'bold'
  },
  imageTwo: {
    marginLeft: 100,
    marginTop: 15
  },
  ViewTwo: {
    height: 50,
    width: 350,
    backgroundColor: color.B_00,
  },
  TextInputStyle: {
    padding: 10
  }
})