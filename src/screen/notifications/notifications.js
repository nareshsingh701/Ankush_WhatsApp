import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal, Linking, Switch, Pressable } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
const Notifications = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);
    const [modalThreeVisible, setModalThreeVisible] = useState(false);

    const [data, setData] = useState(false);
    const [dataone, setDataOne] = useState(false);
    const [datatwo, setDataTwo] = useState(false);
    const [datathree, setDataThree] = useState(false);
    const [datafore, setDataFore] = useState(false);

    const [datafive, setDataFive] = useState(false)
    const [datasix, setDataSix] = useState(false)
    const [dataseven, setDataSeven] = useState(false)
    const [dataeight, setDataEight] = useState(false)

    const [datao, setDataO] = useState(false);
    const [datat, setDataT] = useState(false);
    const [datath, setDataTh] = useState(false);
    const [dataf, setDataF] = useState(false);
    const [datafi, setDataFi] = useState(false)
    const [datas, setDataS] = useState(false)
    const [datase, setDataSe] = useState(false)
    const [datasend, setDataSend] = useState(false)
    const one = () => {
        setDataFive(true);
        setDataSix(false);
        setDataSeven(false);
        setDataEight(false);
        
    }
    const two = () => {
        setDataFive(false)
        setDataSix(true);
        setDataSeven(false);
        setDataEight(false);
    }

    const three = () => {
        setDataFive(false)
        setDataSix(false);
        setDataSeven(true);
        setDataEight(false);
    }
    const four = () => {
        setDataFive(false)
        setDataSix(false);
        setDataSeven(false);
        setDataEight(true);
    }
    const five = () => {
        setDataO(true);
        setDataT(false);
        setDataTh(false);
        setDataF(false);
        setDataFi(false);
        setDataS(false);
        setDataSe(false);
        setDataSend(false);
    }
    const six = () => {
        setDataO(false);
        setDataT(true);
        setDataTh(false);
        setDataF(false);
        setDataFi(false);
        setDataS(false);
        setDataSe(false);
        setDataSend(false);
    }

    const seven = () => {
        setDataO(false);
        setDataT(false);
        setDataTh(true);
        setDataF(false);
        setDataFi(false);
        setDataS(false);
        setDataSe(false);
        setDataSend(false);
    }
    const eight = () => {
        setDataO(false);
        setDataT(false);
        setDataTh(false);
        setDataF(true);
        setDataFi(false);
        setDataS(false);
        setDataSe(false);
        setDataSend(false);
    } 
     const nine = () => {
        setDataO(true);
        setDataT(false);
        setDataTh(false);
        setDataF(false);
        setDataFi(true);
        setDataS(false);
        setDataSe(false);
        setDataSend(false);
    }
    const ten = () => {
        setDataO(false);
        setDataT(false);
        setDataTh(false);
        setDataF(false);
        setDataFi(false);
        setDataS(true);
        setDataSe(false);
        setDataSend(false);
    }

    const ele = () => {
        setDataO(false);
        setDataT(false);
        setDataTh(false);
        setDataF(false);
        setDataFi(false);
        setDataS(false);
        setDataSe(true);
        setDataSend(false);
    }
    const twolve = () => {
        setDataO(false);
        setDataT(false);
        setDataTh(false);
        setDataF(false);
        setDataFi(false);
        setDataS(false);
        setDataSe(false);
        setDataSend(true);
    }
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Notifications</Text>
            </View>
            <ScrollView>
                <TouchableOpacity>
                    <View style={styles.flex}>
                        <Text style={styles.TextTwo}>Conversation tones</Text>
                        <Switch
                            value={data}
                            onValueChange={() => setData(!data)}
                        />
                    </View>
                    <Text style={styles.TextThree}>Play sounds for incoming and outgoing messages.</Text>
                </TouchableOpacity>
                <View style={styles.width}></View>
                <Text style={styles.Textfore}>Messages</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)} >
                    <Text style={styles.Textfive}>Notification tone</Text>
                    <Text style={styles.TextSix}>Default (notification_000)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalOneVisible(true)}>
                    <Text style={styles.Textfive}>Vibrate</Text>
                    <Text style={styles.TextSix}>Default</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalTwoVisible(true)} >
                    <Text style={styles.TextSeven}>Popup notification</Text>
                    <Text style={styles.TextSix}>Not avaliable</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalThreeVisible(true)} >
                    <Text style={styles.Textfive}>Light</Text>
                    <Text style={styles.TextSix}>White</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.flex}>
                        <Text style={styles.TextTwo}>Use high priority notifications</Text>
                        <Switch
                            value={dataone}
                            onValueChange={() => setDataOne(!dataone)}
                        />
                    </View>
                    <Text style={styles.TextThree}>Show previews of  nonifications at the top of the screen</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.flex}>
                        <Text style={styles.TextTwo}>Reaction Notifications</Text>
                        <Switch
                            value={datatwo}
                            onValueChange={() => setDataTwo(!datatwo)}
                        />
                    </View>
                    <Text style={styles.TextThree}>Show notifications for reactions to messages you send</Text>
                </TouchableOpacity>
                <View style={styles.width}></View>
                <Text style={styles.Textfore}>Groups</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.Textfive}>Notification tone</Text>
                    <Text style={styles.TextSix}>Default (notification_000)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalOneVisible(true)} >
                    <Text style={styles.Textfive}>Vibrate</Text>
                    <Text style={styles.TextSix}>Default</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalThreeVisible(true)}>
                    <Text style={styles.Textfive}>Light</Text>
                    <Text style={styles.TextSix}>White</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.flex}>
                        <Text style={styles.TextTwo}>Use high priority notifications</Text>
                        <Switch
                            value={datathree}
                            onValueChange={() => setDataThree(!datathree)}
                        />
                    </View>
                    <Text style={styles.TextThree}>Show previews of  nonifications at the top of the screen</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.flex}>
                        <Text style={styles.TextTwo}>Reaction Notifications</Text>
                        <Switch
                            value={datafore}
                            onValueChange={() => setDataFore(!datafore)}
                        />
                    </View>
                    <Text style={styles.TextThree}>Show notifications for reactions to messages you send</Text>
                </TouchableOpacity>
                <View style={styles.width}></View>
                <Text style={styles.Textfore}>Calls</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)} >
                    <Text style={styles.Textfive}>Ringtone</Text>
                    <Text style={styles.TextSix}>Default (notification_000)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalOneVisible(true)} style={styles.TouchableOpacity}>
                    <Text style={styles.Textfive}>Vibrate</Text>
                    <Text style={styles.TextSix}>Default</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {

                        setModalVisible(!modalVisible);
                    }}

                >
                    <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1, justifyContent: 'flex-end' }}>

                        <View style={styles.Modal}>
                            <View style={styles.flexTwo}>
                                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/share.png')} />
                                <View style={styles.flex}>
                                    <Text style={styles.TextEight}>Share via "Nearby Share"</Text>
                                    <View style={styles.ViewTwo}>
                                        <Text style={styles.Share}>Share</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={styles.widthTwo}></View>
                            <View style={styles.flexThree}>
                                <View style={styles.ViewSix}>
                                    <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/setting2.png')} />
                                    <Text style={styles.TextNine}>Sound & vibation</Text>
                                </View>

                                <Image resizeMode={'cover'} style={styles.ImagesFore} source={require('../../assets/images/bot.png')} />
                            </View>
                        </View>
                    </Pressable>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalOneVisible}
                    onRequestClose={() => {

                        setModalOneVisible(!modalOneVisible);
                    }}
                >
                    <Pressable onPress={() => setModalOneVisible(!modalOneVisible)} style={{ flex: 1, justifyContent: 'center' }}>

                        <View style={styles.ModalTwo}>
                            <Text style={styles.ModalText}>Vibrate</Text>
                            <View style={styles.flexThree}>
                                <CircleCheckBox
                                    checked={datafive}
                                    onToggle={() => one()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text onPress={() => one()} style={styles.ModalTextTwo}>Off</Text>
                            </View>
                            <View style={styles.flexThree}>
                                <CircleCheckBox
                                    checked={datasix}
                                    onToggle={() => two()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text onPress={() => two()}  style={styles.ModalTextTwo}>Default</Text>
                            </View>
                            <View style={styles.flexThree}>
                                <CircleCheckBox
                                    checked={dataseven}
                                    onToggle={() => three()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text  onPress={() => three()} style={styles.ModalTextTwo}>Short</Text>
                            </View>
                            <View style={styles.flexThree}>
                                <CircleCheckBox
                                    checked={dataeight}
                                    onToggle={() => four()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text  onPress={() => four()}  style={styles.ModalTextTwo}>Long</Text>
                            </View>
                        </View>
                    </Pressable>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalTwoVisible}
                    onRequestClose={() => {

                        setModalTwoVisible(!modalTwoVisible);
                    }}
                >
                    <Pressable onPress={() => setModalTwoVisible(!modalTwoVisible)} style={{ flex: 1, justifyContent: 'center' }}>

                        <View style={styles.ModalThree}>
                            <Text style={styles.ModalTextThree}>Popup notifications are no longer available in your version of Android</Text>
                            <Text onPress={() => Linking.openURL('https://faq.whatsapp.com/general/26000003?lg=en&lc=GB&eea=0')} style={styles.ModalTextfore}>LEARN MORE <Text onPress={() => setModalTwoVisible(!modalTwoVisible)}>                       OK</Text></Text>
                        </View>
                    </Pressable>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalThreeVisible}
                    onRequestClose={() => {

                        setModalThreeVisible(!modalThreeVisible);
                    }}
                >
                    <Pressable onPress={() => setModalThreeVisible(!modalThreeVisible)} style={{ flex: 1, justifyContent: 'center' }}>

                        <View style={styles.Modalfore}>
                            <Text style={styles.ModalText}>Light</Text>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={datao}
                                    onToggle={() => five()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.ModalTextTwo}>None</Text>
                            </View>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={datat}
                                    onToggle={() => six()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.ModalTextTwo}>White</Text>
                            </View>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={datath}
                                    onToggle={() => seven()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.ModalTextTwo}>Red</Text>
                            </View>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={dataf}
                                    onToggle={() => eight()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.ModalTextTwo}>Yellow</Text>
                            </View>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={datafi}
                                    onToggle={() => nine()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.ModalTextTwo}>Green</Text>
                            </View>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={datas}
                                    onToggle={() => ten()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.ModalTextTwo}>Cyan</Text>
                            </View>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={datase}
                                    onToggle={() => ele()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.ModalTextTwo}>Blue</Text>
                            </View>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={datasend}
                                    onToggle={() => twolve ()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.ModalTextTwo}>Purple</Text>
                            </View>
                        </View>
                    </Pressable>
                </Modal>
            </ScrollView>
        </View>
    )
}

