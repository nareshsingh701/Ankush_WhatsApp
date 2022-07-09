import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'

const data = [

    {
        name: "Anshika",
        secendName: "Home",
        imagesone: require('../../assets/images/pravesh.jpg'),
    },
    {
        name: "ANKUSH",
        secendName: "KHAGA",
        imagesone: require('../../assets/images/priyanshu.jpg'),
    },
    {
        name: "Anshu",
        secendName: "KHAGA",
        imagesone: require('../../assets/images/party.jpg'),
    },
    {
        name: "NARESH",
        secendName: "KHAGA",
        imagesone: require('../../assets/images/Anshika.jpg'),
    },
    {
        name: "sonu",
        secendName: "Arra",
        imagesone: require('../../assets/images/sugreev.jpg'),
    },
    {
        name: "Ankush",
        secendName: "khaga",
        imagesone: require('../../assets/images/ankush.jpg'),
    },
    {
        name: "NARESH",
        secendName: "KHAGA",
        imagesone: require('../../assets/images/Anshika.jpg'),
    },
    {
        name: "sonu",
        secendName: "Arra",
        imagesone: require('../../assets/images/sugreev.jpg'),
    },
    {
        name: "Ankush",
        secendName: "khaga",
        imagesone: require('../../assets/images/ankush.jpg'),
    },
]
const Chats = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [uri, setURI] = useState("")
    const [showTip, setTip] = useState("");
    console.log('props', props);
    
    const renderListData = (listData) => {
        const { item, index } = listData;

        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Chating')} style={styles.Container} >
                <View style={styles.Image} >
                    <TouchableOpacity onPress={() => {

                        setURI(item.imagesone)

                        setModalVisible(true)
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
            <View style={{ flex: 1, justifyContent: 'flex-end', marginRight: 20, marginBottom: 20 }}>
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
                    setURI("")

                }}
            >
                <Pressable onPress={() => {
                    setURI("")

                    setModalVisible(!modalVisible)
                }} style={{ flex: 1 }}>
                    <View style={styles.Modal}>
                        <Image onPress={() => setModalOneVisible(true)} style={styles.ImagesTwo} resizeMode={'cover'} source={uri} />
                        <View style={styles.flex}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Chating')} >
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
                                    data
                                })
                            }}>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesTwo} source={require('../../assets/images/info.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>
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
        alignSelf: 'flex-end',
        borderRadius: 50,
        position: 'absolute',
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
    ViewStyleOne: {
        height: 50,
        width: 50,
        paddingHorizontal: 16
    },
    Modal: {
        width: '80%',
        height: '62%',
        backgroundColor: color.gray_50,
        alignSelf: 'center',
        marginTop: '25%'
    },
    ImagesTwo: {
        height: '87%',
        width: '100%',
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ModalTwo: {
        width: '100%',
        height: '110%',
        backgroundColor: color.B_000
    }
})

