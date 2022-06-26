import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity,Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../utils/color'

const Calls = (props) => {
  const data = [

    {
      Name: "+91 8957729509",
      Icon: require('../../assets/images/Video.png'),
      secendName: "Today, 9:07 am",
      Image: require('../../assets/images/Anshika.jpg'),

    },

  ]
  const [showTip, setTip] = useState(true);

  const renderListData = (listData) => {
    const { item, index } = listData;
    return (

      <ScrollView>
        <View style={styles.Container}>
          <TouchableOpacity >
            <View style={styles.Image} >
              <View style={styles.ViewThree}>
                <Image style={styles.ImageSix} resizeMode={'cover'} source={item.Image} />

              </View>
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
      </ScrollView >
    )
  }
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index,) => index.toString()}
        renderItem={renderListData}
      />
      <TouchableOpacity style={styles.ViewStyle}>
      <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/calls.png')} />
      </TouchableOpacity>
    </View>

  )
} 
export default Calls
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal:2
    
  },
  flex: {
    flexDirection: 'row',
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
    width: 400,
    backgroundColor: color.B_00,
    margin: 1,
    padding:5
  },
  ImageSix: {
    height: 50,
    width: 50,
    borderRadius: 50,

  },
  Imagefive: {
    height: 40,
    width: 40,
    // marginLeft: 10,
    marginTop: 5
  },
  Video: {
    height: 60,
    width: 50,
    backgroundColor: color.B_00,
    marginLeft: 100,
  },
  ViewStyle: {
    height: 50,
    width: 50,
    backgroundColor: color.teal_800,
    marginLeft: 250,
    borderRadius: 50,
    marginTop: 350
  },
  ImagesStyles:{
    height:25,
    width:25,
    marginLeft:12,
    marginTop:12
},
ViewThree:{
  marginLeft:30
}
})
