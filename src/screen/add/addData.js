import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Linking,vaid } from 'react-native'
import React,{useState} from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import color from '../../utils/color'

const AddData = (props) => {
  const [text,changeText]=useState('');
let isButton = text.length <= 1;

const onPressNEXT =() =>{
  const combin =text;
  props.navigation.navigate('loderChearching')
}
const onchange = (value) =>{
  changeText(value)
}
return (
  <View style={styles.container}>
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
      <TouchableOpacity >
        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/plus.png')} />
      </TouchableOpacity>
      <View style={styles.Views}>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/plus.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.ViewStyle}>
        <TouchableOpacity>
          <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.ViewSix} >
      <TouchableOpacity onPress={() => Linking.openURL('https://faq.whatsapp.com/general?lg=en&lc=GB&eea=0&anid=d887bc8d-a7f2-4244-9238-df759fc8fcdd')}>
        <Text style={styles.TextStyle}>Visit our Help Centre</Text>
      </TouchableOpacity>
      <View style={styles.ViewSeven}>
        <TouchableOpacity  disabled={isButton} onPress={()=>Linking.openURL('https://faq.whatsapp.com/563219570998715/?helpref=uf_share')} >
          <Text style={styles.TextThree}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)
}

export default AddData

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  TextInput: {
    height: 120,
    width: 360,
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
    height: 110,
    width: 110,
    backgroundColor: color.gray_50,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 30,
    flexDirection: 'row'
  },
  Views: {
    height: 110,
    width: 110,
    backgroundColor: color.gray_50,
    borderRadius: 10,
    marginLeft: 50,
  },
  ViewStyle: {
    height: 110,
    width: 110,
    backgroundColor: color.gray_50,
    borderRadius: 10,
    marginLeft: 10,
  },
  ImagesStyles: {
    marginTop: 35,
    marginLeft: 30,
    height: 40,
    width: 40
  },
  TextStyle: {
    marginStart: 20,
    marginLeft: 30,
    fontSize: 15,
    color: color.A_700,
    marginTop: 300
  },
  ViewSix: {
    flexDirection: 'row'
  },
  ViewSeven: {
    height: 50,
    width: 100,
    backgroundColor: color.teal_800,
    marginTop: 290,
    marginLeft: 100,
    borderRadius: 10
  },
  TextThree: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 15,
    color: color.B_00,
    fontWeight: 'bold'
  }
})