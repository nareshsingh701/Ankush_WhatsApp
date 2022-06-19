import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'
import { launchImageLibrary } from 'react-native-image-picker'
const DataAdd = (props) => {
  const [image, setImage] = useState('');
  const [text, changeText] = useState('');
  let isButton = text.length <= 5;
  const onPressNEXT = () => {
    const combin = text;
    props.navigation.navigate('loderLogIn')
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
    <View style={styles.container}>
      <View style={styles.View}>
        <Text style={styles.Text}>Profile info</Text>
      </View>
      <View style={styles.ViewTwo}>
        <Text style={styles.TextOne}>please provide your name and an optional profile</Text>
        <Text style={styles.TextOne}>photo</Text>
      </View>
      <View style={styles.ViewOne}>
        <TouchableOpacity onPress={openPicker}>
          <Image resizeMode={'cover'} style={styles.imageOne} source={{ uri: image }} />
        </TouchableOpacity>
      </View>
      <View style={styles.ViewThree}>
        <TextInput
          style={styles.TextInput}
          placeholder='Type your name here'
          onChangeText={onchange}
        />

      </View>
      <TouchableOpacity
       disabled={isButton}
      onPress={()=> onPressNEXT()}
        style={styles.TouchableOpacity}
      >
        <Text style={styles.TextTwo}>NEXT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DataAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ViewTwo: {
    marginTop: 50
  },
  Text: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: color.teal_800
  },
  TextOne: {
    textAlign: 'center',
    fontSize: 16,

  },
  ViewOne: {
    width: 150,
    height: 150,
    backgroundColor: color.B_00,
    marginTop: 30,
    marginLeft: 130,
    borderRadius: 80
  },
  imageOne: {
    marginLeft: 60,
    marginTop: 60
  },
  TextInput: {
    fontSize: 18,

    borderBottomWidth: 2,
    borderBottomColor: color.teal_800,
    width: 320
  },
  TextThree: {

  },
  ViewThree: {
    marginTop: 50,
    marginLeft: 40,
  },
  ImagesStyles: {
    width: 30,
    height: 30,
    marginTop: 20
  },
  TouchableOpacity: {
    height: 50,
    width: 100,
    backgroundColor: color.teal_800,
    marginLeft: 150,
    marginTop: 220,
    borderRadius: 10
  },
  TextTwo: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: color.B_00
  }


})