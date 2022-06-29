import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React from 'react'
import color from '../../src/utils/color'
import { DefaultTheme } from '@react-navigation/native'

const Security = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Fingerprint lock</Text>
            </View>
            <ScrollView>
                <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/11.jpg')} />
                <Text style={styles.TextTwo}>Messages and calls in end-to-end encrypted chats stay between you and the people you choose. Not even WhatsApp can read or losten to them.<Text onPress={() => Linking.openURL('https://www.whatsapp.com/security?lg=en&lc=GB&eea=0')} style={styles.Linking}> Learn more</Text></Text>
                <View style={styles.View}>
                    <Text style={styles.Text}>Show security notifications on this phone</Text>
                    <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/off.png')} />
                </View>
                <Text style={styles.TextThree}>Get notified when your security code changes for a contact`s phone in an end-to-end encrypted chat. If you have multiple devices, this setting must be enabled on each device where you want to get notifications.
                    <Text onPress={() => Linking.openURL('https://faq.whatsapp.com/general/security-and-privacy/about-security-code-change-notifications')} style={styles.Linking}> Learn more</Text></Text>

            </ScrollView>
        </View>
    )
}

export default Security

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
    Images: {
        alignSelf: 'center',
        marginTop: 35,
        height: 150,
        width: 150
    },
    TextStyle: {
        alignSelf: 'center',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: color.B_00
    },
    View: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },
    TextTwo: {
        marginHorizontal: 30,
        fontSize: 18,
        fontWeight: '500',
        marginTop: 30,
        color: color.B_000
    },
    Text: {
        marginHorizontal: 20,
        fontSize: 18,
        fontWeight: '500',
        marginTop: 30,
        color: color.B_000
    },
    TextThree: {
        marginHorizontal: 30,
        fontSize: 16,
        fontWeight: '400',
        marginBottom:20
    },
    ImagesTwo: {
        height: 35,
        width: 35,
        marginTop: 25
    },
    Linking: {
        color: color.Blue_50
    }

})