import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView ,Modal} from 'react-native'
import React,{useState} from 'react'
import color from '../../utils/color'
const Network = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} >
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/colorLeft.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Network usage</Text>
            </View>
            <ScrollView>
            <Text style={styles.Text}>Usege</Text>
            <Text style={styles.TextTwo}>Since 27/06/2020</Text>
            <Text style={styles.Three}>67.6<Text style={styles.Textfour}>  MB</Text></Text>
            <View style={styles.flex}>
                <View  >
                    <View style={styles.View}>
                        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/up.png')} />
                        <Text style={styles.TextThree}>send</Text>
                    </View>
                    <Text style={styles.TextFive}>10.3 MB</Text>
                </View>
                <View>
                    <View style={styles.View}>
                        <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/down2.png')} />
                        <Text style={styles.TextThree}>Received</Text>
                    </View>
                    <Text style={styles.TextFive}>57.5 MB</Text>
                </View>
            </View>
            <View style={styles.Viewwhidth}></View>
            <View style={styles.View}>
                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/call30.png')} />
                <Text style={styles.TextSeven}>Calls</Text>
                <View style={styles.ViewTwo}>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/up.png')} />
                    <Text style={styles.TextSix}>10.0 MB</Text>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/down2.png')} />
                    <Text style={styles.TextSix}>9.2 MB</Text>
                </View>
            </View>
            <View style={styles.ViewFour}>
                <View style={styles.ViewThree}>
                </View>
            </View>
            <Text style={styles.TextEight}>2 outgoing.2 incoming</Text>
            <View style={styles.View}>
                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/folder.png')} />
                <Text style={styles.TextSeven}>Media</Text>
                <View style={styles.ViewTwo}>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/up.png')} />
                    <Text style={styles.TextSix}>0 MB</Text>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/down2.png')} />
                    <Text style={styles.TextSix}>1.7 MB</Text>
                </View>
            </View>
            <View style={styles.ViewFour}>
                <View style={styles.ViewThrees}>
                </View>
            </View>
            <View style={styles.View}>
                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/drive.png')} />
                <Text style={styles.TextSeven}>Google Drive</Text>
                <View style={styles.ViewTwo}>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/up.png')} />
                    <Text style={styles.TextSix}>0 MB</Text>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/down2.png')} />
                    <Text style={styles.TextSix}>0 MB</Text>
                </View>
            </View>
            <View style={styles.ViewFour}>
            </View>
            <View style={styles.View}>
                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/chats.png')} />
                <Text style={styles.TextSeven}>Messages</Text>
                <View style={styles.ViewTwo}>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/up.png')} />
                    <Text style={styles.TextSix}>247 MB</Text>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/down2.png')} />
                    <Text style={styles.TextSix}>891 MB</Text>
                </View>
            </View>
            <View style={styles.ViewFour}>
                <View style={styles.ViewFive}>
                </View>
            </View>
            <Text style={styles.TextEight}>4 send.9 incoming</Text>
            <View style={styles.View}>
                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/storage.png')} />
                <Text style={styles.TextSeven}>Status</Text>
                <View style={styles.ViewTwo}>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/up.png')} />
                    <Text style={styles.TextSix}>0 MB</Text>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/down2.png')} />
                    <Text style={styles.TextSix}>46.0 MB</Text>
                </View>
            </View>
            <View style={styles.ViewFour}>
                <View style={styles.ViewSix}>
                </View>
            </View>
            <Text style={styles.TextEight}>0 send.242 received</Text>
            <View style={styles.View}>
                <Image resizeMode={'cover'} style={styles.ImagesThree} source={require('../../assets/images/roaming.png')} />
                <Text style={styles.TextSeven}>Roaming</Text>
                <View style={styles.ViewTwo}>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/up.png')} />
                    <Text style={styles.TextSix}>0 MB</Text>
                    <Image resizeMode={'cover'} style={styles.Imagesfour} source={require('../../assets/images/down2.png')} />
                    <Text style={styles.TextSix}>0 MB</Text>
                </View>
            </View>
            <View style={styles.ViewFour}>
            </View>
            <View style={styles.height}></View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.TextTen}>Reset statistics</Text>
            <Text style={styles.TextNine}>Last reset time: 27/06/2022, 10:13 am</Text>
            </TouchableOpacity>
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}
            
            >
