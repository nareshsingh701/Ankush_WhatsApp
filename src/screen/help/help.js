import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,Linking } from 'react-native'
import React from 'react'
import color from '../../utils/color'
const Help = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} >
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/colorLeft.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Help</Text>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={()=> Linking.openURL('https://faq.whatsapp.com/android?lg=en&lc=GB&eea=0&anid=e372914c-0afc-401e-b14a-90da11bee155')} style={styles.ViewTwoStyles}>
                    <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/help.png')} />
                    <View style={styles.ViewSix}>
                        <Text style={styles.TextThree}>Help Center</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('LodingTwo')} style={styles.ViewTwoStyles}>
                    <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/invite.png')} />
                    <View style={styles.ViewSix}>
                        <Text style={styles.TextThree}>Contact us</Text>
                        <Text style={styles.TextFore}>Questions? Need help?</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Linking.openURL('https://www.whatsapp.com/legal/?lg=en&lc=GB&eea=0')} style={styles.ViewTwoStyles}>
                    <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/Documentswhite.png')} />
                    <View style={styles.ViewSix}>
                        <Text style={styles.TextThree}>Terms and Privacy Policy</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('App')} style={styles.ViewTwoStyles}>
                    <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/i2.png')} />
                    <View style={styles.ViewSix}>
                        <Text style={styles.TextThree}>App info</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Help

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:color.B_00
    },
    ViewStyle: {
        flexDirection: 'row',
        height: 100,
        width: '100%',
        backgroundColor: color.teal_800
    },
    Images: {
        marginLeft: 30,
        marginTop: 35,
        height: 30,
        width: 30
    },
    TextStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 30,
        color: color.B_00
    },
    ViewTwoStyles: {
        flexDirection: 'row',
        height: 80,
        width: '100%',
        backgroundColor: color.B_00,
    },
    ImagesThree: {
        marginTop: 35,
        height: 25,
        width: 25,
        marginLeft: 30
    },
    TextThree: {
        fontSize: 18,
        fontWeight: '600',
        color: color.B_000
    },
    ViewSix: {
        marginLeft: 30,
        marginTop: 30,
    },
    TextFore: {
        fontWeight: '500',
    },
})