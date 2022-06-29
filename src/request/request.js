import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import color from '../utils/color'
const Request = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Request account info</Text>
            </View>
            <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/5.jpg')} />
            <Text style={styles.TextTwo}>Create a report of your WhatsApp account information and settings,which you can access or port to another app. This report does not include your messages.<Text onPress={() => Linking.openURL('https://faq.whatsapp.com/general/account-and-profile/how-to-request-your-account-information?lg=en&lc=GB&eea=0')} style={styles.TextThree}> Learn more</Text> </Text>
            <View style={styles.ViewTwo}>
                <View style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/Documents.png')} />
                    <Text style={styles.TextFore}>Request report</Text>
                </View>
            </View>
            <View  style={styles.ViewThree}>
            </View>
        </View>
    )
}

export default Request

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
    ImagesTwo: {
        marginLeft: 30,
        marginTop: 30,
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
    Images: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 10
    },
    TextTwo: {
        fontSize: 16,
        fontWeight: '500',
        marginHorizontal: 30,
        color: color.B_000
    },
    TextFore: {
        fontSize: 16,
        fontWeight: '500',
        marginHorizontal: 30,
        color: color.B_000,
        marginTop:30
    },
    TextThree: {
        color: color.Blue_50
    },
    ViewTwo: {
        width: '100%',
        height: 1,
        backgroundColor: color.gray_50,
        marginTop: 30
    },
    ViewThree: {
        width: '100%',
        height: 1,
        backgroundColor: color.gray_50,
        marginTop: 80
    },
    flex: {
        flexDirection: 'row'
    }
})