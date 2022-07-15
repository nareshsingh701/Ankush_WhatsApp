import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Pressable, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'
const Callinfo = (props) => {
    const { route } = props;
    const { params } = route;
    const { item } = params;

    const [modalVisible, setModalVisible] = useState(false);
    const [modaloneVisible, setModalOneVisible] = useState(false);
    const [uri, setURI] = useState({})
    const [dataOne, setDataOne] = useState({})
    const [datatwo, setDataTwo] = useState("")
    console.log("route", props.route.params.item);
    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/colorLeft.png')} />
                    </TouchableOpacity>
                    <Text style={styles.Text}>Call info</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/chat5.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/home.png')} />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>

                    <Image resizeMode={'cover'} style={styles.ImageTwo} source={item.imagesone} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.TextTwo}>{item.name}</Text>
                        <Text numberOfLines={1} style={styles.TextThree}>{item.user}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/call2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/videocall2.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.ViewTwo} />
            <Text style={{ marginHorizontal: 80, marginTop: 10 }}>13 july</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image resizeMode={'cover'} style={styles.ImagesStylesTwo} source={require('../../assets/images/right2.png')} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16 }}>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.TextTwo}>Outgoing</Text>
                        <Text numberOfLines={1} style={styles.TextThree}>4:07 pm</Text>
                    </View>

                    <Text style={{ marginTop: 25, fontSize: 16, fontWeight: '500', marginHorizontal: 30 }}>Unavailable</Text>
                </View>
            </View>
            <Modal

                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    setURI({})
                }}
            >
                <Pressable onPress={() => {
                    setURI({})
                    setModalVisible(!modalVisible)
                }}
                    style={{ flex: 1 }}>
                    <View style={styles.Modal}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(!modalVisible)
                            setModalOneVisible(true)
                        }}>
                            <ImageBackground style={styles.ImagesTwo} resizeMode={'cover'} source={item.imagesone} >
                                <Text style={styles.TextFive}>{item.name}</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <View style={styles.flexTwo}>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(!modalVisible)
                                props.navigation.navigate('Chating', {
                                    item
                                })
                            }}>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesThree} source={require('../../assets/images/chating.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesThree} source={require('../../assets/images/colling.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesThree} source={require('../../assets/images/videocalling.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(!modalVisible)
                                props.navigation.navigate('DataChange', {
                                    item
                                })
                            }}>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesThree} source={require('../../assets/images/info.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </Pressable>
            </Modal>
            <Modal
                transparent={true}
                visible={modaloneVisible}
                onRequestClose={() => {
                    setModalOneVisible(!modaloneVisible);
                    setDataOne("")
                    setDataTwo("")
                }}
            >
                <Pressable onPress={() => {
                    setDataTwo("")
                    setModalOneVisible(!modaloneVisible)
                }}
                    style={{ flex: 1 }}>
                    <View style={styles.ModalTwo}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => setModalOneVisible(!modaloneVisible)}>
                                <Image resizeMode={'cover'} style={styles.ImagesFour} source={require('../../assets/images/colorLeft.png')} />
                            </TouchableOpacity>
                            <Text style={styles.TextFour}>{item.name}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Image style={styles.ImagesThree} resizeMode={'cover'} source={item.imagesone} />
                        </View>
                    </View>
                </Pressable>
            </Modal >
        </View>
    )
}

export default Callinfo

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ImagesStyles: {
        height: 30,
        width: 30,
        marginTop: 35,
        marginHorizontal: 16
    },
    ImagesStylesThree: {
        height: 30,
        width: 30,
        marginTop: 10,
        marginHorizontal: 16
    },
    ImagesStylesTwo: {
        height: 24,
        width: 24,
        marginTop: 35,
        marginHorizontal: 30
    },
    flex: {
        flexDirection: 'row',
        backgroundColor: color.teal_800,
        height: 100,
        width: '100%',
        justifyContent: 'space-between'
    },
    Images: {
        width: 50,
        height: 50,
        marginTop: 20,
        borderRadius: 50,
    },
    ImagesFour: {
        width: 30,
        height: 30,
        marginTop: 20,
        marginHorizontal: 30
    },
    Text: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: color.B_00
    },
    ImageTwo: {
        width: 50,
        height: 50,
        marginTop: 20,
        marginHorizontal: 16,
        borderRadius: 50
    },
    TextTwo: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: '500',
        color: color.B_000
    },
    TextFour: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: '500',
        color: color.B_00
    },
    TextThree: {
        fontSize: 16,
        fontWeight: '500'
    },

    Video: {
    },
    ViewStyle: {
        position: 'absolute',
        height: 50,
        width: 50,
        backgroundColor: color.teal_800,
        borderRadius: 50,
        right: 10,
        bottom: 10,
        elevation: 2
    },
    Modal: {
        width: '80%',
        height: '60%',
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        marginTop: 100
    },
    ImagesTwo: {
        height: 350,
        width: '100%'
    },
    ImagesThree: {
        height: '60%',
        width: '100%',
    },
    flexTwo: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    ModalTwo: {
        width: '100%',
        height: '100%',
        backgroundColor: color.B_000
    },
    TextFive: {
        color: color.B_00,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '500',
        marginHorizontal: 30
    }
})