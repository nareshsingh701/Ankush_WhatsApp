import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../utils/color'

const data = [

    {
        Name: "My status",
        secendName: "Top to add status update",
        Image: require('../../assets/images/Anshika.jpg'),
    },
    

]
const Status = (props) => {
    const renderListData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.Container}>

                <TouchableOpacity style={styles.Image} >
                    <Image style={styles.ImageSix} resizeMode={'cover'} source={item.Image} />
                    <View style={styles.flex} >
                        <Text style={styles.text}>{item.Name}</Text>
                        <Text style={styles.text}>{item.secendName}</Text>
                    </View>
                </TouchableOpacity>

            </View >
        )
    }
    return (
        <View style={{ flex: 1,backgroundColor:color.B_00 }}>
            <FlatList
                data={data}
                keyExtractor={(item, index,) => index.toString()}
                renderItem={renderListData}
            />
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20, marginBottom: 20 ,justifyContent:'flex-end'}}>
                <TouchableOpacity style={styles.ViewStyles}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/pan.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ViewStyle}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/three.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Status
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 20,
    },
    Image: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: color.B_00,
        padding: 5,

    },
    ImageSix: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 30
    },
    ViewStyle: {
        height: 50,
        width: 50,
        backgroundColor: color.teal_800,
        marginTop: 60,
        borderRadius: 50,
        position: 'absolute'
    },
    ViewStyles: {
        height: 40,
        width: 40,
        backgroundColor: color.gray_50,
        borderRadius: 50,
        marginRight: 8,
        position: 'absolute'
    },
    ImagesStyles: {
        height: 25,
        width: 25,
        marginLeft: 12,
        marginTop: 12
    },
    ImagesStyle: {
        height: 25,
        width: 25,
        marginLeft: 8,
        marginTop: 8
    }
})
