import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React from 'react'
import color from '../utils/color'
const Chatbackup = (props) => {
    return (
        <View style={styles.container} >
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Chats')} >
                    <Image resizeMode={'cover'} style={styles.Images} source={require('../assets/images/colorLeft.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Light Theme Wallpaper</Text>
            </View>
            <ScrollView >
                <View style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/backup.png')} />
                    <Text style={styles.Backup}>Last Backup</Text>
                </View>
                <Text style={styles.TextTwo}>Back up  your messages and media to Google Drive. You can restore them when you reinstall WatsApp.Your messages will also back up to your phone`s internal storage.</Text>
                <Text style={styles.TextThree}>Local: 2:00 am</Text>
                <Text style={styles.Textfore}>Google Drive: Never</Text>
                <View style={styles.ViewTwo}>
                    <Text style={styles.BackupTwo}>BACK UP</Text>
                </View>
                <View style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/lock.png')} />
                    <Text style={styles.Backup}>End-ti-end encrypted backup</Text>
                </View>
                <Text style={styles.marginTop}>Off</Text>
                <View style={styles.ViewThree}></View>
                <View style={styles.flex}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/drive.png')} />
                    <Text style={styles.Backup}>Google Drive sattings</Text>
                </View>
                <Text style={styles.TextTwo}>Back up  your chat history and media to Google Drive. so if yor  change  phone`s your chat history is safe. For added security, you can protect your backup with end-to-end encryption.</Text>
                <TouchableOpacity>
                    <Text style={styles.TextThree}>Back up Google Drive</Text>
                    <Text style={styles.TextTwo}>Never</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.TextThree}>Google Account</Text>
                    <Text style={styles.TextTwo}>None selected</Text>
                </TouchableOpacity>
                <View style={styles.flexTwo}>
                    <Text style={styles.BackupThree}>Back up using cellular</Text>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/off2.png')} />
                </View>
                <View style={styles.flexThree}>
                    <Text style={styles.BackupThree}>Inclide videos</Text>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../assets/images/off2.png')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Chatbackup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.B_00
    },
    ViewStyle: {
        flexDirection: 'row',
        height: 100,
        width: '100%',
        backgroundColor: color.teal_800
    },
    Images: {
        marginHorizontal: 30,
        marginTop: 35,
        height: 30,
        width: 30
    },
    ImagesStyle: {
        marginHorizontal: 30,
        marginTop: 20,
        height: 30,
        width: 30
    },
    TextStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        color: color.B_00
    },
    flex: {
        flexDirection: 'row'
    },
    flexTwo: {
        flexDirection: 'row',
        justifyContent:'space-between',
    
    },
    flexThree: {
        flexDirection: 'row',
        justifyContent:'space-between',
marginBottom:30
    },
    Backup: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500'
    },
    TextTwo: {
        marginHorizontal: 50,
        marginTop: 10
    },
    TextThree: {
        marginHorizontal: 50,
        fontSize: 16,
        color: color.B_000,
        marginTop: 20
    },
    Textfore: {
        marginHorizontal: 50,
        fontSize: 16,
        color: color.B_000
    },
    ViewTwo: {
        height: 50,
        width: "30%",
        backgroundColor: color.teal_800,
        borderRadius: 5,
        marginHorizontal: 50,
        marginTop: 20
    },
    BackupTwo: {
        alignSelf: 'center',
        marginTop: 15,
        fontSize: 17,
        color: color.B_00
    },
    marginTop: {
        marginHorizontal: 90,
        fontSize: 17,
        fontWeight: '500'
    },
    ViewThree: {
        height: 1,
        width: '100%',
        backgroundColor: color.gray_50,
        marginTop: 20
    },
    BackupThree:{
        marginHorizontal:50,
        marginTop: 20,
        fontSize: 16,
        fontWeight: '500',
      
    }

})