export default Notifications

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
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flexThree: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 20

    },
    TextTwo: {
        marginTop: 20,
        marginHorizontal: 30,
        fontSize: 17,
        fontWeight: '500',
        color: color.B_000
    },
    TextEight: {
        marginTop: 20,
        marginHorizontal: 16,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000
    },
    Images: {
        height: 30,
        width: 30,
        marginTop: 20,
        marginHorizontal: 40
    },
    ImagesThree: {
        height: 30,
        width: 30,
        marginTop: 20,
    },
    ImagesFore: {
        height: 30,
        width: 30,
        marginTop: 20,
        marginLeft: 35
    },
    TextThree: {
        marginHorizontal: 30,
        fontSize: 16
    },
    width: {
        width: '100%',
        height: 1,
        backgroundColor: color.gray_50,
        marginTop: 15
    },
    widthTwo: {
        width: '90%',
        height: 0.4,
        backgroundColor: color.B_000,
        marginTop: 20,
        alignSelf: 'center'

    },
    Textfore: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500'
    },
    TouchableOpacity: {
        marginBottom: 20
    },
    Textfive: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000
    },
    TextSeven: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500',
    },
    TextSix: {
        marginHorizontal: 30
    },
    Modal: {
        width: '100%',
        marginHorizontal: 30,
        height: 250,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 20
    },
    flexTwo: {
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 30
    },
    ViewTwo: {
        height: 30,
        width: '25%',
        backgroundColor: color.Blue_50,
        borderRadius: 5,
        marginTop: 20
    },
    Share: {
        alignSelf: 'center',
        marginTop: 5,
    },
    ViewSix: {
        width: '30%',
        height: 150
    },
    TextNine: {
        marginHorizontal: 30,
        marginTop: 10
    },
    ModalTwo: {
        width: '90%',
        height: 270,
        borderRadius: 5,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
    },
    ModalText: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 19,
        fontWeight: '500',
        color: color.B_000
    },
    ModalTextTwo: {
        marginHorizontal: 30,
        fontSize: 17,
        fontWeight: '500',
        color: color.B_000
    },
    ModalThree: {
        height: 130,
        width: '90%',
        backgroundColor: color.gray_50,
        borderRadius: 5,
        alignSelf: 'center',
    },
    ModalTextThree: {
        marginHorizontal: 30,
        fontSize: 16,
        marginTop: 15
    },
    ModalTextfore: {
        marginHorizontal: 30,
        marginTop: 30,
        fontSize: 18,
        color: color.teal_800,
        fontWeight: '500'
    },
    Modalfore: {
        width: '90%',
        height: 460,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 5
    }
})