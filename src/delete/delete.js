import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import color from '../utils/color'
const Delete = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Delete my account</Text>
            </View>
            <View style={styles.flex}>
                <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/worning.png')} />
                <Text style={styles.TextTwo}>Deleting your account will:</Text>
            </View>
            <View style={styles.flexTwo}>
                <View style={styles.TextThree}></View>
                <Text style={styles.TextFore}>Delete your account from WhatsApp</Text>
            </View>
            <View style={styles.flexTwo}>
                <View style={styles.TextThree}></View>
                <Text style={styles.TextFore}>Erase your message history</Text>
            </View>
            <View style={styles.flexTwo}>
                <View style={styles.TextThree}></View>
                <Text style={styles.TextFore}>Delete you from all your WhatsApp groups</Text>
            </View>
            <View style={styles.flexTwo}>
                <View style={styles.TextThree}></View>
                <Text style={styles.TextFore}>Delete your payments history and cancel any pending payments</Text>
            </View>
            <View style={styles.ViewTwo}></View>
            <View style={styles.flex}>
                <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/changenumber.jpg')} />
                <Text style={styles.Text}>Change number instead?</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Change')} style={styles.ViewFore}>
                <Text style={styles.TextFive}>CHANGE NUMBER</Text>
            </TouchableOpacity>
            <View style={styles.Line}></View>
            <Text style={styles.TextSix}>To delete your account, confirm your country code and enter your phone number.</Text>
            <Text style={{ marginHorizontal: 30, marginTop: 10 }}>Country</Text>
            <View style={styles.ViewFive}>
                <Text style={{ marginHorizontal: 35, color: color.B_000, fontSize: 16, fontWeight: '500', marginTop: 5 }}>India</Text>
                <Image resizeMode={'cover'} style={styles.ImageTwo} source={require('../assets/images/down.png')} />
            </View>
            <View style={styles.flexThree}></View>
            <Text style={{ marginHorizontal: 30, marginTop: 10 }}>phone</Text>
            <View style={styles.flexfore}>
                <Text style={{ marginHorizontal: 35, marginTop: 15 }}>+</Text>
                <TextInput

                />
                <TextInput
                    placeholder='phone number'
                    style={styles.TextInput}
                />
            </View>
            <View style={styles.LineStyle}>
            </View>
            <View style={styles.LineTwoStyle}></View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.TouchableOpacityTwo}>
                <Text style={styles.TextFive}>DELETE MY ACCOUNT</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{flex:1,justifyContent:'center'}}>

                <View style={styles.Modal}>
                    <Text style={styles.ModalText}>Please enter your phone number.</Text>
                    <Text onPress={() => setModalVisible(!modalVisible)}
                        style={styles.ModalTwo}>ok</Text>
                </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

export default Delete

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.B_00,

    },
    ViewStyle: {
        height: 100,
        width: '100%',
        backgroundColor: color.teal_800,
        flexDirection: 'row'
    },
    ImagesStyle: {
        height: 30,
        width: 30,
        marginLeft: 30,
        marginTop: 35,
    },
    TextStyle: {
        alignSelf: 'center',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: color.B_00
    },
    flex: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 20,
    },
    Images: {
        height: 30,
        width: 30,
    },
    TextTwo: {
        marginHorizontal: 16,
        fontSize: 17,
        color: 'red',
        fontWeight: '500'
    },
    Text: {
        marginHorizontal: 16,
        fontSize: 17,
        color: color.B_000,
        fontWeight: '500'
    },
    TextThree: {
        height: 5,
        width: 5,
        backgroundColor: color.gray_50,

        borderRadius: 10,
        marginTop: 8,
    },
    flexTwo: {
        flexDirection: 'row',
        marginHorizontal: 70
    },
    TextFore: {
        marginLeft: 10,
        fontSize: 15,
    },
    ViewTwo: {
        width: 330,
        height: 1,
        backgroundColor: color.gray_50,
        marginTop: 20,
        marginLeft: 70
    },
    ImagesTwo: {
        height: 50,
        width: 50,
    },
    ViewFore: {
        alignSelf: 'center',
        height: 50,
        width: 200,
        backgroundColor: color.teal_800,
        borderRadius: 5
    },
    TextFive: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_00
    },
    Line: {
        height: 1,
        width: '100%',
        backgroundColor: color.gray_50,
        marginTop: 30
    },
    TextSix: {
        marginHorizontal: 30,
        fontSize: 17,
        color: color.B_000,
        fontWeight: '400',
        marginTop: 10
    },
    ViewFive: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ImageTwo: {
        marginHorizontal: 30,
        height: 25,
        width: 25
    },
    flexThree: {
        width: 350,
        height: 1,
        backgroundColor: color.gray_50,
        marginTop: 5,
        marginHorizontal: 30
    },
    flexfore: {
        flexDirection: 'row'
    },
    TextInput: {
        marginHorizontal: 16,
        fontSize: 16
    },
    LineStyle: {

        height: 1,
        width: '20%',
        backgroundColor: color.gray_50,
        marginHorizontal: 30
    },
    LineTwoStyle: {
        height: 1,
        width: '65%',
        backgroundColor: color.gray_50,
        marginHorizontal: 125
    },
    TouchableOpacityTwo: {
        height: 50,
        width: '50%',
        backgroundColor: 'red',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 30
    },
    Modal: {
        height: 120,
        width: '90%',
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 5,
    },
    ModalText: {
        marginHorizontal: 40,
        marginTop: 20,
        fontSize: 18,
        fontWeight: '500',
    },
    ModalTwo: {
        marginLeft: 290,
        marginTop: 30,
        fontSize: 19,
        fontWeight: '600',
        color: color.teal_800
    }

})