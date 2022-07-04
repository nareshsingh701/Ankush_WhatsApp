import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import color from '../../src/utils/color';
import { DefaultTheme } from '@react-navigation/native'

const Chathistory = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Chats')}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Chat history</Text>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={()=> props.navigation.navigate('NewGroup')} style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/14.jpg')} />
                    <Text style={styles.TextTwo}>Export chat</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/12.jpg')} />
                    <Text style={styles.TextTwo}>Archive all chats</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalOneVisible(true)} style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/13.jpg')} />
                    <Text style={styles.TextTwo}>Clear all chats</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalTwoVisible(true)} style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../assets/images/1.png')} />
                    <Text style={styles.TextTwo}>Delete all chats</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={{flex:1,justifyContent:'center'}}>

                    <View style={styles.Modal}>
                        <Text style={styles.ModalText}>Are you sure you want to archive ALL chats?</Text>
                        <Text onPress={() => setModalVisible(!modalVisible)}
                            style={styles.TextThree} >CANCEL       <Text onPress={() => setModalVisible(!modalVisible)} >OK</Text></Text>
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
                    <View style={{flex:1,justifyContent:'center'}}>

                    <View style={styles.ModalTwo}>
                        <Text style={styles.ModalTextTwo}>Clear all chats?</Text>
                        <View style={styles.flexTwo}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyleTwo} source={require('../assets/images/16.jpg')} />
                            <Text style={styles.Textfour}>Also delete media receive in chats from the phone gallery</Text>
                        </View>
                        <View style={styles.flexTwo}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyleTwo} source={require('../assets/images/16.jpg')} />
                            <Text style={styles.Textfour}>Delete starred messages</Text>

                        </View>
                        <Text onPress={() => setModalOneVisible(!modalOneVisible)} style={styles.Textfive} >CANCEL       <Text onPress={() => setModalOneVisible(!modalOneVisible)}>CLEAR CHATS</Text></Text>
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
                    <View style={{flex:1,justifyContent:'center'}}>

                    <View style={styles.ModalThree}>
                        <Text style={styles.ModalTextTwo}>Delete all chats?</Text>
                        <View style={styles.flexTwo}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyleTwo} source={require('../assets/images/16.jpg')} />
                            <Text style={styles.Textfour}>Also delete media received in chats from the phone gallery</Text>
                        </View>
                        <Text onPress={() => setModalTwoVisible(!modalTwoVisible)} style={styles.Textfive} >CANCEL       <Text onPress={() => setModalTwoVisible(!modalTwoVisible)}>DELETE CHATS</Text></Text>
                    </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    )
}

export default Chathistory

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
    Images: {
        marginHorizontal: 20,
        marginTop: 20,
        height: 50,
        width: 50
    },
    ImagesThree: {
        marginHorizontal: 35,
        marginTop: 35,
        height: 25,
        width: 25
    },
    ImagesStyleTwo: {
        marginTop: 20,
        height: 50,
        width: 50
    },
    TextStyle: {
        alignSelf: 'center',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: color.B_00
    },
    flex: {
        flexDirection: 'row'
    },
    flexTwo: {
        flexDirection: 'row',
        marginHorizontal: 30
    },
    TextTwo: {
        marginTop: 35,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000
    },
    Modal: {
        height: 120,
        width: '90%',
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 5
    },
    ModalText: {
        marginHorizontal: 30,
        fontSize: 18,
        marginTop: 10
    },
    TextThree: {
        marginTop: 25,
        marginLeft: 200,
        color: color.teal_800,
        fontSize: 16,
        fontWeight: '500'
    },
    Textfive: {
        marginTop: 25,
        marginLeft: 120,
        color: color.teal_800,
        fontSize: 16,
        fontWeight: '500'
    },
    ModalTwo: {
        width: '90%',
        height: 250,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 5
    },
    ModalTextTwo: {
        marginHorizontal: 30,
        fontSize: 18,
        fontWeight: '500',
        marginTop: 20,
        color: color.B_000
    },
    Textfour: {
        marginTop: 30,
        marginHorizontal: 30

    },
    ModalThree: {
        width: '90%',
        height: 180,
        backgroundColor: color.gray_50,
        borderRadius: 5,
        alignSelf: 'center',
    }



})