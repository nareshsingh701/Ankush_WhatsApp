import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal, Switch,Pressable } from 'react-native'
import React, { useState } from 'react'
import color from '../utils/color'
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
const Chats = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);
    const [modalThreeVisible, setModalThreeVisible] = useState(false);

    const [data, setData] = useState(false);
    const [datatwo, setDataTwo] = useState(false);
    const [dataThree, setDataThree] = useState(false);

    const [dataone, setDataOne] = useState(false)
    const [datafour, setDataFour] = useState(false)
    const [datafive, setDataFive] = useState(false)

    const [datasix, setDataSix] = useState(false)
    const [dataseven, setDataSeven] = useState(false)
    const [dataeight, setDataEight] = useState(false)

    const [datafo, setDataFo] = useState(false)
    const [datafoo, setDataFoo] = useState(false)
    const [dataso, setDataSo] = useState(false)
    const [datasoo, setDataSoo] = useState(false)
    const [dataeo, setDataEo] = useState(false)
    const one = () => {
        setDataOne(true);
        setDataFour(false);
        setDataFive(false);

    }
    const two = () => {
        setDataOne(false)
        setDataFour(true);
        setDataFive(false);

    }

    const three = () => {
        setDataOne(false)
        setDataFour(false);
        setDataFive(true);

    }
    const four = () => {
        setDataSix(true);
        setDataSeven(false);
        setDataEight(false);

    }
    const five = () => {
        setDataSix(false)
        setDataSeven(true);
        setDataEight(false);
    }
    const six = () => {
        setDataSix(false)
        setDataSeven(false);
        setDataEight(true);

    }
    const seven = () => {
        setDataFo(true)
        setDataFoo(false);
        setDataSo(false);
        setDataSoo(false);
        setDataEo(false);

    }

    const eight = () => {
        setDataFo(false)
        setDataFoo(true);
        setDataSo(false);
        setDataSoo(false);
        setDataEo(false);

    }
    const nine = () => {
        setDataFo(false)
        setDataFoo(false);
        setDataSo(true);
        setDataSoo(false);
        setDataEo(false);

    }
    const ten = () => {
        setDataFo(false)
        setDataFoo(false);
        setDataSo(false);
        setDataSoo(true);
        setDataEo(false);
    }
    const ele = () => {
        setDataFo(false)
        setDataFoo(false);
        setDataSo(false);
        setDataSoo(false);
        setDataEo(true);

    }
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Settings')} >
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/colorLeft.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Chats</Text>
            </View>
            <ScrollView>
                <Text style={styles.TextTwo}>Display</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <View style={styles.flex}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/theme.png')} />
                        <Text style={styles.TextThree}>Theme</Text>
                    </View>
                    <Text style={styles.fore}>System default</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Wallpaper')}>
                    <View style={styles.flex}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/wallpaper.png')} />
                        <Text style={styles.TextThree}>wallpaper</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.Line}></View>
                <Text style={styles.TextTwo}>Chat settings</Text>
                <TouchableOpacity onPress={() => setData(!data)}>
                    <View style={styles.flexTwo}>
                        <Text style={styles.TextThree}>Enter is send</Text>
                        <Switch
                            value={data}
                            onValueChange={() => setData(!data)}
                        />
                    </View>
                    <Text style={styles.fore}>Enter key will send your message</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDataTwo(!datatwo)}>
                    <View style={styles.flexTwo}>
                        <Text style={styles.TextThree}>Media visiblility</Text>
                        <Switch
                            value={datatwo}
                            onValueChange={() => setDataTwo(!datatwo)}
                        />
                    </View>
                    <Text style={{marginHorizontal:80,fontSize:16}}>Show newly downloded media in your phone`s gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalTwoVisible(true)}>
                    <View style={styles.flexTwo}>
                        <Text style={styles.TextThree}>font size</Text>
                    </View>
                    <Text style={styles.fore}>Medium</Text>
                </TouchableOpacity>
                <View style={styles.Line}></View>
                <Text style={styles.TextTwo}>Archived chats</Text>
                <TouchableOpacity>
                    <View style={styles.flexTwo}>
                        <Text style={styles.TextThree}>Keep chats archived</Text>
                        <Switch
                            value={dataThree}
                            onValueChange={() => setDataThree(!dataThree)}
                        />
                    </View>
                    <Text style={{marginHorizontal:80,fontSize:16}}>Archived chats will remain archived when you receive a new message</Text>
                </TouchableOpacity>
                <View style={styles.Line}></View>
                <TouchableOpacity onPress={() => setModalThreeVisible(true)}>
                    <View style={styles.flexFive}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/language.png')} />
                        <Text style={styles.Textfore}>App Language</Text>
                    </View>
                    <Text style={{marginHorizontal:80,fontSize:16}}>Phone`s language(English)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Chatbackup')}>
                    <View style={styles.flexFive}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/backup.png')} />
                        <Text style={styles.Textfore}>Chat backup</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom:30}} onPress={() => props.navigation.navigate('Chathistory')}>
                    <View style={styles.flexFive}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/history.png')} />
                        <Text style={styles.Textfore}>Chat history</Text>
                    </View>

                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Pressable onPress={()=> setModalVisible(!modalVisible)} style={{ flex: 1, justifyContent: 'center' }}>

                        <View style={styles.Modal}>
                            <Text style={styles.ModalText}>Choose theme</Text>
                            <View style={styles.flexThree}>
                                <CircleCheckBox
                                    checked={dataone}
                                    onToggle={() => one()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>System default</Text>
                            </View>
                            <View style={styles.flexThree}>
                                <CircleCheckBox
                                    checked={datafour}
                                    onToggle={() => two()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>Light</Text>
                            </View>
                            <View style={styles.flexThree}>
                                <CircleCheckBox
                                    checked={datafive}
                                    onToggle={() => three()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>Dark</Text>
                            </View>
                            <View style={styles.flexfour}>
                                <Text onPress={() => setModalVisible(!modalVisible)}
                                    style={styles.ModalTwo}>CANCEL</Text>
                                <Text onPress={() => setModalVisible(!modalVisible)} style={styles.ModalThree}>OK</Text>
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
                    <Pressable onPress={()=> setModalTwoVisible(!modalTwoVisible)} style={{ flex: 1, justifyContent: 'center' }}>

                        <View style={styles.Modalfore}>
                            <Text style={styles.ModalText}>Font size</Text>
                            <View style={styles.flexThree}>
                                <CircleCheckBox
                                    checked={datasix}
                                    onToggle={() => four()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>Small</Text>
                            </View>
                            <View style={styles.flexThree}>
                                <CircleCheckBox
                                    checked={dataseven}
                                    onToggle={() => five()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>Medium</Text>
                            </View>
                            <View style={styles.flexThree}>
                                <CircleCheckBox
                                    checked={dataeight}
                                    onToggle={() => six()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>Large</Text>
                            </View>
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
                    <Pressable onPress={()=>  setModalThreeVisible(!modalThreeVisible)} style={{ flex: 1, justifyContent: 'center' }}>

                        <View style={styles.ScrollView}>
                            <Text style={styles.ModalText}>App Language</Text>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={dataone}
                                    onToggle={() => one()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>Small</Text>
                            </View>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={datafo}
                                    onToggle={() => seven()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>Medium</Text>
                            </View>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={datafoo}
                                    onToggle={() => eight()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>Large</Text>
                            </View>

                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={dataso}
                                    onToggle={() => nine()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>Small</Text>
                            </View>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={datasoo}
                                    onToggle={() => ten()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>Medium</Text>
                            </View>
                            <View style={styles.flexThree}>
                            <CircleCheckBox
                                    checked={dataeo}
                                    onToggle={() => ele()}
                                    labelPosition={LABEL_POSITION.RIGHT}
                                    outerColor='#00695C'
                                    innerColor='#00695C'
                                    filterSize='20'
                                    innerSize='12'
                                />
                                <Text style={styles.TextThree}>Large</Text>
                            </View>
                        </View>
                    </Pressable>

                </Modal>
            </ScrollView>
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.B_00,

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
        marginTop: 20,
        height: 30,
        width: 30
    },
    ImagesTwo: {
        marginTop: 20,
        height: 40,
        width: 40
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
        fontSize: 17,
        fontWeight: '500'
    },
    flexThree: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 20
    },
    flex: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginBottom: 20
    },
    flexFive: {
        flexDirection: 'row',
        marginHorizontal: 30,
    },
    flexTwo: {
        flexDirection: 'row',
        marginHorizontal: 60,
        justifyContent: 'space-between'
    },
    TextThree: {
        marginHorizontal: 20,
        fontSize: 18,
        fontWeight: '500',
        color: color.B_000
    },
    Textfore: {
        marginHorizontal: 20,
        fontSize: 18,
        fontWeight: '500',
        color: color.B_000,
        marginTop:20
    },
    fore: {
        marginHorizontal: 80,
        fontSize: 16
    },
    Line: {
        height: 1,
        width: '100%',
        backgroundColor: color.gray_50,
        marginTop: 20
    },
    Modal: {
        height: 300,
        width: '90%',
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 5
    },
    ModalText: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 19,
        fontWeight: '500',
        color: color.B_000
    },
    flexfour: {
        flexDirection: 'row'
    },
    ModalTwo: {
        marginTop: 50,
        marginLeft: 150,
        fontSize: 18,
        fontWeight: '500',
        color: color.teal_800
    },
    ModalThree: {
        fontSize: 18,
        fontWeight: '500',
        color: color.teal_800,
        marginTop: 50,
        marginLeft: 50
    },
    Modalfore: {
        height: 200,
        width: '90%',
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 5
    },
    ScrollView: {
        width: '90%',
        height: 380,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        borderRadius: 5
    }
})