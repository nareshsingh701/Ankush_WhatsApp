import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal, Linking } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'
const Notifications = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);
    const [modalThreeVisible, setModalThreeVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Notifications</Text>
            </View>
            <ScrollView>
            <View>
                <View style={styles.flex}>
                    <Text style={styles.TextTwo}>Conversation tones</Text>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/on.png')} />
                </View>
                <Text style={styles.TextThree}>Play sounds for incoming and outgoing messages.</Text>
            </View>
            <View style={styles.width}></View>
            <Text style={styles.Textfore}>Messages</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)} >
                <Text style={styles.Textfive}>Notification tone</Text>
                <Text style={styles.TextSix}>Default (notification_000)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalOneVisible(true)}>
                <Text style={styles.Textfive}>Vibrate</Text>
                <Text style={styles.TextSix}>Default</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalTwoVisible(true)} >
                <Text style={styles.TextSeven}>Popup notification</Text>
                <Text style={styles.TextSix}>Not avaliable</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalThreeVisible(true)} >
                <Text style={styles.Textfive}>Light</Text>
                <Text style={styles.TextSix}>White</Text>
            </TouchableOpacity>
            <View style={styles.flex}>
                <Text style={styles.TextTwo}>Use high priority notifications</Text>
                <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/on.png')} />
            </View>
            <Text style={styles.TextThree}>Show previews of  nonifications at the top of the screen</Text>
            <View style={styles.flex}>
                <Text style={styles.TextTwo}>Reaction Notifications</Text>
                <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/on.png')} />
            </View>
            <Text style={styles.TextThree}>Show notifications for reactions to messages you send</Text>
            <View style={styles.width}></View>
            <Text style={styles.Textfore}>Groups</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.Textfive}>Notification tone</Text>
                <Text style={styles.TextSix}>Default (notification_000)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalOneVisible(true)} >
                <Text style={styles.Textfive}>Vibrate</Text>
                <Text style={styles.TextSix}>Default</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalThreeVisible(true)}>
                <Text style={styles.Textfive}>Light</Text>
                <Text style={styles.TextSix}>White</Text>
            </TouchableOpacity>
            <View style={styles.flex}>
                <Text style={styles.TextTwo}>Use high priority notifications</Text>
                <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/on.png')} />
            </View>
            <Text style={styles.TextThree}>Show previews of  nonifications at the top of the screen</Text>
            <View style={styles.flex}>
                <Text style={styles.TextTwo}>Reaction Notifications</Text>
                <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/on.png')} />
            </View>
            <Text style={styles.TextThree}>Show notifications for reactions to messages you send</Text>
            <View style={styles.width}></View>
            <Text style={styles.Textfore}>Calls</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)} >
                <Text style={styles.Textfive}>Ringtone</Text>
                <Text style={styles.TextSix}>Default (notification_000)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalOneVisible(true)} style={styles.TouchableOpacity}>
                <Text style={styles.Textfive}>Vibrate</Text>
                <Text style={styles.TextSix}>Default</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {

                    setModalVisible(!modalVisible);
                }}

            >
                <View style={styles.Modal}>
                    <View style={styles.flexTwo}>
                        <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/share.png')} />
                        <View style={styles.flex}>
                            <Text style={styles.TextEight}>Share via "Nearby Share"</Text>
                            <View style={styles.ViewTwo}>
                                <Text style={styles.Share}>Share</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.widthTwo}></View>
                    <View style={styles.flexThree}>
                        <View style={styles.ViewSix}>
                            <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/setting2.png')} />
                            <Text style={styles.TextNine}>Sound & vibation</Text>
                        </View>

                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/bot.png')} />
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalOneVisible}
                onRequestClose={() => {

                    setModalOneVisible(!modalOneVisible);
                }}
            >
                <View style={styles.ModalTwo}>
                    <Text style={styles.ModalText}>Vibrate</Text>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/o.png')} />
                        <Text style={styles.ModalTextTwo}>Off</Text>
                    </View>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/onlite.png')} />
                        <Text style={styles.ModalTextTwo}>Default</Text>
                    </View>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/o.png')} />
                        <Text style={styles.ModalTextTwo}>Short</Text>
                    </View>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/o.png')} />
                        <Text style={styles.ModalTextTwo}>Long</Text>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalTwoVisible}
                onRequestClose={() => {

                    setModalTwoVisible(!modalTwoVisible);
                }}
            >
                <View style={styles.ModalThree}>
                    <Text style={styles.ModalTextThree}>Popup notifications are no longer available in your version of Android</Text>
                    <Text onPress={() => Linking.openURL('https://faq.whatsapp.com/general/26000003?lg=en&lc=GB&eea=0')} style={styles.ModalTextfore}>LEARN MORE <Text onPress={() => setModalTwoVisible(!modalTwoVisible)}>                       OK</Text></Text>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalThreeVisible}
                onRequestClose={() => {

                    setModalThreeVisible(!modalThreeVisible);
                }}
            >
                <View style={styles.Modalfore}>
                    <Text style={styles.ModalText}>Light</Text>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/o.png')} />
                        <Text style={styles.ModalTextTwo}>None</Text>
                    </View>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/onlite.png')} />
                        <Text style={styles.ModalTextTwo}>White</Text>
                    </View>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/o.png')} />
                        <Text style={styles.ModalTextTwo}>Red</Text>
                    </View>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/o.png')} />
                        <Text style={styles.ModalTextTwo}>Yellow</Text>
                    </View>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/o.png')} />
                        <Text style={styles.ModalTextTwo}>Green</Text>
                    </View>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/o.png')} />
                        <Text style={styles.ModalTextTwo}>Cyan</Text>
                    </View>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/o.png')} />
                        <Text style={styles.ModalTextTwo}>Blue</Text>
                    </View>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/o.png')} />
                        <Text style={styles.ModalTextTwo}>Purple</Text>
                    </View>
                </View>
            </Modal>
            </ScrollView>
        </View>
    )
}

