import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking, } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'
import { DefaultTheme } from '@react-navigation/native'
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
const DefaultMessageTime = (props) => {
    const [dataone, setDataOne] = useState(false);
    const [datatwo, setDataTwo] = useState(false);
    const [datathree, setDataThree] = useState(false);
    const [datafour, setDataFour] = useState(false);
    const one = () => {
        setDataOne(true);
        setDataTwo(false);
        setDataThree(false);
        setDataFour(false);
    }
    const two = () => {
        setDataOne(false)
        setDataTwo(true);
        setDataThree(false);
        setDataFour(false);
    }

    const three = () => {
        setDataOne(false)
        setDataTwo(false);
        setDataThree(true);
        setDataFour(false);
    }
    const Four = () => {
        setDataOne(false)
        setDataTwo(false);
        setDataThree(false);
        setDataFour(true);
    }
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Default message </Text>
            </View>
            <ScrollView>
                <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/photo.jpg')} />
                <Text style={styles.TextTwoStyle}>Start new chats with disappearing message</Text>
                <Text style={{ marginHorizontal: 30, marginTop: 5 }}>For more privacy and storage, all new messages will disappear from this chat for everyone after the selected duration. Anyone in the chat can change this setting.<Text style={{ color: color.Blue_50 }}>Learn more</Text></Text>
                <View style={styles.View} />
                <Text style={styles.TextSS}>Message timer</Text>
                <View style={styles.flex}>
                    <CircleCheckBox
                        checked={dataone}
                        onToggle={() => one()}
                        labelPosition={LABEL_POSITION.RIGHT}
                        outerColor='#00695C'
                        innerColor='#00695C'
                        filterSize='20'
                        innerSize='12'
                    />
                    <Text style={styles.TextStyleTwo}>24 hours</Text>
                </View>
                <View style={styles.flex}>
                    <CircleCheckBox
                        checked={datatwo}
                        onToggle={() => two()}
                        labelPosition={LABEL_POSITION.RIGHT}
                        outerColor='#00695C'
                        innerColor='#00695C'
                        filterSize='20'
                        innerSize='12'
                    />
                    <Text style={styles.TextStyleTwo}>7 days</Text>
                </View>
                <View style={styles.flex}>
                    <CircleCheckBox
                        checked={datathree}
                        onToggle={() => three()}
                        labelPosition={LABEL_POSITION.RIGHT}
                        outerColor='#00695C'
                        innerColor='#00695C'
                        filterSize='20'
                        innerSize='12'
                    />
                    <Text style={styles.TextStyleTwo}>90 days</Text>
                </View>
                <View style={styles.flex}>
                    <CircleCheckBox
                        checked={datafour}
                        onToggle={() => Four()}
                        labelPosition={LABEL_POSITION.RIGHT}
                        outerColor='#00695C'
                        innerColor='#00695C'
                        filterSize='20'
                        innerSize='12'
                    />
                    <Text style={styles.TextStyleTwo}>Off</Text>
                </View>
                <View style={styles.View} />
                <TouchableOpacity onPress={()=>props.navigation.navigate('Defaultmessage')} style={styles.flex} >
                    <View >
                        <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/LeftTwo.png')} />
                    </View>
                    <View>
                        <Text style={styles.TextTT}>Try a default message timer</Text>
                        <Text style={{ marginHorizontal: 30,marginTop:5,marginBottom:50 }}>Start your new chats with disappearing message</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default DefaultMessageTime;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.B_00,
        paddingBottom: 20
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
    ImagesThree: {
    marginTop:15,
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
        marginHorizontal: 30,
        marginTop: 30,
        fontSize: 16,
        fontWeight: '500'
    },
    flex: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 30
    },
    TextStyleTwo: {
        fontSize: 17,
        marginHorizontal: 30,
        fontWeight: '500',
        color: color.B_000
    },
    Images: {
        height: 25,
        width: 25,
        marginLeft: 50,
        marginTop: 20
    },
    TextThree: {
        marginHorizontal: 16,
        fontSize: 16,
        marginTop: 30
    },
    ImagesTwo: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 20,

    },
    Textfore: {
        color: color.Blue_50,
    },
    View: {
        width: '100%',
        height: 0.5,
        backgroundColor: color.B_000,
        marginTop: 10
    },
    TextSS: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 18,
        fontWeight: '500',
        color: color.B_000
    },
    TextTT: {
        marginHorizontal: 30,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000
    }

})