import { StyleSheet, Text, View, ImageBackground, Image, ScrollView,Linking } from 'react-native'
import React from 'react'
import color from '../../utils/color'
const App = () => {
    return (
        <View style={styles.container}>

            <ImageBackground resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/download.jpg')} >
        
                    <View style={styles.ImageBackground}>
                        <Text style={styles.Text}>WhatsApp messenger</Text>
                        <Text style={styles.TextTwo}>Version 2.22.13.76</Text>
                        <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/WhatsApp.png')} />
                        <Text style={styles.TextThree}>@ 2010-2022 WhatsApp Inc.</Text>
                        <Text onPress={()=> Linking.openURL('https://faq.whatsapp.com/563219570998715/?helpref=uf_share')} style={styles.Textfour}>LICENSES</Text>
                    </View>
            </ImageBackground>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ImagesThree: {
        flex: 1,
        justifyContent: 'center'
    },
    ImageBackground: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    Text: {
        fontSize: 20,
        fontWeight: '500',
        color: color.B_00,
    },
    TextTwo: {
        fontSize: 17,
        fontWeight: '500',
        alignSelf: 'center',
        color: color.gray_50
    },
    Images: {
        width: 130,
        height: 130,
        alignSelf: 'center'
    },
    TextThree: {
        fontSize: 16,
        fontWeight: '500',
        color: color.gray_50,
        marginTop: 10
    },
    Textfour: {
        fontSize: 19,
        fontWeight: '500',
        color: color.Blue_50,
        alignSelf: 'center',
        marginTop: 50
    }
})