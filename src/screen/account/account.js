import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../utils/color'
const Account = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Account</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Privacy')} style={styles.ViewTwoStyle}>
                <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/privacy.jpg')} />
                <Text style={styles.TextTwoStyle}>Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Security')} style={styles.ViewTwoStyle}>
                <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/Security.jpg')} />
                <Text style={styles.TextTwoStyle}>Security</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Twostep')} style={styles.ViewTwoStyle}>
                <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/twostep.jpg')} />
                <Text style={styles.TextTwoStyle}>Two-stop verification</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Change')} style={styles.ViewTwoStyle}>
                <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/changenumber.jpg')} />
                <Text style={styles.TextTwoStyle}>Change number</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Request')} style={styles.ViewTwoStyle}>
                <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/Request.jpg')} />
                <Text style={styles.TextTwoStyle}>Request Account info</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Delete')} style={styles.ViewTwoStyle}>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/delete.png')} />
                <Text style={styles.TextTwoStyles}>Delete my account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Account

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
    ImagesTwo: {
        marginLeft: 30,
        marginTop: 10,
        height: 50,
        width: 50
    },
    ImagesStyle: {
        marginLeft: 30,
        marginTop: 35,
        height: 30,
        width: 30
    },
    ImagesStyles: {
        marginLeft: 45,
        marginTop: 15,
        height: 25,
        width: 25
    },
    TextStyle: {
        alignSelf: 'center',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: color.B_00
    },
    ViewTwoStyle: {
        height: 60,
        width: '100%',
        backgroundColor: color.B_00,
        flexDirection: 'row'
    },
    TextTwoStyle: {
        alignSelf: 'center',
        marginLeft: 30,
        fontSize: 15,
        fontWeight: 'bold',
        color: color.B_000
    },
    TextTwoStyles: {
        alignSelf: 'center',
        marginLeft: 50,
        fontSize: 15,
        fontWeight: 'bold',
        color: color.B_000
    }
})