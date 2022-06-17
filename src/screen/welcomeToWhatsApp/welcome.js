import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

import color from '../../utils/color';

const Welcome = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.Text}>Welcome to WhatsApp</Text>
            </View>
            <View>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/home.jpg')} />
            </View>
            <View style={styles.flex}>
                <Text style={styles.TextThree}>Read our</Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com/legal/privacy-policy?lg=en&lc=GB&eea=0')}>
                    <Text style={styles.TextStyles}>Privacy Policy</Text>
                </TouchableOpacity>

                <Text style={styles.TextStyle}>.  Top "Agree and continue" to</Text>
            </View>
            <View style={styles.flex}>
                <Text style={styles.center}>accept the</Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.whatsapp.com/legal/terms-of-service?lg=en&lc=GB&eea=0')}>
                    <Text style={styles.TextTwo}>Terms of Service</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('logIn')}
                style={styles.View
                }>
                <Text style={styles.TouchableOpacityText}>AGREE AND CONTINUR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fff'
    },
    Text: {
        textAlign: "center",
        fontSize: 35,
        marginTop: 50,
        color: color.teal_800,
        fontWeight: 'bold'
    },
    ImagesStyles: {
        height: 250,
        width: 250,
        marginTop: 80,
        marginLeft: 75
    },
    TextStyle: {
        marginTop: 100,

        fontSize: 15
    },
    TextThree: {
        marginTop: 100,
        marginLeft: 15,
        fontSize: 15
    },
    TextStyles: {
        marginTop: 100,
        marginLeft: 15,
        fontSize: 15,
        color: color.Blue_50,
    },
    TextTwo: {
        marginLeft: 10,
        fontSize: 15,
        color: color.Blue_50,
        marginTop: 5
    },
    flex: {
        flexDirection: 'row'
    },
    center: {
        marginLeft: 100,
        marginTop: 5
    },
    View: {
        height: 50,
        width: 320,
        backgroundColor: color.teal_800,
        marginLeft: 40,
        borderRadius: 8,
        marginTop: 50
    },
    TouchableOpacityText: {
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
        color: '#fff'
    }
})