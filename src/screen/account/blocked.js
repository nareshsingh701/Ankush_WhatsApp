import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import color from '../../utils/color'
import { DefaultTheme } from '@react-navigation/native'

const data = [

    {
        countryName: "+99443ghsdf",
        Image: require('../../assets/images/Anshika.jpg'),
        
    },
    
    // {
    //     countryName: "+99445555443",
    //     Image: require('../../assets/images/Anshika.jpg'),
    // },
 
 
]
const Blocked = (props) => {
    const renderListData = (listData) => {
        const { item, index } = listData;
        return (
            <View style={styles.container}>
                <View style={styles.ViewStyle}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/LeftTwo.png')} />
                    </TouchableOpacity>
                    <Text style={styles.TextStyle}>Blocked contacts</Text>
                    <TouchableOpacity>
                        <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/add.png')} />
                    </TouchableOpacity>
                   
                </View>
                <Text style={styles.TextThree}>Contacts</Text>
                <TouchableOpacity >
                    <View style={styles.Image} >
                        <TouchableOpacity>
                            <Image resizeMode={'cover'} style={styles.ImageStyle} source={item.Image} />
                        </TouchableOpacity>
                            <Text style={styles.texts}>{item.countryName}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList

                data={data}
                keyExtractor={(item, index,) => index.toString()}
                renderItem={renderListData}
            />
        </View>
    )
}

export default Blocked

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.B_00
    },
    ViewStyle: {
        height: 100,
        width: '100%',
        backgroundColor: color.teal_800,
        flexDirection: 'row'
    },
    ImagesStyle: {
        marginLeft: 30,
        marginTop: 35,
        height: 30,
        width: 30
    },
    Images: {
        marginLeft: 80,
        marginTop: 40,
        height: 30,
        width: 30
    },
    TextStyle: {
        alignSelf: 'center',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: color.B_00
    },
    TextTwoStyle: {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 17,
        fontWeight: '700'
    },
    Image: {
      flexDirection:'row',
        height: 60,
        width: '100%',
        backgroundColor: color.B_00,
        marginTop:30,
        
    },
    ImageStyle: {
        height: 50,
        width: 50,
        marginLeft: 30,
        borderRadius: 50
    },
    flex: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 20,
        marginTop: 20,
    },
    texts: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
        marginLeft: 50
    },
    TextThree: {
        marginTop: 20,
        fontSize:17,
        fontWeight:'500',
        marginLeft:30
    }
})