import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import color from '../../utils/color'



const AddData = (props) => {
  const [image, setImage] = useState('');
  const [text, changeText] = useState('');
  let isButton = text.length <= 1;

  const onPressNEXT = () => {
    const combin = text;
    props.navigation.navigate('loderChearching')
  }
  const onchange = (value) => {
    changeText(value)
  }
  const openPicker = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.8

    };

    launchImageLibrary(options, (response) => {
      console.log('Response = ', response.assets);
      setImage(response.assets[0].uri)
    });
  }
  return (
    <ScrollView style={{ flex: 1, }} contentContainerStyle styles={styles.container}>
      <View style={styles.TextInput}>
        <TextInput
          onChangeText={onchange}
          style={styles.TextInputStyle}
          placeholder='Describe your problem'
        />
      </View>
      <View>
        <Text style={styles.Text}>Add screenshots (optional)</Text>
      </View>
      <View style={styles.View}>
        <TouchableOpacity onPress={openPicker}>
          <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/plus.png')} />
        </TouchableOpacity>
        <View style={styles.Views}>
          <TouchableOpacity onPress={openPicker}>
            <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/plus.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.ViewStyle}>
          <TouchableOpacity onPress={openPicker}>
            <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/plus.png')} />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.ViewTwo}>
        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={{ uri: image }} />
      </View>

      <View style={styles.ViewSix} >
          <Text   onPress={() => Linking.openURL('https://faq.whatsapp.com/general?lg=en&lc=GB&eea=0&anid=d887bc8d-a7f2-4244-9238-df759fc8fcdd')} style={styles.TextStyle}>Visit our Help Centre</Text>
        <View style={styles.ViewSeven}>
          <TouchableOpacity disabled={isButton} onPress={() => Linking.openURL('https://faq.whatsapp.com/563219570998715/?helpref=uf_share')} >
            <Text style={styles.TextThree}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default AddData

const styles = StyleSheet.create({
  container: {
  
    paddingHorizontal: 16,
    paddingHorizontal:16
  },
  TextInput: {
    marginTop:20,
    height: 80,
    width: 330,
    backgroundColor: color.gray_50,
    marginHorizontal: 16,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: color.teal_800
  },
  TextInputStyle: {
    padding: 10,
    fontSize: 18
  },
  Text: {
    marginTop: 30,
    fontSize: 15,
    marginLeft: 20,
    fontWeight: 'bold',
    color: color.teal_800
  },
  View: {
    marginLeft:25,
    height: 90,
    width: 90,
    backgroundColor: color.gray_50,
    borderRadius: 10,
    marginTop: 30,
    flexDirection: 'row'
  },
  Views: {
    height: 90,
    width: 90,
    backgroundColor: color.gray_50,
    borderRadius: 10,
  marginLeft:50
  },
  ViewStyle: {
    height: 90,
    width: 90,
    backgroundColor: color.gray_50,
    borderRadius: 10,
    marginLeft: 20,
  },
  ImagesStyles: {
    marginTop: 35,
    height: 20,
    width: 20,
    marginLeft:35
  },
  TextStyle: {
    marginStart: 20,
    fontSize: 15,
    color: color.A_700,
    marginTop: 10
  },
  ViewSix: {
    flexDirection: 'row',
    marginTop: 60,
    alignSelf:'center',
    marginBottom:20
  },
  ViewSeven: {
    height: 50,
    width: 100,
    backgroundColor: color.teal_800,

    marginLeft: 50,
    borderRadius: 10
  },
  TextThree: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 15,
    color: color.B_00,
    fontWeight: 'bold'
  },
  ImagesStyle: {
    height: 100,
    width: 100,
    marginTop: 60,
  marginLeft:50
  },
  ViewTwo: {
    height: 150,
    width: 150,
    backgroundColor: color.B_00,
    marginTop: 30,
    alignSelf:'center',
    borderRadius:100
  }
})