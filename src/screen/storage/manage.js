import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import color from '../../utils/color'
const Manage = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} >
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/colorLeft.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Manage storage</Text>
            </View>
            <ScrollView>
                <View style={styles.flex}>
                    <View>
                        <Text style={styles.TextTwo}>605<Text style={styles.TextThree}>  kB</Text></Text>
                        <Text style={styles.TextFour}>Used</Text>
                    </View>
                    <View>
                        <Text style={styles.Textfive}>8.6<Text style={styles.TextThree}>  GB</Text></Text>
                        <Text style={styles.TextSix}>Free</Text>
                    </View>

                </View>
                <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/22.jpg')} />
                <View style={styles.flex}>
                    <Text style={styles.Eight}>WhatsApp Media</Text>
                    <View style={styles.flex}>
                        <Text style={styles.Eight}>Apps and other items</Text>
                    </View>
                </View>
                <View style={styles.width}></View>
                <View style={styles.flexTwo}>
                    <Text style={styles.TextSeven}>Chats</Text>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/search.png')} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={styles.flexThree}>
                        <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/Anshu.jpg')} />
                        <Text style={styles.TextNine}>Jija Arra </Text>
                        <Text style={styles.TextTen}>317 KB</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.eleven}>4 chats not displayed because they`re taking up a small amount of storage</Text>
            </ScrollView>
        </View>
    )
}

export default Manage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.B_00
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
    ImagesTwo: {
        marginTop: 30,
        height: 24,
        width: 24
    },
    ImagesThree: {
        marginTop: 10,
        height: 24,
        width: 24
    },
    TextStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 30,
        color: color.B_00
    },
    TextTwo: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 30,
        color: color.teal_800
    },
    Textfive: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 30,

    },
    TextThree: {
        fontSize: 18,
        fontWeight: '500'
    },
    TextFour: {
        marginHorizontal: 30,
        fontWeight: '500'
    },
    TextSix: {
        marginHorizontal: 60,
        fontWeight: '500'
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flexThree: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop:10
    },
    flexTwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    ImagesStyle: {
        height: 30,
        width: '95%',
        marginHorizontal: 15,
        marginTop: 10
    },
    Eight: {
        fontSize: 16,
        color: color.B_000,
        marginHorizontal: 30,
        fontWeight: '500'
    },
    width: {
        width: '100%',
        marginTop: 20,
        backgroundColor: color.B_000,
        height: 0.5
    },
    TextSeven: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: '500'
    },
    ImagesThree: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    TextNine: {
        marginHorizontal: 16,
        marginTop: 10,
        fontSize: 18,
        fontWeight: '500',
        color: color.B_000
    },
    TextTen: {
        marginHorizontal: 120,
        marginTop: 10,
        fontSize: 15,
        fontWeight: '500',
    },
    eleven:{
        marginTop:30,
        marginHorizontal:30,
        fontSize:16,
        fontWeight:'500'
    }
})