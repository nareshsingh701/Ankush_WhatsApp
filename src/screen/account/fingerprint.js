import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React from 'react'
import color from '../../utils/color'
import { DefaultTheme } from '@react-navigation/native'

const Fingerprint = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Fingerprint lock</Text>
            </View>
            <ScrollView>
                <View style={styles.View}>
                    <Text style={styles.TextTwo}>Unlock with fingerprint</Text>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/off.png')} />
                </View>
                <Text style={styles.TextThree}>When enabled,you`ll need to use fingerprint to open whatsapp. You can
                    still answer calls if whatsapp is locked.
                </Text>
                <View style={styles.Viewborder}></View>
            </ScrollView>
        </View>
    )
}

export default Fingerprint

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
        marginHorizontal: 16,
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
    View: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },
    TextTwo: {
        marginHorizontal: 16,
        fontSize: 18,
        fontWeight: '500',
        marginTop: 30,
        color: color.B_000
    },
    TextThree: {
        marginHorizontal: 30,
        fontSize: 16,
        fontWeight: '400',
    },
    Viewborder: {
        borderWidth: 0.4,
        marginTop: 10
    }

})