import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking, } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'
import { DefaultTheme } from '@react-navigation/native'
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
const Defaultmessage = (props) => {
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
                <Text style={styles.TextStyle}>Default message timer</Text>
            </View>
            <ScrollView>
                <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/photo.jpg')} />
                <Text style={styles.TextTwoStyle}>Start new chats with disappearing message</Text>
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
                <Text style={styles.TextThree}>When enabled, all new individual chats will start with disappearing messages set to the selected duration. This setting will not affect your existing chats.<Text onPress={() => Linking.openURL('https://faq.whatsapp.com/general/chats/about-disappearing-messages?lg=en&lc=GB&eea=0')} style={styles.Textfore}> Learn more</Text></Text>
            </ScrollView>
        </View>
    )
}

export default Defaultmessage

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
    TextStyle: {
        alignSelf: 'center',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: color.B_00
    },
    TextTwoStyle: {
        marginHorizontal: 16,
        marginTop: 30,
        fontSize: 18,
        fontWeight: '600'
    },
    flex: {
        flexDirection: 'row',
        marginTop:20,
        marginHorizontal:30
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

    }

})