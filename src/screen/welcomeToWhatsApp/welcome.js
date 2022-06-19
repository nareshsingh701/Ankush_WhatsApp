import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React from 'react'

import color from '../../utils/color';

const Welcome = (props) => {
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
            <Text style={styles.Text}>Welcome to WhatsApp</Text>
            <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/home.jpg')} />
            <Text style={styles.TextThree}>Read our
                <Text onPress={() => Linking.openURL('https://www.whatsapp.com/legal/privacy-policy?lg=en&lc=GB&eea=0')} style={styles.TextStyles}> Privacy Policy</Text>. Top "Agree and continue" to accept the
                <Text onPress={() => Linking.openURL('https://www.whatsapp.com/legal/terms-of-service?lg=en&lc=GB&eea=0')} style={styles.TextStyles}> Terms of Service</Text>
            </Text>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('logIn')}
                style={styles.View
                }>
                <Text style={styles.TouchableOpacityText}>AGREE AND CONTINUR</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    Text: {
        textAlign: "center",
        fontSize: 22,
        marginTop: 20,
        color: color.teal_800,
        fontWeight: 'bold'
    },
    ImagesStyles: {
        height: 250,
        width: 250,
        marginTop: 80,
        alignSelf: 'center'
    },
    TextStyle: {
        fontSize: 15
    },
    TextThree: {
        fontSize: 15,
        marginTop: 100,
        lineHeight: 24
    },
    TextStyles: {
        marginLeft: 5,
        fontSize: 15,
        color: color.Blue_50,
    },
    TextTwo: {
        marginLeft: 5,
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
        borderRadius: 8,
        marginTop: 50,
        alignSelf: "center",
    },
    TouchableOpacityText: {
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
        color: '#fff'
    }
})