import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import color from '../utils/color'

const Chats = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTwoVisible, setModalTwoVisible] = useState(false);
    const [modalThreeVisible, setModalThreeVisible] = useState(false);

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
                <TouchableOpacity>
                    <View style={styles.flexTwo}>
                        <Text style={styles.TextThree}>Enter is send</Text>
                        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/off2.png')} />
                    </View>
                    <Text style={styles.fore}>Enter key will send your message</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.flexTwo}>
                        <Text style={styles.TextThree}>Media visiblility</Text>
                        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/on.png')} />
                    </View>
                    <Text style={styles.fore}>Show newly downloded media in your phone`s gallery</Text>
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
                        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../assets/images/off2.png')} />
                    </View>
                    <Text style={styles.fore}>Archived chats will remain archived when you receive a new message</Text>
                </TouchableOpacity>
                <View style={styles.Line}></View>
                <TouchableOpacity onPress={() => setModalThreeVisible(true)}>
                    <View style={styles.flex}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/language.png')} />
                        <Text style={styles.TextThree}>App Language</Text>
                    </View>
                    <Text style={styles.fore}>Phone`s language(English)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Chatbackup')}>
                    <View style={styles.flex}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/backup.png')} />
                        <Text style={styles.TextThree}>Chat backup</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Chathistory')}>
                    <View style={styles.flex}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/history.png')} />
                        <Text style={styles.TextThree}>Chat history</Text>
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
                    <View style={styles.Modal}>
                        <Text style={styles.ModalText}>Choose theme</Text>
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/onlite.png')} />
                            <Text style={styles.TextThree}>System default</Text>
                        </View>
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/o.png')} />
                            <Text style={styles.TextThree}>Light</Text>
                        </View>
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/o.png')} />
                            <Text style={styles.TextThree}>Dark</Text>
                        </View>
                        <View style={styles.flexfour}>
                            <Text onPress={() => setModalVisible(!modalVisible)}
                                style={styles.ModalTwo}>CANCEL</Text>
                            <Text onPress={() => setModalVisible(!modalVisible)} style={styles.ModalThree}>OK</Text>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalTwoVisible}
                    onRequestClose={() => {
                        setModalTwoVisible(!modalTwoVisible);
                    }}
                >
                    <View style={styles.Modalfore}>
                        <Text style={styles.ModalText}>Font size</Text>
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/o.png')} />
                            <Text style={styles.TextThree}>Small</Text>
                        </View>
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/onlite.png')} />
                            <Text style={styles.TextThree}>Medium</Text>
                        </View>
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/o.png')} />
                            <Text style={styles.TextThree}>Large</Text>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalThreeVisible}
                    onRequestClose={() => {
                        setModalThreeVisible(!modalThreeVisible);
                    }}
                >
                    <View style={styles.ScrollView}>
                    <Text style={styles.ModalText}>Font size</Text>
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/o.png')} />
                            <Text style={styles.TextThree}>Small</Text>
                        </View>
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/onlite.png')} />
                            <Text style={styles.TextThree}>Medium</Text>
                        </View>
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/o.png')} />
                            <Text style={styles.TextThree}>Large</Text>
                        </View>
                       
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/o.png')} />
                            <Text style={styles.TextThree}>Small</Text>
                        </View>
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/o.png')} />
                            <Text style={styles.TextThree}>Medium</Text>
                        </View>
                        <View style={styles.flexThree}>
                            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/o.png')} />
                            <Text style={styles.TextThree}>Large</Text>
                        </View>
                    </View>
                    
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
    },
    flex: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginBottom: 20
    },
    flexTwo: {
        flexDirection: 'row',
        marginHorizontal: 60,
        justifyContent: 'space-between'
    },
    TextThree: {
        marginHorizontal: 20,
        marginTop: 20,
        fontSize: 18,
        fontWeight: '500',
        color: color.B_000
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
        marginTop: 250,
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
        height: 220,
        width: '90%',
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        marginTop: 250,
        borderRadius: 5
    },
    ScrollView: {
        width: '90%',
        height: 500,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 50,
        borderRadius:5
    }
})