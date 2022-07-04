import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import color from '../../src/utils/color';
import { DefaultTheme } from '@react-navigation/native'

const Changenumber = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Account')}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Change number</Text>
            </View>
            <ScrollView>
                <Text style={styles.TextTwoStyle}>Enter your old phone number with country code:</Text>
                <View style={styles.flex}>
                    <Text style={styles.plus}>+</Text>
                    <TextInput
                        style={styles.TextInput}
                    />
                    <TextInput
                        style={styles.TextInputStyle}
                        placeholder='phone number'
                    />

                </View>
                <View style={styles.flex}>
                    <View style={styles.ViewLine}>
                    </View>
                    <View style={styles.ViewTwo}>
                    </View>
                </View>
                <Text style={styles.TextTwoStyle}>Enter your new phone number with country code:</Text>
                <View style={styles.flex}>
                    <Text style={styles.plus}>+</Text>
                    <TextInput
                        style={styles.TextInput}
                    />
                    <TextInput
                        style={styles.TextInputStyle}
                        placeholder='phone number'
                    />

                </View>
                <View style={styles.flex}>
                    <View style={styles.ViewLine}>
                    </View>
                    <View style={styles.ViewTwo}>
                    </View>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.TouchableOpacity}>
                    <Text style={styles.center}>NEXT</Text>
                </TouchableOpacity>
            </ScrollView>
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
                    <Text style={styles.ModalStyle}>Please enter your phone number.</Text>
                    <Text  onPress={() => setModalVisible(!modalVisible)} style={styles.ModalTwo}>OK</Text>
                </View>
                </View>

            </Modal>
        </View>
    )
}

export default Changenumber

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
    TextTwoStyle: {
        marginTop: 30,
        marginHorizontal: 30,
        fontSize: 17,
        fontWeight: '500',
        color: color.B_000
    },
    TextInput: {
        marginLeft: 20,
        marginTop: 5
    },
    plus: {
        marginLeft: 30,
        fontSize: 18,
        marginTop: 15
    },
    flex: {
        flexDirection: 'row',
    },
    ViewLine: {
        height: 1,
        width: 70,
        backgroundColor: color.teal_800,
        marginHorizontal: 30
    },
    TextInputStyle: {
        marginLeft: 40,
        marginTop: 5,
        fontSize: 18
    },
    ViewTwo: {
        height: 1,
        width: 220,
        backgroundColor: color.teal_800,
    },
    TouchableOpacity: {
        marginBottom: 30,
        height: 40,
        width: 100,
        backgroundColor: color.teal_800,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 300
    },
    center: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_00
    },
    Modal: {
        height: 100,
        width: 350,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius:5
    },
    ModalStyle:{
        marginHorizontal:30,
        fontSize:17,
        fontWeight:'500',
        marginTop:20
    },
    ModalTwo:{
        marginHorizontal:30,
        marginLeft:280,
        marginTop:20,
        fontSize:18,
        fontWeight:'900',
        color:color.teal_800
    }
})