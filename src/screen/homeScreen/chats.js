import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, Modal, Pressable, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'

const data = [

    {
        name: "8957729509",
        secendName: "Home",
        imagesone: require('../../assets/images/pravesh.jpg'),
        PhoneNumber: "8957729609",
        user: "Hey there! I am using WhatsApp",
    },
    {
        name: "ANKUSH",
        secendName: "KHAGA",
        imagesone: require('../../assets/images/priyanshu.jpg'),
        PhoneNumber: "26643457788",
        user: "Hey there! I am using WhatsApp",
    },
    {
        name: "Anshu",
        secendName: "KHAGA",
        imagesone: require('../../assets/images/party.jpg'),
        PhoneNumber: "234567765423",
        user: "Hey there! I am using WhatsApp",
    },
    {
        name: "NARESH",
        secendName: "KHAGA",
        imagesone: require('../../assets/images/Anshika.jpg'),
        PhoneNumber: "06666544333",
        user: "Hey there! I am using WhatsApp",
    },
    {
        name: "sonu",
        secendName: "Arra",
        imagesone: require('../../assets/images/sugreev.jpg'),
        PhoneNumber: "12234455577",
        user: "Hey there! I am using WhatsApp",
    },
    {
        name: "Ankush",
        secendName: "khaga",
        imagesone: require('../../assets/images/ankush.jpg'),
        PhoneNumber: "9733468856",
        user: "Hey there! I am using WhatsApp",
    },
    {
        name: "NARESH",
        secendName: "KHAGA",
        imagesone: require('../../assets/images/Anshika.jpg'),
        PhoneNumber: "12345987345",
        user: "Hey there! I am using WhatsApp",
    },
    {
        name: "sonu",
        secendName: "Arra",
        imagesone: require('../../assets/images/sugreev.jpg'),
        PhoneNumber: "234564323456",
        user: "Hey there! I am using WhatsApp",
    },
    {
        name: "Ankush",
        secendName: "khaga",
        imagesone: require('../../assets/images/ankush.jpg'),
        PhoneNumber: "8123456709",
        user: "Hey there! I am using WhatsApp",
    },
    {
        name: "Ankush",
        secendName: "khaga",
        imagesone: require('../../assets/images/ankush.jpg'),
        PhoneNumber: "8123456709",
        user: "Hey there! I am using WhatsApp",
    },
]
const Chats = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [uri, setURI] = useState({})
    const [dataOne, setDataOne] = useState({})
    const [showTip, setTip] = useState("");

    console.log('props', props);

    const renderListData = (listData) => {
        const { item, index } = listData;

        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Chating', { item })
            } style={styles.Container} >
                <View style={styles.Image} >
                    <TouchableOpacity onPress={() => {
                        setURI(item)
                        setDataOne(item.imagesone)
                        setModalVisible(true)
                        setTip(item.name)
                    }} style={styles.ViewStyleOne}>
                        <Image style={styles.ImageSix} resizeMode={'cover'} source={item.imagesone} />

                    </TouchableOpacity>

                    <View style={{ width: '60%' }}>

                        <Text numberOfLines={1} style={styles.text}>{item.name}</Text>
                        <Text numberOfLines={1} style={styles.text}>{item.secendName}</Text>

                    </View>

                </View>
            </TouchableOpacity>


        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }} >
            <FlatList
                data={data}
                keyExtractor={(item, index,) => index.toString()}
                renderItem={renderListData}
            />
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={styles.ViewStyle}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/chats.png')} />
                </TouchableOpacity>
            </View>
            <Modal
                animationType="none"
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
                }} style={{ flex: 1 }}>
                    <View style={styles.Modal}>

                        <TouchableOpacity onPress={() => {

                            setModalVisible(!modalVisible)
                            setModalOneVisible(true)
                        }}>
                            <ImageBackground onPress={() => {
                                setModalVisible(true)
                            }} style={styles.ImagesTwo} resizeMode={'cover'} source={uri.imagesone} >
                                <Text style={styles.TextTwo}>{showTip}</Text>
                            </ImageBackground>

                        </TouchableOpacity>
                        <View style={styles.flex}>
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate('Chating', { item: uri })
                            }}>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesTwo} source={require('../../assets/images/chating.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesTwo} source={require('../../assets/images/colling.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesTwo} source={require('../../assets/images/videocalling.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(!modalVisible)
                                props.navigation.navigate('DataChange', {
                                    item: uri
                                })
                            }}>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesTwo} source={require('../../assets/images/info.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>
            </Modal>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalOneVisible}
                onRequestClose={() => {
                    setModalOneVisible(!modalOneVisible);
                    setDataOne("")

                }}
            >
                <View style={styles.ModalThree}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => {
                            setDataOne("")
                            setModalOneVisible(!modalOneVisible)
                        }}>

                            <Image resizeMode={'cover'} style={styles.ImagesStylesThree} source={require('../../assets/images/LeftTwo.png')} />
                        </TouchableOpacity>
                        <Text style={styles.TextTwo}>{showTip}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Image style={styles.ImagesThree} resizeMode={'cover'} source={dataOne} />
                    </View>
                </View>
            </Modal>
        </View>

    )
}


export default Chats
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 16,

    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 30,
    },
    texts: {
        alignSelf: 'center',
        marginLeft: 50,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
    Image: {
        alignSelf: 'center',
        flexDirection: 'row',
        height: 60,
        width: 400,
        backgroundColor: color.B_00,
        padding: 10,

    },
    ImageSix: {
        height: 50,
        width: 50,
        borderRadius: 50

    },
    ViewStyle: {
        height: 50,
        width: 50,
        backgroundColor: color.teal_800,
        borderRadius: 50,
        position: 'absolute',
        elevation: 2,
        right: 10,
        bottom: 10
    },
    ImagesStyles: {
        height: 25,
        width: 25,
        marginLeft: 12,
        marginTop: 12
    },
    ImagesStylesTwo: {
        height: 30,
        width: 30,
        marginTop: 10
    },
    ImagesStylesThree: {
        height: 30,
        width: 30,
        marginTop: 10,
        marginHorizontal: 30
    },
    ViewStyleOne: {
        height: 50,
        width: 50,
        paddingHorizontal: 16
    },
    Modal: {
        width: '80%',
        height: 300,
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        marginTop: '25%'
    },
    ImagesTwo: {
        height: 250,
        width: '100%',
    },
    ImagesThree: {
        height: '60%',
        width: '100%',
        alignSelf: 'center',


    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    ModalThree: {
        width: '100%',
        height: '100%',
        backgroundColor: color.B_000,
    },
    TextTwo: {
        marginHorizontal: 16,
        color: color.B_00,
        fontSize: 20,
        fontWeight: '500',
        marginTop: 5
    }
})

