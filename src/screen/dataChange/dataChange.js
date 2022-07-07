import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
const DataChange = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modaloneVisible, setModalOneVisible] = useState(false);
    const [data, setData] = useState(false);

    const [dataone, setDataOne] = useState(false);
    const [datatwo, setDataTwo] = useState(false);
    const [datathree, setDataThree] = useState(false);
    const one = () => {
        setDataOne(true);
        setDataTwo(false);
        setDataThree(false);

    }
    const two = () => {
        setDataOne(false)
        setDataTwo(true);
        setDataThree(false);

    }

    const three = () => {
        setDataOne(false)
        setDataTwo(false);
        setDataThree(true);

    }
    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <TouchableOpacity>
                    <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/Rite.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/ankush.jpg')} />
                </TouchableOpacity>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
                    <Text style={styles.Text}>Atul Singh</Text>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/i.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1 }}>
                    <View style={styles.Modal}>
                        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/ankush.jpg')} />
                    </View>
                </Pressable>
            </Modal>
            <ScrollView>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/ankush.jpg')} />
                </TouchableOpacity>
                <Text style={styles.TextThree}>Atul Singh</Text>
                <Text style={styles.TextTwo}>+91 9172808510</Text>
                <View style={styles.View}>
                    <Text style={{ alignSelf: 'center', fontWeight: '500', marginTop: 2 }}>Last seen today at 6:25 am</Text>
                </View>
                <View style={styles.flexTwo}>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/chating.png')} />
                        <Text style={styles.Textcolor}>message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/colling.png')} />
                        <Text style={styles.Textcolor}>Audio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/videocalling.png')} />
                        <Text style={styles.Textcolor}>Video</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/info.png')} />
                        <Text style={styles.Textcolor}>Pay</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Viewcolor} />
                <View style={styles.ViewTwo}>
                    <Text style={styles.TextFour}>At the gym</Text>
                    <Text style={{ marginHorizontal: 16 }}>16 january</Text>
                </View>
                <View style={styles.Viewcolor} />
                <View style={styles.ViewFive}>
                    <View style={styles.flexThree}>
                        <Text style={styles.TextSix}>Media, links, and docs</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={styles.TextSeven}>4</Text>
                            <Image resizeMode={'cover'} style={styles.ImageFour} source={require('../../assets/images/right.png')} />
                        </View>
                    </View>
                    <Image resizeMode={'cover'} style={styles.ImagesFour} source={require('../../assets/images/ankush.jpg')} />
                </View>

                <View style={styles.ViewSix}>
                    <View style={styles.flexFive}>
                        <Image resizeMode={'cover'} style={styles.ImagesStylesTwo} source={require('../../assets/images/nonifications.png')} />
                        <View style={styles.flexTwo}>
                            <View style={styles.flexFour}>
                                <Text style={styles.TextEight}>Mute notifications</Text>
                            </View>
                            <Switch
                                value={data}
                                onValueChange={() => setData(!data)}
                            />

                        </View>
                    </View>
                    <View style={styles.flexFour}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/songtwo.png')} />
                        <Text style={styles.TextNine}>Custom notifications</Text>
                    </View>
                    <TouchableOpacity onPress={() => setModalOneVisible(true)} style={styles.flexFour}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/potoing.png')} />
                        <Text style={styles.TextNine} >Media visibility</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ViewSeven}>
                    <View style={styles.flexFour}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/lock.png')} />
                        <Text style={styles.TextNine} >Encryption</Text>
                    </View>
                    <Text style={styles.TextTen}>messages and calls are end-to-end encrypted. Top to verify.</Text>
                    <TouchableOpacity>
                        <View style={styles.flexFour}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/potoing.png')} />
                            <Text style={styles.TextNine} >Disappearing messages</Text>
                        </View>
                        <Text style={styles.TextTen}>off</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ViewEight}>
                    <Text style={{ marginHorizontal: 16, marginTop: 10, fontSize: 16, fontWeight: '500' }}> 1 Group in common</Text>
                    <View style={styles.flexFour}>
                        <View style={styles.flexSix}>
                            <Image resizeMode={'cover'} style={styles.ImagesFive} source={require('../../assets/images/songtwo.png')} />
                        </View>
                        <Text style={styles.TextNine}>create group with Atul</Text>
                    </View>
                    <View style={styles.flexFour}>
                        <Image resizeMode={'cover'} style={styles.ImagesStylesThree} source={require('../../assets/images/ankush.jpg')} />
                        <Text style={styles.TextNine} >Bhai - Bhai = Tabhahi</Text>
                    </View>
                    <Text style={styles.TextTen}>Atul,Bablu,you</Text>

                </View>
                <View style={styles.ViewThree}>
                    <View style={styles.flexFour}>
                        <Image resizeMode={'cover'} style={styles.ImagesStylesFour} source={require('../../assets/images/ankush.jpg')} />
                        <Text style={styles.TextOne} >Block Atul Singh</Text>
                    </View>
                    <View style={styles.flexFour}>
                        <Image resizeMode={'cover'} style={styles.ImagesStylesFour} source={require('../../assets/images/ankush.jpg')} />
                        <Text style={styles.TextOne} >Report Atul Singh</Text>
                    </View>
                </View>
            </ScrollView>

            <Modal
                animationType="none"
                transparent={true}
                visible={modaloneVisible}
                onRequestClose={() => {
                    setModalOneVisible(!modaloneVisible);
                }}
            >
                <Pressable onPress={() => { setModalOneVisible(!modaloneVisible) }} style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={styles.ModalTwo}>
                        <Text style={styles.TextModal}>Show newly downloaded media from this chat in your phone`s gallery?</Text>
                        <View style={styles.flexSeven}>
                            <CircleCheckBox
                                checked={dataone}
                                onToggle={() => one()}
                                labelPosition={LABEL_POSITION.RIGHT}
                                outerColor='#00695C'
                                innerColor='#00695C'
                                filterSize='20'
                                innerSize='12'
                            />
                            <Text style={styles.ModalThree}>default (Yes)</Text>
                        </View>
                        <View style={styles.flexSeven}>
                            <CircleCheckBox
                                checked={datatwo}
                                onToggle={() => two()}
                                labelPosition={LABEL_POSITION.RIGHT}
                                outerColor='#00695C'
                                innerColor='#00695C'
                                filterSize='20'
                                innerSize='12'
                            />
                            <Text style={styles.ModalThree}>Yes</Text>
                        </View>
                        <View style={styles.flexSeven}>
                            <CircleCheckBox
                                checked={datathree}
                                onToggle={() => three()}
                                labelPosition={LABEL_POSITION.RIGHT}
                                outerColor='#00695C'
                                innerColor='#00695C'
                                filterSize='20'
                                innerSize='12'
                            />
                            <Text style={styles.ModalThree}>No</Text>
                        </View>
                        <Text onPress={() => setModalOneVisible(!modaloneVisible)} style={styles.TextEle}>CANCEL<Text onPress={() => setModalOneVisible(!modaloneVisible)}>        OK</Text></Text>
                    </View >
                </Pressable>
            </Modal>
        </View >
    )
}

export default DataChange

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
    },
    flex: {
        flexDirection: 'row',
        backgroundColor: color.teal_800,
        height: 100,
        width: '100%',

    },
    ImagesStyles: {
        height: 30,
        width: 30,
        marginTop: 30,
        marginHorizontal: 16
    },
    ImagesStylesThree: {
        height: 40,
        width: 40,
        marginTop: 25,
        marginHorizontal: 16,
        borderRadius: 35
    },
    ImagesStylesFour: {
        height: 20,
        width: 20,
        marginTop: 32,
        marginHorizontal: 16,
        borderRadius: 35
    },
    ImagesStylesTwo: {
        height: 30,
        width: 30,
        marginHorizontal: 16
    },
    Images: {
        width: 50,
        height: 50,
        marginTop: 20,
        borderRadius: 50,
    },
    Text: {
        alignSelf: 'center',
        fontSize: 20,
        color: color.B_00,
        marginHorizontal: 16
    },
    Modal: {
        width: '100%',
        height: '100%',
        backgroundColor: color.B_000,
        alignSelf: 'center',
        justifyContent: 'center'

    },
    ImagesTwo: {
        width: '100%',
        height: '60%',
    },
    TextTwo: {
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'center',

    },
    ImagesThree: {
        alignSelf: 'center',
        width: 120,
        height: 120,
        borderRadius: 80,
        marginTop: 30
    },
    ImagesFour: {
        width: 100,
        height: 100,
        marginHorizontal: 16,
        marginTop: 10,
        borderRadius: 10
    },
    View: {
        width: '50%',
        height: 25,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    TextThree: {
        fontSize: 20,
        fontWeight: '500',
        color: color.B_000,
        alignSelf: 'center',
        marginTop: 20
    },
    flexTwo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1
    },
    flexFive: {
        flexDirection: 'row',
        marginTop: 20
    },
    flexThree: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    Textcolor: {
        color: color.teal_800,
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: 5
    },
    Viewcolor: {
        width: '100%',
        height: 0.5,
        backgroundColor: color.B_000,
        marginTop: 10
    },
    ViewTwo: {
        width: '100%',
        height: 60,
        backgroundColor: color.B_00,
        marginTop: 10
    },
    TextFour: {
        fontSize: 16,
        marginHorizontal: 16,
        fontWeight: '500',
        color: color.B_000,
        marginTop: 10
    },
    ViewFive: {
        width: '100%',
        height: 150,
        backgroundColor: color.B_00,
    },
    Image: {
        height: 25,
        width: 25
    },
    TextSix: {
        fontSize: 16,
        fontWeight: '500',
    },
    TextSeven: {
        fontSize: 16,
        fontWeight: '500',
    },
    ImageFour: {
        height: 15,
        width: 15,
        marginTop: 3
    },
    ViewSix: {
        width: '100%',
        height: 180,
        backgroundColor: color.B_00,
        marginTop: 10
    },
    ViewEight: {
        width: '100%',
        height: 200,
        backgroundColor: color.B_00,
        marginTop: 10
    },
    flexFour: {
        flexDirection: 'row'
    },
    flexSix: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: color.teal_800,
        marginHorizontal: 16,
        marginTop: 20
    },
    TextEight: {
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000,
    },
    TextNine: {
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000,
        marginTop: 30
    },
    TextOne: {
        fontSize: 16,
        fontWeight: '500',
        color: 'red',
        marginTop: 30
    },
    ViewSeven: {
        width: '100%',
        height: 200,
        backgroundColor: color.B_00,
        marginTop: 10
    },
    TextTen: {
        marginHorizontal: 60,
        fontSize: 16,
        fontWeight: '500'
    },
    ImagesFive: {
        alignSelf: 'center',
        marginTop: 10
    },
    ViewThree: {
        width: '100%',
        height: 140,
        backgroundColor: color.B_00,
        marginTop: 10
    },
    ModalTwo: {
        width: '90%',
        height: '50%',
        alignSelf: 'center',
        borderRadius: 5,
        backgroundColor: color.gray_50
    },
    TextModal: {
        marginHorizontal: 30,
        fontSize: 20,
        fontWeight: '500',
        color: color.B_000,
        marginTop: 20
    },
    flexSeven: {
        marginTop: 20,
        marginHorizontal: 30,
        flexDirection: 'row'
    },
    ModalThree: {
        marginHorizontal: 30,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000
    },
    TextEle: {
        alignSelf: 'flex-end',
        marginRight: 50,
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
        color: color.teal_800
    }
})