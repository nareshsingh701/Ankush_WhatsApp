import { StyleSheet, Text, View, Image, FlatList, Modal } from 'react-native'
import React, { usrState } from 'react'
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

  const renderListData = (listData) => {
    const { item, index } = listData;
    return (

      <View style={styles.Container}>
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



      </View >
    )
  }
  return (
    <View>
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
    width: 400,
    backgroundColor: color.B_00,
    padding: 10,
    margin: 1,
  },
  ImageStyle: {
    marginTop: 10,
    marginLeft: 10
  },
  And: {
    marginLeft:150
  }
})