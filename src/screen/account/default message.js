import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,Linking } from 'react-native'
import React from 'react'
import color from '../../utils/color'
import { DefaultTheme } from '@react-navigation/native'

const Defaultmessage = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Default message timer</Text>
            </View>
            <ScrollView>
                <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/photo.jpg')} />
                <Text style={styles.TextTwoStyle}>Start new chats with disappearing message</Text>
                <View style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/24.png')} />
                    <Text style={styles.TextStyleTwo}>24 hours</Text>
                </View>
                <View style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/24.png')} />
                    <Text style={styles.TextStyleTwo}>7 days</Text>
                </View>
                <View style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/24.png')} />
                    <Text style={styles.TextStyleTwo}>90 days</Text>
                </View>
                <View style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/onlite.png')} />
                    <Text style={styles.TextStyleTwo}>Off</Text>
                </View>
                <Text style={styles.TextThree}>When enabled, all new individual chats will start with disappearing messages set to the selected duration. This setting will not affect your existing chats.<Text onPress={()=> Linking.openURL('https://faq.whatsapp.com/general/chats/about-disappearing-messages?lg=en&lc=GB&eea=0')} style={styles.Textfore}> Learn more</Text></Text>
            </ScrollView>
        </View>
    )
}

export default Defaultmessage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.B_00,
        paddingBottom:20
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
    TextTwoStyle: {
        marginHorizontal: 16,
        marginTop: 30,
        fontSize: 18,
        fontWeight: '600'
    },
    flex: {
        flexDirection: 'row'
    },
    TextStyleTwo: {
        fontSize: 17,
        marginTop: 20,
        marginHorizontal: 30,
        fontWeight: '500',
        color: color.B_000
    },
    Images: {
        height: 25,
        width: 25,
        marginLeft: 50,
        marginTop: 20
    },
    TextThree: {
        marginHorizontal: 16,
        fontSize: 16,
        marginTop: 30
    },
    ImagesTwo: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 20,
    
    },
    Textfore:{
        color:color.Blue_50,
       
    }

})