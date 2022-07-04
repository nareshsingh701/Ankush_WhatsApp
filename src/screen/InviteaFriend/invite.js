import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import color from '../../utils/color'

const data = [

    {
        countryName: "+91 7905706077",
        countryNumber: "+91 7905706077",
        Image: require('../../assets/images/Anshu.jpg'),
    },
    {
        countryName: "7905706077",
        countryNumber: "+91 7905706077",
        Image: require('../../assets/images/Anshu.jpg'),
    },
    {
        countryName: "+91 7905706077",
        countryNumber: "+91 7905706077",
        Image: require('../../assets/images/Anshu.jpg'),
    },
    {
        countryName: "7905706077",
        countryNumber: "+91 7905706077",
        Image: require('../../assets/images/Anshu.jpg'),
    },
    {
        countryName: "+91 7905706077",
        countryNumber: "+91 7905706077",
        Image: require('../../assets/images/Anshu.jpg'),
    },
    {
        countryName: "7905706077",
        countryNumber: "+91 7905706077",
        Image: require('../../assets/images/Anshu.jpg'),
    },
]
const Invite = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const renderListData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.container}>
                <TouchableOpacity >
                    <View style={styles.Image} >

                        <View style={styles.ImageStyle}>
                            <View >
                                <Image resizeMode={'cover'} style={styles.Imagefour} source={item.Image} />
                            </View>
                            <View>
                                <Text style={styles.text}>{item.countryName}</Text>
                                <Text style={styles.texts}>{item.countryNumber}</Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} >
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/colorLeft.png')} />
                </TouchableOpacity>
                <View style={styles.View}>
                    <Text style={styles.TextStyle}>Invite a friend</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/search.png')} />
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
                <View style={styles.Modal}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}  >
                        <Image resizeMode={'cover'} style={styles.ImagesFour} source={require('../../assets/images/colorLeft.png')} />

                    </TouchableOpacity>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Search...'
                    />
                </View>
            </Modal>
            <View style={styles.flex}>
                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/share2.png')} />
                <Text style={styles.TextTwo}>Share link</Text>
            </View>
            <Text style={styles.TextFour}>From Contacts</Text>
            <FlatList
                data={data}
                keyExtractor={(item, index,) => index.toString()}
                renderItem={renderListData}
            />
        </View>
    )
}

export default Invite;

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
    ImagesFour: {
        marginLeft: 30,
        marginTop: 15,
        height: 30,
        width: 30
    },
    ImagesTwo: {
        marginTop: 35,
        height: 25,
        width: 25
    },
    TextStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 30,
        color: color.B_00
    },
    View: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginHorizontal: 16
    },
    ImagesThree: {
        width: 50,
        height: 50,
        marginTop: 10
    },
    flex: {
        flexDirection: 'row',
        marginHorizontal: 16,
    },
    TextTwo: {
        alignSelf: 'center',
        fontSize: 18,
        marginHorizontal: 16,
        fontWeight: '500',
        color: color.B_000
    },
    TextFour: {
        marginHorizontal: 16,
        fontSize: 16,
        fontWeight: '500',
        marginTop: 20,
        marginBottom: 20
    },
    Image: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: color.B_00,

    },
    ImageStyle: {
        marginLeft: 10,
        flexDirection: 'row'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginHorizontal: 16,
        marginTop: 10
    },
    texts: {
        fontWeight: 'bold',
        marginHorizontal: 16,
    },
    Imagefour: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginTop: 5
    },
    Modal: {
        width: '100%',
        height: 60,
        backgroundColor: color.gray_50,
        alignSelf: 'flex-end',
        flexDirection: 'row'
    },
    TextInput:{
        marginLeft:20,
        fontSize:20
    }

})