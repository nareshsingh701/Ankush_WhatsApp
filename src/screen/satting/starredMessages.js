import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import color from '../../utils/color'
const StarredMessages = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.ViewStyle}>
        <TouchableOpacity onPress={() => props.navigation.navigate('MainHome')}>
          <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/colorLeft.png')} />
        </TouchableOpacity>
        <Text style={styles.TextStyle}>Starred Messages</Text>
      </View>
      <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/star.jpg')} />
      <View>
        <Text style={styles.TextTwoStyle}>Tap and hold on any</Text>
        <Text style={styles.TextTwoStyle}>Message in any chat to</Text>
        <Text style={styles.TextTwoStyle}>star it, so you can easily</Text>
        <Text style={styles.TextTwoStyle}>find it later.</Text>
      </View>
    </ScrollView>
  )
}

export default StarredMessages

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.B_00
  },
  ViewStyle: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: color.teal_800
  },
  Images: {
    marginLeft: 20,
    marginTop: 30,
    width: 30,
    height: 30
  },
  TextStyle: {
    alignSelf: 'center',
    marginLeft: 50,
    fontSize: 20,
    fontWeight: '600',
    color: color.B_00
  },
  ImagesStyle: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 150,
  },
  TextTwoStyle:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'600'
  }
})