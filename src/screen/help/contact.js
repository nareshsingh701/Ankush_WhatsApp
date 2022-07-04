import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, TextInput, Linking } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'
const Contact = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} >
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/colorLeft.png')} />
                </TouchableOpacity>
                <View style={styles.flex}>
                    <Text style={styles.TextStyle}>Contact us</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/threedot.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}

            >
                <View style={{ flex: 1, }}>
                    <View style={styles.Modal}>
                        <Text onPress={() => setModalVisible(!modalVisible)} style={styles.ModalText}>Send via email</Text>
                    </View>
                </View>
            </Modal>
            <ScrollView style={styles.marginBottum}>
                <View style={styles.ViewTwo}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Tell us how we can help'
                    />

                </View>
                <View style={styles.Viewwhidth}></View>
                <Text style={styles.color}>Please describe your problem</Text>
                <View style={styles.flex}>
                    <Text style={styles.ModalTwo}>Include device information? (options)</Text>
                    <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/chackbox.png')} />
                </View>
                <Text>Technical details like  your model and settings can help us answer your question.<Text onPress={() => Linking.openURL('https://faq.whatsapp.com/general/what-information-does-whatsapp-collect-when-you-contact-support?lg=en&lc=GB&eea=0')} style={styles.TextModal}>  Learn more</Text></Text>
                <View style={styles.ViewThree}>
                    <Text style={styles.Modalfour}>For suppor with payments,<Text style={{ fontSize: 15 }}> go to</Text><Text onPress={() => Linking.openURL('')} style={styles.TextModal}> Help in your payments home screen.</Text></Text>
                </View>
                

                    <View style={styles.ViewFive}>
                        <View style={{ flex: 1 }}>

                            <Text style={styles.ModalFive}>We will respond to you in a WhatsApp chat </Text>
                        </View>
                        <TouchableOpacity style={styles.TouchableOpacityTwo}>
                            <Text style={styles.TextSix}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
            
            </ScrollView>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.B_00
    },
    ViewStyle: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: color.B_00
    },
    Images: {
        marginLeft: 30,
        marginTop: 15,
        height: 30,
        width: 30
    },
    ImagesTwo: {
        marginHorizontal: 100,
        marginTop: 15,
        height: 30,
        width: 30
    },
    ImagesThree: {
        marginLeft: 30,
        marginTop: 15,
        height: 30,
        width: 30
    },
    TextStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 30,
        color: color.B_000,
        // marginTop:15

    },
    flex: {
        flexDirection: 'row',
    },
    Modal: {
        width: '50%',
        height: 50,
        backgroundColor: color.gray_50,
        borderRadius: 5,
        marginTop: 5,
        alignSelf: 'flex-end'
    },
    ModalText: {
        marginHorizontal: 16,
        marginTop: 15,
        fontSize: 17,
        fontWeight: '500',
        color: color.B_000
    },
    marginBottum: {
        marginHorizontal: 16
    },
    ViewTwo: {
        marginTop: 20,
        width: '100%',
        height: 120,
        backgroundColor: color.gray_50,
        borderRadius: 5
    },
    TextInput: {
        fontSize: 18,
        marginHorizontal: 10
    },
    Viewwhidth: {
        width: '100%',
        height: 0.5,
        backgroundColor: 'red'
    },
    color: {
        color: 'red',
        fontWeight: '500'
    },
    ModalTwo: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: '500'
    },
    TextModal: {
        fontSize: 16,
        fontWeight: '500',
        color: color.Blue_50
    },
    ViewThree: {
        width: '100%',
        height: 50,
        borderWidth: 0.6,
        marginTop: 20,
        borderRadius: 10
    },
    Modalfour: {
        marginHorizontal: 16,
        marginTop:5,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000
    },
    TouchableOpacityTwo: {
        width: '30%',
        height: 50,
        backgroundColor: color.teal_800,
        borderRadius: 5,

    },
    ViewFive: {
        flexDirection: 'row',

    },
    ModalFive: {
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000
    },
    TextSix: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '500',
        color: color.B_00,
        marginTop: 15
    }
})