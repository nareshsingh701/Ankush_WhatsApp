import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, ScrollView,Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../utils/color';
import Tooltip from 'react-native-walkthrough-tooltip';

const LogIn = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [showTip, setTip] = useState(true);
    const [text, changeText] = useState('');
    let isButton = text.length <= 9;
    const onPressNEXT = () => {
        const combin = text;
        props.navigation.navigate('loderFile')
    }
    const onchange = (value) => {
        changeText(value)
    }
    return (

        <ScrollView styles={{ flex: 1 }} contentContainerStyle={styles.cantainer}>
            <View style={styles.ViewSix}>
                <Text style={styles.TextSix}>Enter Your phone number</Text>

                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Pressable onPress={()=> setModalVisible(!modalVisible)} style={{flex:1}}>
                    <View style={styles.ViewStyle}>

                        <TouchableOpacity onPress={() => props.navigation.navigate('loder')} >

                            <Text style={styles.TextEight}>Help</Text>
                        </TouchableOpacity>
                    </View>
                    </Pressable>
                </Modal>

                <TouchableOpacity onPress={() => setModalVisible(true)} >
                    <Image resizeMode={'cover'} style={styles.imageTwo} source={require('../../assets/images/dottwo.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.ViewFive}>
                <Text style={styles.Text}>WhatsApp will need to verify your Phone number. What's my number?</Text>
                <View style={styles.ViewOne} >

                    <TouchableOpacity onPress={() => props.navigation.navigate('data')}>
                        <Image resizeMode={'cover'} style={styles.imageOne} source={require('../../assets/images/down.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.View}>
            </View>
            <View>
                <View style={styles.ViewThree}>
                    <TextInput
                        style={styles.TextInputOne}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Phone number'
                        onChangeText={onchange}
                    />
                </View>
                <View style={styles.ViewTwo}>
                </View>
                <View style={styles.ViewFour}>
                </View>
            </View>
            <View style={styles.ViewSeven}>
                <Text style={styles.TextFive}>Carrier Charges may apply</Text>
            </View>
            <TouchableOpacity
                disabled={isButton}
                onPress={() => onPressNEXT()}
                style={styles.textView}>
                <Text style={styles.TextSeven}>NEXT</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default LogIn

const styles = StyleSheet.create({
    cantainer: {
        flex: 1,
        paddingBottom: 20,
        paddingHorizontal: 16

    },
    TextInput: {
        borderRadius: 10,
        padding: 10,
        margin: 10,
        fontSize: 15
    },
    Text: {
        fontSize: 15,
        color: '#000'
    },
    TextOne: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5,
        color: color.A_700
    },
    TextTwo: {
        fontSize: 18,
        textAlign: 'center',

        color: '#000',
    },
    View: {
        width: 300,
        borderBottomWidth: 1,
        marginTop: 5,
        borderBottomColor: color.teal_800,
        alignSelf: 'center'

    },
    ViewOne: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20
    },
    imageTwo: {
        marginLeft: 50,
        width: 30,
        height: 30,
        marginTop: 20
    },
    imageOne: {
        marginLeft: 100,
        width: 20,
        height: 20
    },
    ViewTwo: {
        width: 80,
        borderBottomWidth: 1,
        borderColor: color.teal_800,
        flexDirection: 'row',
        marginLeft: 20
    },
    ViewThree: {
        flexDirection: 'row',
        marginLeft: 50
    },
    TextThree: {
        fontSize: 20,
        color: '#000',
        marginTop: 20
    },
    ViewFour: {
        width: 200,
        borderBottomWidth: 1,
        borderColor: 'green',
        marginLeft: 120
    },
    ViewFive: {
        alignSelf: 'center',
        marginTop: 30
    },
    TextInputOne: {
        marginLeft: 10
    },
    TextFive: {
        marginTop: 20,

        fontSize: 17
    },
    TextSix: {
        marginLeft: 30,
        color: color.teal_800,
        fontSize: 20,
        marginTop: 20
    },
    ViewSix: {
        flexDirection: 'row'
    },
    textView: {
        height: 50,
        width: 100,
        backgroundColor: color.teal_800,
       alignSelf:'center',
        marginTop: 200,
        borderRadius: 10
    },
    TextSeven: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },
    ViewStyle: {
        marginTop: 70,
        borderRadius: 5,
        marginLeft: 200,
        height: 50,
        width: 150,
        backgroundColor: color.gray_50
    },
    TextEight: {

        textAlign: 'center',
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: color.B_000
    },
    ViewSeven:{
        alignSelf:'center'
    }

})