export default Notifications

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
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flexThree: {
        flexDirection: 'row',

    },
    TextTwo: {
        marginTop: 20,
        marginHorizontal: 30,
        fontSize: 17,
        fontWeight: '500',
        color: color.B_000
    },
    TextEight: {
        marginTop: 20,
        marginHorizontal: 16,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000
    },
    Images: {
        height: 30,
        width: 30,
        marginTop: 20,
        marginHorizontal: 40
    },
    ImagesThree: {
        height: 30,
        width: 30,
        marginTop: 20,
    },
    ImagesFore: {
        height: 30,
        width: 30,
        marginTop: 20,
        marginLeft: 35
    },
    TextThree: {
        marginHorizontal: 30,
        fontSize: 16
    },
    width: {
        width: '100%',
        height: 1,
        backgroundColor: color.gray_50,
        marginTop: 15
    },
    widthTwo: {
        width: '90%',
        height: 0.4,
        backgroundColor: color.B_000,
        marginTop: 20,
        alignSelf: 'center'

    },
    Textfore: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500'
    },
    TouchableOpacity: {
        marginBottom: 20
    },
    Textfive: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000
    },
    TextSeven: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500',
    },
    TextSix: {
        marginHorizontal: 30
    },
    Modal: {
        width: '100%',
        marginHorizontal: 30,
        height: 250,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        marginTop: 350,
        borderRadius: 20
    },
    flexTwo: {
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 30
    },
    ViewTwo: {
        height: 30,
        width: '25%',
        backgroundColor: color.Blue_50,
        borderRadius: 5,
        marginTop: 20
    },
    Share: {
        alignSelf: 'center',
        marginTop: 5,
    },
    ViewSix: {
        width: '30%',
        height: 150
    },
    TextNine: {
        marginHorizontal: 30,
        marginTop: 10
    },
    ModalTwo: {
        width: '90%',
        height: 270,
        borderRadius: 5,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        marginTop: 300
    },
    ModalText: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 19,
        fontWeight: '500',
        color: color.B_000
    },
    ModalTextTwo: {
        marginHorizontal: 16,
        marginTop: 25,
        fontSize: 17,
        fontWeight: '500',
        color: color.B_000
    },
    ModalThree: {
        height: 130,
        width: '90%',
        backgroundColor: color.gray_50,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 300
    },
    ModalTextThree: {
        marginHorizontal: 30,
        fontSize: 16,
        marginTop: 15
    },
    ModalTextfore: {
        marginHorizontal: 30,
        marginTop: 30,
        fontSize: 18,
        color: color.teal_800,
        fontWeight: '500'
    },
    Modalfore: {
        width: '90%',
        height: 460,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 5
    }
})