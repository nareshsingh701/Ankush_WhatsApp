import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'
import color from '../../src/utils/color';
import { DefaultTheme } from '@react-navigation/native'

const Change = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Change number</Text>
            </View>
            <ScrollView>
                <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/1.jpg')} />
                <Text style={styles.TextTwo}>Changing your phone number will migrate your account info, groups & settings.</Text>
              <Text style={styles.TextThree}>Before proceeding, please confirm that you are able to receive SMS or calls at your new number.</Text>
              <Text  style={styles.TextThree}>if you have both a new phone & a new number, first change your number on your old phone.</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Changenumber')} style={styles.TouchableOpacity}>
                    <Text style={styles.center}>NEXT</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Change

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.B_00
    },
    ViewStyle: {
        height: 100,
        width: '100%',
        backgroundColor: color.teal_800,
        flexDirection: 'row'
    },
    ImagesStyle: {
        marginLeft: 30,
        marginTop: 35,
        height: 30,
        width: 30
    },
    TextStyle: {
        alignSelf: 'center',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: color.B_00
    },
    TextTwo: {
        marginHorizontal: 30,
        fontSize: 17,
        marginTop: 30,
        fontWeight: '500',
        color: color.B_000
    },
    TouchableOpacity: {
        marginBottom: 30,
        height: 40,
        width: 100,
        backgroundColor: color.teal_800,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 300
    },
    center: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_00
    },
    Images: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    },
    TextThree:{
        marginHorizontal:30,
        marginTop:20,
        fontSize:15,
        fontWeight:'500'
    }

})