import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React from 'react'
import color from '../../src/utils/color';
import { DefaultTheme } from '@react-navigation/native'

const Twostep = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Two-step verification</Text>
            </View>
            <ScrollView>
                <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/2.jpg')} />
                <Text style={styles.TextTwo}>For added security, enable two-stop verification, which will require a PIN when registering your phone number with WhatsApp again.</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Step')} style={styles.TouchableOpacity}>
                    <Text style={styles.center}>ENABLE</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Twostep

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
        height: 200,
        width: 200
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
        fontSize: 15,
        fontWeight: '500'
    },
    TouchableOpacity: {
        marginBottom: 30,
        height: 40,
        width: 100,
        backgroundColor: color.teal_800,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 250
    },
    center: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_00
    }

})