import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Switch, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import color from '../utils/color'
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
const Chatbackup = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modaloneVisible, setModalOneVisible] = useState(false);

    const [dataone, setDataOne] = useState(false)
    const [datathree, setDataThree] = useState(false)
    const [datafour, setDataFour] = useState(false)
    const [datafive, setDataFive] = useState(false)
    const [datasix, setDataSix] = useState(false)
    const [dataseven, setDataSeven] = useState(false)
    const [dataeight, setDataEight] = useState(false)
    const [datanine, setDatanine] = useState(false)

    const [data, setData] = useState(false);
    const [datatwo, setDataTwo] = useState(false);

    const one = () => {
        setDataOne(true);
        setDataThree(false);
        setDataFour(false);
        setDataFive(false);
        setDataSix(false);
    }
    const two = () => {
        setDataOne(false);
        setDataThree(true);
        setDataFour(false);
        setDataFive(false);
        setDataSix(false);
    }

    const three = () => {
        setDataOne(false);
        setDataThree(false);
        setDataFour(true);
        setDataFive(false);
        setDataSix(false);
    }
    const four = () => {
        setDataOne(false);
        setDataThree(false);
        setDataFour(false);
        setDataFive(true);
        setDataSix(false);
    }
    const five = () => {
        setDataOne(false);
        setDataThree(false);
        setDataFour(false);
        setDataFive(false);
        setDataSix(true);
    }
    const Six = () => {
        setDataSeven(true);
        setDataEight(false);
        setDatanine(false);
    }
    const Seven = () => {
        setDataSeven(false);
        setDataEight(true);
        setDatanine(false);

    }
    const Eight = () => {
        setDataSeven(false);
        setDataEight(false);
        setDatanine(true);
    }
    return (
        <View style={styles.container} >
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Chats')} >
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/colorLeft.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Light Theme Wallpaper</Text>
            </View>
            <ScrollView >
                <View style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/backup.png')} />
                    <Text style={styles.Backup}>Last Backup</Text>
                </View>
                <Text style={styles.TextTwo}>Back up  your messages and media to Google Drive. You can restore them when you reinstall WatsApp.Your messages will also back up to your phone`s internal storage.</Text>
                <Text style={styles.TextThree}>Local: 2:00 am</Text>
                <Text style={styles.Textfore}>Google Drive: Never</Text>
                <View style={styles.ViewTwo}>
                    <Text style={styles.BackupTwo}>BACK UP</Text>
                </View>
                <View style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/lock.png')} />
                    <Text style={styles.Backup}>End-ti-end encrypted backup</Text>
                </View>
                <Text style={styles.marginTop}>Off</Text>
                <View style={styles.ViewThree}></View>
                <View style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/drive.png')} />
                    <Text style={styles.Backup}>Google Drive sattings</Text>
                </View>
                <Text style={styles.TextTwo}>Back up  your chat history and media to Google Drive. so if yor  change  phone`s your chat history is safe. For added security, you can protect your backup with end-to-end encryption.</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.TextThree}>Back up Google Drive</Text>
                    <Text style={styles.TextTwo}>Never</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalOneVisible(!modaloneVisible)} >
                    <Text style={styles.TextThree}>Google Account</Text>
                    <Text style={styles.TextTwo}>None selected</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setData(!data)} style={styles.flexThree}>
                    <Text style={styles.BackupThree}>Back up using cellular</Text>
                    <Switch
                        value={data}
                        onValueChange={() => setData(!data)}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDataTwo(!datatwo)} style={{ marginBottom: 30 }}>
                    <View style={styles.flexThree}>

                        <Text style={styles.BackupThree}>Inclide videos</Text>
                        <Switch
                            value={datatwo}
                            onValueChange={() => setDataTwo(!datatwo)}
                        />
                    </View>
                    {
                        datatwo == false ?
                            <View>

                            </View>
                            :
                            <View>
                                <Text style={styles.TextTwo}>5.2 MB to be uploaded</Text>
                            </View>
                    }
                </TouchableOpacity>

            </ScrollView>
            <Modal

                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={styles.Modal}>
                        <Text style={styles.TextFive}>Back up to Google Drive</Text>
                        <View style={styles.flexTwo}>
                            <CircleCheckBox
                                checked={dataone}
                                onToggle={() => one()}
                                labelPosition={LABEL_POSITION.RIGHT}
                                outerColor='gray'
                                innerColor='#00695C'
                                filterSize='20'
                                innerSize='12'
                            />
                            <Text style={styles.TextSix}>Never</Text>
                        </View>
                        <View style={styles.flexTwo}>
                            <CircleCheckBox
                                checked={datathree}
                                onToggle={() => two()}
                                labelPosition={LABEL_POSITION.RIGHT}
                                outerColor='gray'
                                innerColor='#00695C'
                                filterSize='20'
                                innerSize='12'
                            />
                            <Text style={styles.TextSix}>Only when I tap "Back up"</Text>
                        </View>
                        <View style={styles.flexTwo}>
                            <CircleCheckBox
                                checked={datafour}
                                onToggle={() => three()}
                                labelPosition={LABEL_POSITION.RIGHT}
                                outerColor='gray'
                                innerColor='#00695C'
                                filterSize='20'
                                innerSize='12'
                            />
                            <Text style={styles.TextSix}>Daily</Text>
                        </View>
                        <View style={styles.flexTwo}>
                            <CircleCheckBox
                                checked={datafive}
                                onToggle={() => four()}
                                labelPosition={LABEL_POSITION.RIGHT}
                                outerColor='gray'
                                innerColor='#00695C'
                                filterSize='20'
                                innerSize='12'
                            />
                            <Text style={styles.TextSix}>Weekly</Text>
                        </View>
                        <View style={styles.flexTwo}>
                            <CircleCheckBox
                                checked={datasix}
                                onToggle={() => five()}
                                labelPosition={LABEL_POSITION.RIGHT}
                                outerColor='gray'
                                innerColor='#00695C'
                                filterSize='20'
                                innerSize='12'
                            />
                            <Text style={styles.TextSix}>Monthly</Text>
                        </View>
                        <Text onPress={() => setModalVisible(!modalVisible)} style={styles.TextSeven}>CANCEL</Text>
                    </View>
                </Pressable>
            </Modal>
            <Modal

                transparent={true}
                visible={modaloneVisible}
                onRequestClose={() => {
                    setModalOneVisible(!modaloneVisible);
                }}
            >
                <Pressable onPress={()=> setModalOneVisible(!modaloneVisible)} style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={styles.ModalTwo}>
                        <Text style={styles.TextFive}>Choose an account</Text>
                        <View style={styles.flexFour}>
                            <Text style={styles.TextEight}>Monthly</Text>
                            <CircleCheckBox
                                checked={dataseven}
                                onToggle={() => Six()}
                                labelPosition={LABEL_POSITION.RIGHT}
                                outerColor='gray'
                                innerColor='#00695C'
                                filterSize='20'
                                innerSize='12'
                            />
                        </View>
                        <View style={styles.flexFour}>
                            <Text style={styles.TextEight}>ankushsingh 10535@gmail.com</Text>
                            <CircleCheckBox
                                checked={dataeight}
                                onToggle={() => Seven()}
                                labelPosition={LABEL_POSITION.RIGHT}
                                outerColor='gray'
                                innerColor='#00695C'
                                filterSize='20'
                                innerSize='12'
                            />
                        </View>

                        <View style={styles.flexFour}>
                            <Text style={styles.TextEight}>Add account</Text>
                            <CircleCheckBox
                                checked={datanine}
                                onToggle={() => Eight()}
                                labelPosition={LABEL_POSITION.RIGHT}
                                outerColor='gray'
                                innerColor='#00695C'
                                filterSize='20'
                                innerSize='12'
                            />
                        </View>
                        <Text onPress={()=> setModalOneVisible(!modaloneVisible)} style={styles.TextSeven}>CANCEL</Text>
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

