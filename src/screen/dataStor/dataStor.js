import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React from 'react'
import color from '../../utils/color'
const DataStor = (props) => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <View style={styles.ViewStyle}>
        <Text style={styles.TextStyle}>Problem detected</Text>
      </View>

      <Text style={styles.Text}>We didn't detect a valid phone number.</Text>

      
        <Text style={styles.Text}>please go back to the previous Screen and enter your phone number in full international format:</Text>
     

        <Text style={styles.TextOne}>1. Choose your country from country list. This</Text>
        <Text style={styles.TextTwo}>Will automatically fill the country code.</Text>

        <Text style={styles.TextOne}>2. Enter your phone number.Omit any leading Os before the phone number.</Text>
        <Text style={styles.Text}>For exampal,a correct United States phone number will appear as +1 (408) 555-1234 after being entered.</Text>
   

      <View style={styles.ViewOne}>
        <Text style={styles.Text}>For more information,please read our </Text>
          <Text onPress={() => Linking.openURL('https://faq.whatsapp.com/android/verification/how-to-verify-your-phone-number/?lang=en')} style={styles.color}> FAQ.</Text>
      
      </View>
      <View style={styles.ViewStyles}>
        <TouchableOpacity onPress={() => props.navigation.navigate('loderScreen')}>
          <Text style={styles.ButtonStyle}>This doesn't answer my question</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default DataStor

const styles = StyleSheet.create({
  container: {
    
    paddingBottom: 20,
    paddingHorizontal:16
    
  },
  Text: {

    textAlign:'center',
    fontSize: 15,
    color: color.B_000,
    marginTop:20,

  },
  View: {
    marginTop: 20,
  },
  TextOne: {
    
    alignSelf:'center',
    fontSize: 15,
    color: color.B_000,
    marginTop:20
  },
  TextTwo: {
    fontSize: 15,
    color: color.B_000
  },
  ViewOne: {
    marginTop: 20,
    flexDirection: 'row'

  },
  color: {
    color: color.Blue_50,
    marginTop:20
  },
  ViewStyle: {
    alignSelf:'center',
    height: 80,
    width: 400,
    backgroundColor: color.teal_800
  },
  TextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: color.B_00
  },
  ViewStyles: {
    alignSelf:'center',
    height: 70,
    width: 400,
    backgroundColor: color.teal_800,
    marginTop: 200
  },
  ButtonStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: color.B_00

  }

})