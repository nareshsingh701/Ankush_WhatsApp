import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Switch, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'
import { DefaultTheme } from '@react-navigation/native'

const Fingerprint = (props) => {
    const [data, setData] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Fingerprint lock</Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View style={styles.View}>
                    <Text style={styles.TextTwo}>Unlock with fingerprint</Text>
                    <Switch
                        value={data}
                        onValueChange={() => setData(!data)}
                    />
                </View>

                <Text style={styles.TextThree}>When enabled,you`ll need to use fingerprint to open whatsapp. You can
                    still answer calls if whatsapp is locked.
                </Text>


            </TouchableOpacity>
            <View style={styles.Viewborder} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <Pressable style={{ flex: 1, justifyContent: 'flex-end' }} onPress={() => setModalVisible(!modalVisible)} >
                    <View style={styles.Modal}>
                        <Text style={styles.ModalText}>Confirm fingerprint</Text>
                        <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/finger.png')} />
                        <Text style={styles.ModalTextTwo}>Touch the fingerprint sensor</Text>
                        <Text  onPress={() => setModalVisible(!modalVisible)} style={styles.ModalTextThree}>CANCEL</Text>
                    </View>

                </Pressable>
            </Modal>

        </View>
    )
}

export default Fingerprint

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
        marginLeft: 30,
        marginTop: 35,
        height: 30,
        width: 30
    },
    Images: {
        marginHorizontal: 16,
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
    View: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16
    },
    TextTwo: {
        marginHorizontal: 16,
        fontSize: 18,
        fontWeight: '500',
        marginTop: 30,
        color: color.B_000
    },
    TextThree: {
        marginHorizontal: 30,
        fontSize: 16,
        fontWeight: '400',
    },
    Viewborder: {
        borderWidth: 0.4,
        marginTop: 10
    },
    Modal: {
        width: '100%',
        height: '45%',
        backgroundColor: color.gray_50,
        borderRadius: 10,
    },
    ModalText: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: '500',
        color: color.B_000
    },
    Images:{
        width:60,
        height:60,
        alignSelf:'center',
        marginTop:30
    },
    ModalTextTwo:{
        alignSelf:'center',
        fontSize:16,
        fontWeight:'500',
        marginTop:20
    },
    ModalTextThree:{
        marginHorizontal:30,
        marginTop:30,
        fontSize:18,
        fontWeight:'500',
        color:color.teal_800
    }

})