import { StyleSheet, Text, View,TouchableOpacity,Linking } from 'react-native'
import React from 'react'
import color from '../../utils/color'
const DataStor = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.ViewStyle}>
<Text style={styles.TextStyle}>Problem detected</Text>
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>We didn't detect a valid phone number.</Text>
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>please go back to the previous Screen and enter</Text>
        <Text style={styles.Text}>your phone number in full international format:</Text>
      </View>
      <View style={styles.View}>
        <Text style={styles.TextOne}>1. Choose your country from country list. This</Text>
        <Text style={styles.TextTwo}>Will automatically fill the country code.</Text>
      </View>
      <View style={styles.View}>
        <Text style={styles.TextOne}>2. Enter your phone number.Omit any leading</Text>
        <Text style={styles.TextTwo}>Os before the phone number.</Text>
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>For exampal,a correct United States phone</Text>
        <Text style={styles.Text}>number will appear as +1 (408) 555-1234 after</Text>
        <Text style={styles.Text}>being entered.</Text>
      </View>
      <View style={styles.ViewOne}>
        <Text style={styles.Text}>For more information,please read our </Text>
        <TouchableOpacity onPress={()=>Linking.openURL('https://faq.whatsapp.com/android/verification/how-to-verify-your-phone-number/?lang=en')}>
          <Text style={styles.color}>FAQ.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ViewStyles}>
<TouchableOpacity onPress={()=>props.navigation.navigate('loderScreen')}>
  <Text style={styles.ButtonStyle}>This doesn't answer my question</Text>
</TouchableOpacity>
      </View>
    </View>
  )
}

export default DataStor

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Text: {

    marginLeft: 40,
    fontSize: 15,
    color: color.B_000
  },
  View: {
    marginTop: 20,
  },
  TextOne: {
    marginLeft: 60,
    fontSize: 15,
    color: color.B_000
  },
  TextTwo: {
    marginLeft: 80,
    fontSize: 15,
    color: color.B_000
  },
  ViewOne: {
marginTop:20,
flexDirection:'row'

  },
  color:{
    color:color.Blue_50,
    marginLeft:2
  },
  ViewStyle:{
    height:80,
    width:400,
    backgroundColor:color.teal_800
  },
  TextStyle:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
    color:color.B_00
  },
  ViewStyles:{
    height:70,
    width:400,
    backgroundColor:color.teal_800,
    marginTop:200
  },
  ButtonStyle:{
    fontWeight:'bold',
    textAlign:'center',
    marginTop:20,
    color:color.B_00

  }
  
})