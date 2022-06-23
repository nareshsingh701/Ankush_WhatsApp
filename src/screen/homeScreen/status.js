import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity,   } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../utils/color'

const Status = (props) => {
    const data = [

        {
            Name: "My status",
            secendName: "Top to add status update",
            Image: require('../../assets/images/Anshika.jpg'),
        },
    ]
    const [showTip, setTip] = useState(true);
    const renderListData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.Container}>
                <ScrollView>
                    <TouchableOpacity >
                        <View style={styles.Image} >
                            <View style={styles.ViewThree}>
                                <Image style={styles.ImageSix} resizeMode={'cover'} source={item.Image} />
                            </View>
                            <View style={styles.flex} >
                                <Text style={styles.text}>{item.Name}</Text>
                                <Text style={styles.text}>{item.secendName}</Text>
                            </View>
                        
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View >
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, index,) => index.toString()}
                renderItem={renderListData}
            />
            <TouchableOpacity  style={styles.ViewStyles}>
            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/pan.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewStyle}>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/three.png')} />
            </TouchableOpacity>
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
        alignSelf: 'center',
        flexDirection: 'row',
        height: 60,
        width: 350,
        backgroundColor: color.B_00,
        padding: 5,
        margin: 1
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
         marginTop: 20,
        borderRadius: 50,
        marginLeft: 250
    },
    ViewStyles: {
        height: 40,
        width: 40,
        backgroundColor: color.gray_50,
         marginTop: 185,
        borderRadius: 50,
        marginLeft: 250
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
