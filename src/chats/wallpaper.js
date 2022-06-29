import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React from 'react'
import color from '../utils/color'
const Wallpaper = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Chats')} >
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/colorLeft.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Light Theme Wallpaper</Text>
            </View>
            <ScrollView>
            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/6.jpg')} />
            <Text style={styles.TextTwo}>CHANGE</Text>
            <Text style={styles.TextThree}>To change your wallpaper for dark theme, turn on dark theme from Setting  Chats  Theme.</Text>
            </ScrollView>
        </View>
    )
}

export default Wallpaper

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.B_00
    },
    ViewStyle: {
        flexDirection: 'row',
        height: 100,
        width: '100%',
        backgroundColor: color.teal_800
    },
    Images: {
        marginHorizontal: 30,
        marginTop: 35,
        height: 30,
        width: 30
    },
    TextStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        color: color.B_00
    },
    ImagesStyle: {
        width: 200,
        height: 400,
        alignSelf: 'center',
        marginTop: 30
    },
    TextTwo: {
        alignSelf: 'center',
        marginTop: 30,
        color: color.teal_800,
        fontSize: 18,
        fontWeight: '500'
    },
    TextThree: {
        marginHorizontal: 30,
        fontSize: 15,
        marginBottom: 100,
        marginTop: 50

    }
})