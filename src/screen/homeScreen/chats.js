import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity,Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../utils/color'

const Chats = (props) => {
    const data = [

        {
            Name: "India",
        
            secendName: "dera",
            Image: require('../../assets/images/Anshika.jpg'),
        },
        {
            Name: "ANKUSH",
        
            secendName: "KHAGA",
            Image: require('../../assets/images/priyanshu.jpg'),
        },
        {
            Name: "Anshu",
        
            secendName: "KHAGA",
            Image: require('../../assets/images/priyanshu.jpg'),
        },
        {
            Name: "NARESH",
    
            secendName: "KHAGA",
            Image: require('../../assets/images/Anshika.jpg'),
        },
        {
            Name: "India",
        
            secendName: "dera",
            Image: require('../../assets/images/Anshika.jpg'),
        },
        {
            Name: "India",
        
            secendName: "dera",
            Image: require('../../assets/images/Anshika.jpg'),
        },
    ]
    const [showTip, setTip] = useState(true);

    const renderListData = (listData) => {
        const { item, index } = listData;
        return (

            <ScrollView>
                <View style={styles.Container}>
                    <TouchableOpacity >
                        <View style={styles.Image} >
                            <TouchableOpacity style={styles.ViewStyleOne}>
                                <Image style={styles.ImageSix} resizeMode={'cover'} source={item.Image} />
                            </TouchableOpacity>

                            <View style={styles.flex} >
                                <Text style={styles.text}>{item.Name}</Text>
                                <Text style={styles.text}>{item.secendName}</Text>

                            </View>
                            <Text style={styles.texts}>{item.Text}</Text>
                        </View>
                    </TouchableOpacity>
                </View >
            </ScrollView>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, index,) => index.toString()}
                renderItem={renderListData}
            />
            <TouchableOpacity
            style={styles.ViewStyle}>
                <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/chats.png')} />
            </TouchableOpacity>
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
        marginLeft: 250,
        borderRadius: 50,
        margin: 15
    },
    ImagesStyles: {
        height: 25,
        width: 25,
        marginLeft: 12,
        marginTop: 12
    },
    ViewStyleOne: {
        height: 50,
        width: 50,
        marginLeft:30

    }
})

