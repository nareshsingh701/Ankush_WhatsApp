import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'
const Storage = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);
    const [modalThreeVisible, setModalThreeVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} >
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/colorLeft.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Storage and data</Text>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={() => props.navigation.navigate('Manage')} style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/folder.png')} />
                    <View>
                        <Text style={styles.TextOne}>Manage storage</Text>
                        <Text style={styles.TextTwo}>605 kB</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.width}></View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Network')} style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/storage.png')} />
                    <View>
                        <Text style={styles.TextOne}>Network usage</Text>
                        <Text style={styles.TextTwo}>10.3 MB send .57.3 MB received</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexTwo}>
                    <Text style={styles.TextThree}>Use less data for calls</Text>
                    <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/off2.png')} />
                </TouchableOpacity>
                <View style={styles.width}></View>
                <Text style={styles.marginHorizontal}>Media auto-download</Text>
                <Text style={styles.Textfore} >Voice messagea are always automatically download</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <View style={styles.View}>
                        <Text style={styles.TextOne}>When using mobile data</Text>
                        <Text style={styles.TextTwo}>photos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalOneVisible(true)}>
                    <View style={styles.View}>
                        <Text style={styles.TextOne}>When connected on Wi-Fi</Text>
                        <Text style={styles.TextTwo}>All media</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalTwoVisible(true)}>
                    <View style={styles.View}>
                        <Text style={styles.TextOne}>When Roaming</Text>
                        <Text style={styles.TextTwo}>No media</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.width}></View>
                <Text style={styles.marginHorizontal}>Media upload quality</Text>
                <Text style={styles.Textfore} >Choose the quality of media files to be send</Text>
                <TouchableOpacity  onPress={() => setModalThreeVisible(true)}>
                    <View style={styles.ViewTwo}>
                        <Text style={styles.TextOne}>Photo upload quality</Text>
                        <Text style={styles.TextTwo}>Auto (recommended)</Text>
                    </View>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {

                        setModalVisible(!modalVisible);
                    }}


                >
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={styles.Modal}>
                            <Text style={styles.ModalText}>When using mobile data</Text>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/chackbox.png')} />
                                <Text style={styles.ModalThree}>Photos</Text>
                            </View>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/charak.png')} />
                                <Text style={styles.ModalThree}>Audio</Text>
                            </View>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/charak.png')} />
                                <Text style={styles.ModalThree}>Videos</Text>
                            </View>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/charak.png')} />
                                <Text style={styles.ModalThree}>Documents</Text>
                            </View>
                            <Text onPress={() => setModalVisible(!modalVisible)} style={styles.ModalFour}>CANCEL<Text onPress={() => setModalVisible(!modalVisible)}>      OK</Text></Text>
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
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={styles.Modal}>
                            <Text style={styles.ModalText}>When connected on Wi-Fi</Text>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/chackbox.png')} />
                                <Text style={styles.ModalThree}>Photos</Text>
                            </View>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/chackbox.png')} />
                                <Text style={styles.ModalThree}>Audio</Text>
                            </View>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/chackbox.png')} />
                                <Text style={styles.ModalThree}>Videos</Text>
                            </View>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/chackbox.png')} />
                                <Text style={styles.ModalThree}>Documents</Text>
                            </View>
                            <Text onPress={() => setModalOneVisible(!modalOneVisible)} style={styles.ModalFour}>CANCEL<Text onPress={() => setModalOneVisible(!modalOneVisible)}>      OK</Text></Text>
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
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={styles.Modal}>
                            <Text style={styles.ModalText}>When roaming</Text>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/charak.png')} />
                                <Text style={styles.ModalThree}>Photos</Text>
                            </View>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/charak.png')} />
                                <Text style={styles.ModalThree}>Audio</Text>
                            </View>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/charak.png')} />
                                <Text style={styles.ModalThree}>Videos</Text>
                            </View>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/charak.png')} />
                                <Text style={styles.ModalThree}>Documents</Text>
                            </View>
                            <Text onPress={() => setModalTwoVisible(!modalTwoVisible)} style={styles.ModalFour}>CANCEL<Text onPress={() => setModalTwoVisible(!modalTwoVisible)}>      OK</Text></Text>
                        </View>
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
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={styles.Modal}>
                            <Text style={styles.ModalText}>Photo upload quality</Text>
                            <Text style={styles.ModalTextTwo}>Best quality photoa are larger and can take longer to send</Text>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/onlite.png')} />
                                <Text style={styles.ModalThree}>Auto (recommended)</Text>
                            </View>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/o.png')} />
                                <Text style={styles.ModalThree}>Best quality</Text>
                            </View>
                            <View style={styles.flex}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/o.png')} />
                                <Text style={styles.ModalThree}>Data saver</Text>
                            </View>
                            <Text onPress={() => setModalThreeVisible(!modalThreeVisible)} style={styles.ModalFour}>CANCEL<Text onPress={() => setModalThreeVisible(!modalThreeVisible)}>      OK</Text></Text>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    )
}

export default Storage

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    ImagesThree: {
        marginLeft: 30,
        marginTop: 20,
        height: 30,
        width: 30
    },
    ImagesTwo: {

        marginTop: 20,
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
    flex: {
        flexDirection: 'row'
    },
    flexTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50
    },
    TextOne: {
        marginHorizontal: 25,
        fontSize: 18,
        fontWeight: '500',
        color: color.B_000,
        marginTop: 30
    },
    TextTwo: {
        marginHorizontal: 25,
    },
    width: {
        width: '100%',
        height: 0.7,
        backgroundColor: color.gray_50,
        marginTop: 15
    },
    TextThree: {
        marginHorizontal: 35,
        marginTop: 20,
        fontSize: 18,
        fontWeight: '500',
        color: color.B_000
    },
    marginHorizontal: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500'
    },
    Textfore: {
        marginHorizontal: 30,
        fontSize: 16,
        marginTop: 10
    },
    View: {
        marginHorizontal: 60
    },
    ViewTwo: {
        marginHorizontal: 60,
        marginBottom: 30
    },
    Modal: {
        height: 330,
        width: '90%',
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 5
    },
    ModalText: {
        marginLeft: 30,
        marginTop: 30,
        fontSize: 20,
        fontWeight: '500',
        color: color.B_000
    },
    ModalThree: {
        marginTop: 20,
        fontSize: 18,
        marginLeft: 30,
        fontWeight: '500',
        color: color.B_000
    },
    ModalFour: {
        marginTop: 30,
        marginLeft: 180,
        fontSize: 18,
        fontWeight: '500',
        color: color.teal_800
    },
    ModalTextTwo:{
        marginHorizontal:40,
        fontSize:16,
        fontWeight:'500',
        marginTop:10
    }
})