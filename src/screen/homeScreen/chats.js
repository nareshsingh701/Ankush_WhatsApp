import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import color from '../../utils/color'

const data = [

    {
        Name: "Anshika",
        secendName: "Home",
        Image: require('../../assets/images/pravesh.jpg'),
    },
    {
        Name: "ANKUSH",
        secendName: "KHAGA",
        Image: require('../../assets/images/priyanshu.jpg'),
    },
    {
        Name: "Anshu",
        secendName: "KHAGA",
        Image: require('../../assets/images/party.jpg'),
    },
    {
        Name: "NARESH",
        secendName: "KHAGA",
        Image: require('../../assets/images/Anshika.jpg'),
    },
    {
        Name: "sonu",
        secendName: "Arra",
        Image: require('../../assets/images/sugreev.jpg'),
    },
    {
        Name: "Ankush",
        secendName: "khaga",
        Image: require('../../assets/images/ankush.jpg'),
    },
    {
        Name: "NARESH",
        secendName: "KHAGA",
        Image: require('../../assets/images/Anshika.jpg'),
    },
    {
        Name: "sonu",
        secendName: "Arra",
        Image: require('../../assets/images/sugreev.jpg'),
    },
    {
        Name: "Ankush",
        secendName: "khaga",
        Image: require('../../assets/images/ankush.jpg'),
    },
]
const Chats = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalOneVisible, setModalOneVisible] = useState(false);
    const [uri, setURI] = useState("")
    const [showTip, setTip] = useState(true);

    console.log('props', props);

    const renderListData = (listData) => {
        const { item, index } = listData;

        return (
            <View style={styles.Container}>
                <TouchableOpacity >
                    <View style={styles.Image} >
                        <TouchableOpacity onPress={() => {
                            setURI(item.Image)
                            setModalVisible(true)
                        }} style={styles.ViewStyleOne}>
                            <Image style={styles.ImageSix} resizeMode={'cover'} source={item.Image} />
                        </TouchableOpacity>

                        <View  >
                            <Text style={styles.text}>{item.Name}</Text>
                            <Text style={styles.text}>{item.secendName}</Text>

                        </View>
                        <Text style={styles.texts}>{item.Text}</Text>
                    </View>
                </TouchableOpacity>
            </View >

        )
    }
    return (
        <View style={{ flex: 1, }} >
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
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesTwo} source={require('../../assets/images/chating.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesTwo} source={require('../../assets/images/colling.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image resizeMode={'cover'} style={styles.ImagesStylesTwo} source={require('../../assets/images/videocalling.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('DataChange')}>
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
        marginLeft: 30
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