export default Chatbackup

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
        marginHorizontal: 30,
        marginTop: 35,
        height: 30,
        width: 30
    },
    ImagesStyle: {
        marginHorizontal: 30,
        marginTop: 20,
        height: 30,
        width: 30
    },
    TextStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        color: color.B_00
    },
    flex: {
        flexDirection: 'row'
    },
    flexTwo: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 20
    },
    flexFour: {
        flexDirection: 'row',
        marginRight: 30,
        justifyContent:'space-between',
        marginTop:20
    },
    flexThree: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Backup: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500'
    },
    TextTwo: {
        marginHorizontal: 50,

    },
    TextThree: {
        marginHorizontal: 50,
        fontSize: 16,
        color: color.B_000,
        marginTop: 20
    },
    Textfore: {
        marginHorizontal: 50,
        fontSize: 16,
        color: color.B_000
    },
    ViewTwo: {
        height: 50,
        width: "30%",
        backgroundColor: color.teal_800,
        borderRadius: 5,
        marginHorizontal: 50,
        marginTop: 20
    },
    BackupTwo: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 17,
        color: color.B_00
    },
    marginTop: {
        marginHorizontal: 90,
        fontSize: 17,
        fontWeight: '500'
    },
    ViewThree: {
        height: 1,
        width: '100%',
        backgroundColor: color.gray_50,
        marginTop: 20
    },
    BackupThree: {
        marginHorizontal: 50,
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500',
    },
    Modal: {
        width: '90%',
        height: '60%',
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 5
    },
    TextFive: {
        marginTop: 15,
        marginHorizontal: 30,
        fontSize: 20,
        fontWeight: '500',
        color: color.B_000
    },
    TextSix: {
        marginHorizontal: 30,
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000
    },
    TextEight: {
        fontSize: 16,
        fontWeight: '500',
        color: color.B_000,
        marginHorizontal: 30,
        marginTop: 10,
    },
    TextSeven: {
        alignSelf: 'flex-end',
        marginTop: 30,
        marginRight: 30,
        color: color.teal_800,
        fontSize: 16,
        fontWeight: '500'
    },
    ModalTwo: {
        width: '90%',
        height: '50%',
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 5
    }

})