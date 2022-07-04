import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import color from '../../utils/color'
const Privacy = (props) => {

    const renderMyButton = (first, second, screenName) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate(screenName)} style={styles.TouchableOpacity}>
                <Text style={styles.TextTwo}>{first}</Text>
                <Text style={styles.TextFore}>{second}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.cantainer}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Privacy</Text>
            </View>
            <ScrollView>
                <View style={styles.TextTwoStyle}>
                    <Text style={styles.Text}>who can see my personal info</Text>
                    <Text style={styles.TextThree}>if you don`t share your Last Seen, you won`t be able to see other people`s Last Seen</Text>
                </View>
                {renderMyButton('Last seen', 'Everyone', 'Lastseen')}
                {renderMyButton('Profile photo', 'Everyone', 'Profile')}
                <TouchableOpacity onPress={() => props.navigation.navigate('About')} style={styles.TouchableOpacity}>
                    <Text style={styles.TextTwo}>About</Text>
                    <Text style={styles.TextFore}>Everyone</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Statusprofile')} style={styles.TouchableOpacity}>
                    <Text style={styles.TextTwo}>Status</Text>
                    <Text style={styles.TextFore}>My contacts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TextTwoStyles}>
                    <View style={styles.flex}>
                        <Text style={styles.TextTwo}>Read receipts</Text>
                        <Image resizeMode={'cover'} style={styles.ImageTwo} source={require('../../assets/images/on.png')} />
                    </View>
                    <Text style={styles.TextThree}>if turned off, you won`t send or receive Read receipts. Read receipts are always send for group chats.</Text>
                </TouchableOpacity>
                <View style={styles.TextFive}></View>
                <Text style={styles.center}>Disappearing Messages</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Defaultmessage')} style={styles.TextThreeStyle}>
                    <View style={styles.flex}>
                        <Text style={styles.TextTwo}>Default Message timer</Text>
                        <Text style={styles.ViewforeStyle}>Off</Text>
                    </View>
                    <Text style={styles.TextThree}>if turned off, you won`t send or receive Read receipts. Read receipts are always send for group chats.</Text>
                </TouchableOpacity >
                <View style={styles.TextFive}></View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Groups')} style={styles.TouchableOpacity}>
                    <Text style={styles.TextTwo}>Groups</Text>
                    <Text style={styles.TextFore}>Everyone</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Livelocation')} style={styles.TouchableOpacity}>
                    <Text style={styles.TextTwo}>Live location</Text>
                    <Text style={styles.TextFore}>none</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Blocked')} style={styles.TouchableOpacity}>
                    <Text style={styles.TextTwo}>Blocked contacts</Text>
                    <Text style={styles.TextFore}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Fingerprint')} style={styles.TouchableOpacity}>
                    <Text style={styles.TextTwo}>fingerprint lock</Text>
                    <Text style={styles.TextFore}>Disabled</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Privacy

const styles = StyleSheet.create({
    cantainer: {
        flex: 1,
        backgroundColor: color.B_00,
        paddingBottom: 20,
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
        backgroundColor: color.B_00,
        height: 100,
        width: '100%',
    },
    TextThreeStyle: {
        marginTop: 5,
        backgroundColor: color.B_00,
        height: 100,
        width: '100%',
    },
    TextTwoStyles: {
        backgroundColor: color.B_00,
        height: 100,
        width: '100%',

    },
    Text: {
        marginTop: 15,
        marginHorizontal: 36,
        fontSize: 19,
        fontWeight: '500'
    },
    TextThree: {
        marginHorizontal: 36,
        marginTop: 5,
        fontSize: 16,
        fontWeight: '500',
    },
    TouchableOpacity: {
        height: 60,
        width: '100%',
        backgroundColor: color.B_00
    },
    TextTwo: {
        marginHorizontal: 36,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000,
        marginTop: 7
    },
    TextFore: {
        marginHorizontal: 36,
        fontSize: 15
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },
    ImageTwo: {
        width: 35,
        height: 35,
    },
    center: {
        marginHorizontal: 36,
        marginTop: 15,
        fontSize: 16,
        fontWeight: '500'
    },
    ViewforeStyle: {
        fontSize: 16,
        fontWeight: '500'
    },
    TextFive: {
        height: 1,
        width: '100%',
        backgroundColor: color.gray_50,
        marginTop: 10
    }
})