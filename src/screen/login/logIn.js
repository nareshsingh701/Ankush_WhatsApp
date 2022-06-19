import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../utils/color';
import Tooltip from 'react-native-walkthrough-tooltip';

const LogIn = (props) => {
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

        <View style={styles.cantainer}>

            <View style={styles.ViewSix}>
                <Text style={styles.TextSix}>Enter Your phone number</Text>
                {/* <Modal visible={useState.showTip} /> */}
                <View style={styles.ViewStyle}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('loder')}>
                        <Text style={styles.TextEight}>Help</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => useState({ show: true })} >
                    <Image resizeMode={'cover'} style={styles.imageTwo} source={require('../../assets/images/dottwo.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.ViewFive}>
                <Text style={styles.Text}>WhatsApp will need to verify your Phone number.</Text>
                <Text style={styles.TextOne}>What's my number?</Text>
                <View style={styles.ViewOne} >
                    <TouchableOpacity onPress={() => props.navigation.navigate('data')}>

                    </TouchableOpacity>

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
            <View>
                <Text style={styles.TextFive}>Carrier Charges may apply</Text>
            </View>
            <TouchableOpacity
                  disabled={isButton}
                  onPress={()=> onPressNEXT()}
                style={styles.textView}>
                <Text style={styles.TextSeven}>NEXT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogIn

const styles = StyleSheet.create({
    cantainer: {
        flex: 1,

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
        marginLeft: 40

    },
    ViewOne: {
        flexDirection: 'row',
        marginLeft: 140,
        marginTop: 20
    },
    imageTwo: {
        marginLeft: 60,
        width: 30,
        height: 30,
        marginTop: 10
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
        marginLeft: 40
    },
    ViewThree: {
        flexDirection: 'row',
        marginLeft: 70
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
        marginLeft: 140
    },
    ViewFive: {
        alignItems: 'center',
        marginTop: 30
    },
    TextInputOne: {
        marginLeft: 10
    },
    TextFive: {
        marginTop: 20,
        marginLeft: 100,
        fontSize: 17
    },
    TextSix: {
        marginLeft: 60,
        color: color.teal_800,
        fontSize: 20,
        marginTop: 10
    },
    ViewSix: {
        flexDirection: 'row'
    },
    textView: {
        height: 50,
        width: 100,
        backgroundColor: color.teal_800,
        marginLeft: 150,
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
        marginTop: 10,
        borderRadius: 5,
        height: 50,
        width: 100,
        backgroundColor: '#ffffffff'
    },
    TextEight: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: color.B_000
    },

})