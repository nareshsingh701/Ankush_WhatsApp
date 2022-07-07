import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,Linking } from 'react-native'
import React,{useState} from 'react'
import color from '../../utils/color'
import { DefaultTheme } from '@react-navigation/native'
import CircleCheckBox, { LABEL_POSITION } from 'react-native-circle-checkbox';
const Groups = (props) => {
    const [dataone, setDataOne] = useState(false)
    const [datatwo, setDataTwo] = useState(false)
    const [datathree, setDataThree] = useState(false)
    const one =()=>{
        setDataOne(true);
        setDataTwo(false);
        setDataThree(false);

    }
    const two =()=>{
        setDataOne(false)
        setDataTwo(true);
        setDataThree(false);

    }

    const three =()=>{
        setDataOne(false)
        setDataTwo(false);
        setDataThree(true);

    }
    return (
        <View style={styles.container}>
            <View style={styles.ViewStyle}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/LeftTwo.png')} />
                </TouchableOpacity>
                <Text style={styles.TextStyle}>Groups</Text>
            </View>
            <ScrollView>
                
                <Text style={styles.TextTwoStyle}>who can add me to groups</Text>
                <View style={styles.flex}>
                <CircleCheckBox
                    checked={dataone}
                    onToggle={() => one()}
                    labelPosition={LABEL_POSITION.RIGHT}
                    outerColor='#00695C'
                    innerColor='#00695C'
                    filterSize='20'
                    innerSize='12'
                />
                    <Text style={styles.TextStyleTwo}>Everyone</Text>
                </View>
                <View style={styles.flex}>
                <CircleCheckBox
                    checked={datatwo}
                    onToggle={() => two()}
                    labelPosition={LABEL_POSITION.RIGHT}
                    outerColor='#00695C'
                    innerColor='#00695C'
                    filterSize='20'
                    innerSize='12'
                />
                    <Text style={styles.TextStyleTwo}>My contacts</Text>
                </View>
                <View style={styles.flex}>
                <CircleCheckBox
                    checked={datathree}
                    onToggle={() => three()}
                    labelPosition={LABEL_POSITION.RIGHT}
                    outerColor='#00695C'
                    innerColor='#00695C'
                    filterSize='20'
                    innerSize='12'
                />
                    <Text style={styles.TextStyleTwo}>My contacts except...</Text>
                </View>
              
                <Text style={styles.TextThree}>Admins who can`t add you to a group chat will have the option of inviting you privately instead.</Text>
            </ScrollView>
        </View>
    )
}

export default Groups

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
    flex: {
        flexDirection: 'row',
        marginHorizontal:30,
        marginTop:20
    },
    TextStyleTwo: {
        fontSize: 17,
        marginHorizontal: 30,
        fontWeight: '500',
        color: color.B_000
    },
 
    TextThree: {
        marginHorizontal: 16,
        fontSize: 16,
        marginTop: 30
    },
    ImagesTwo: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 20
    },
    Textfore:{
        color:color.Blue_50
    }

})