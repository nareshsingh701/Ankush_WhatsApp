import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking, TextInput } from 'react-native'
import React from 'react'
import color from '../../src/utils/color';
import { DefaultTheme } from '@react-navigation/native'

const Step = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Two-step verification</Text>
            </View>
            <ScrollView>

                <Text style={styles.TextTwo}>Enter a 6-digit PIN which you`ll be asked for when you register your phone number with</Text>
                <Text style={styles.TextThree}>WhatsApp:</Text>
                <TextInput
                    style={styles.TextInput}
                />
                <View style={styles.Viewcan}>

                </View>
                <TouchableOpacity style={styles.TouchableOpacity}>
                    <Text style={styles.center}>ENABLE</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Step

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
        fontSize: 16,
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
        marginTop: 400
    },
    center: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_00
    },
    TextThree: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000
    },
    TextInput: {
        marginLeft: 100,
        marginTop:10
    },
    Viewcan:{
        width:200,
        backgroundColor:color.teal_800
    }

})