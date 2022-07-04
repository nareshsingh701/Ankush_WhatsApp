import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,Modal } from 'react-native'
import React,{useState} from 'react'
import color from '../../utils/color'
import { DefaultTheme } from '@react-navigation/native'

const Livelocation = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Live location</Text>
            </View>
            <ScrollView>
            <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/25.jpg')} />
              
                <Text style={styles.TextThree}>You aren`t sharing live location in any chats</Text>
                <View style={styles.ViewFore}>

                </View>
                <Text style={styles.TextTwo}>Live location requires background location. You can manage this in your device setting.</Text>
            </ScrollView>
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
<View style={styles.Modal}>

</View>
        </Modal>
        </View>
    )
}

export default Livelocation

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
    TextStyle: {
        alignSelf: 'center',
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: color.B_00
    },
    TextTwoStyle: {
        marginHorizontal: 16,
        marginTop: 30,
        fontSize: 18,
        fontWeight: '600'
    },
    Images: {
        height:200,
        width: 200,
        alignSelf:'center',
        marginTop: 20
    },
    TextThree: {
        marginHorizontal: 30,
        fontSize: 17,
        marginTop: 10,
        fontWeight:'500',   
    },
    ViewFore:{
        borderWidth:0.4,
        marginTop:20
    },
    TextTwo:{
        marginHorizontal:30,
        marginTop:20,
        fontSize:16,
        fontWeight:'400',
    },
    Modal:{
        height:150,
        width:250,
        backgroundColor:color.teal_800
    }

})