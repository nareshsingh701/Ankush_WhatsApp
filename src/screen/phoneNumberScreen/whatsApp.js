import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const WhatsApp = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.View}>
        <View style={styles.ViewStyle}>
          <Text style={styles.Text}>WhatsApp</Text>
          <TouchableOpacity onPress={()=>props.navigation.navigate('search')}>
            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/search.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/i.png')} />
          </TouchableOpacity>
        </View>
        <ScrollView >
          <View style={styles.row}>
            <TouchableOpacity onPress={() => props.navigation.navigate('camra')}>
              <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/camra.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.Texttwo}>CHATS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('status')}>
              <Text style={styles.Texttwo}>STATUS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('calls')}>
              <Text style={styles.Texttwo}>CALLS</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </View>

     </View>
  )
}

export default WhatsApp;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  View: {
    height: 150,
    width: 410,
    backgroundColor: '#115566',

  },
  Text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 25,
    marginLeft: 15
  },
  ViewStyle: {
    flexDirection: 'row'
  },
  ImagesStyle: {
    height: 30,
    width: 30,
    marginLeft: 150,
    marginTop: 25

  },
  ImagesStyles: {
    height: 30,
    width: 30,
    marginLeft: 30,
    marginTop: 25

  },
  row: {
    flexDirection: 'row',

  },
  Texttwo: {
    marginTop: 45,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 45,

  },

  Image: {
    height: 30,
    width: 30,
    marginLeft: 10,
    marginTop: 45,

  },

})