<View style={{flex:1,justifyContent:'center'}}>
    <View style={styles.Modal}>
<Text style={styles.ModalText}>Reset network usage statistics?</Text>
<Text onPress={() => setModalVisible(!modalVisible)} style={styles.ModalTextTwo}>CANCEL<Text  onPress={() => setModalVisible(!modalVisible)}>     RESET</Text></Text>
    </View>
</View>
            </Modal>
            </ScrollView>
        </View>
    )
}

export default Network

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    TextStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 30,
        color: color.B_00
    },
    Text: {
        marginHorizontal: 60,
        marginTop: 30,
        fontSize: 17,
        fontWeight: '500',
        color: color.B_000
    },
    TextTwo: {
        marginHorizontal: 60,
        fontSize: 16
    },
    Three: {
        marginHorizontal: 60,
        marginTop: 20,
        fontSize: 30,
        fontWeight: '500'
    },
    Textfour: {
        fontSize: 16,
    },
    ImagesTwo: {
        height: 15,
        width: 15,
        marginTop: 30,
        marginLeft: 30
    },
    Imagesfour: {
        height: 15,
        width: 15,
        marginTop: 30,
        marginLeft: 10
    },
    ImagesThree: {
        marginHorizontal: 16,
        marginTop: 20,
        height: 30,
        width: 30
    },
    View: {
        flexDirection: 'row',

    },
    ViewTwo: {
        flexDirection: 'row',
        marginHorizontal: 70
    },
    TextThree: {
        marginTop: 25,
        fontSize: 16,
        fontWeight: '500'
    },
    TextFive: {
        marginHorizontal: 30,
        fontSize: 19,
        color: color.B_000,
        fontWeight: '500'
    },
    TextSix: {
        marginTop: 25,
        fontSize: 15,
        fontWeight: '500',
    },
    flex: {
        flexDirection: 'row',
        marginHorizontal: 30
    },
    Viewwhidth: {
        width: '85%',
        height: 0.4,
        backgroundColor: color.B_000,
        marginTop: 20,
        marginHorizontal: 60
    },
    TextSeven: {

        fontSize: 18,
        fontWeight: '500',
        color: color.B_000,
        marginTop: 20
    },
    TextTen: {
marginHorizontal:60,
        fontSize: 18,
        fontWeight: '500',
        color: color.B_000,
        marginTop: 20
    },
    ViewThree: {
       
        width: '30%',
        height: 3,
        backgroundColor: color.teal_800,
    },
    ViewSix: {
       
        width: '60%',
        height: 3,
        backgroundColor: color.teal_800,
    },
    ViewFive: {
       
        width: '1%',
        height: 3,
        backgroundColor: color.teal_800,
    },
    ViewThrees: {
       
        width: '2%',
        height: 3,
        backgroundColor: color.teal_800,
    },
    ViewFour: {
        marginHorizontal:60,
        marginTop: 10,
        width: '80%',
        height: 3,
        backgroundColor: color.gray_50,
        flexDirection: 'row',
    },
    TextEight:{
        marginHorizontal:60,
        marginTop:10,
        fontSize:15,
        fontWeight:'500'
    },
    TextNine:{
        marginHorizontal:60,
        fontSize:15,
        fontWeight:'500',
        marginBottom:30
    },
    height:{
        width:'100%',
        height:0.5,
        backgroundColor:color.B_000,
        marginTop:20
    },
    Modal:{
        height:120,
        width:'90%',
        backgroundColor:color.gray_50,
        alignSelf:'center',
        borderRadius:5
    },
    ModalText:{
        marginHorizontal:30,
        marginTop:20,
        fontSize:17,
        fontWeight:'500',
        color:color.B_000
    },
    ModalTextTwo:{
        marginTop:30,
        fontSize:18,
        fontWeight:'500',
        color:color.teal_800,
        marginLeft:150
    }
})