import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'

import React, { useEffect } from 'react'

const Welcometo = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("MainHome")
        }, 3000);
    }, [])
    return (
        <View style={styles.container}>
             <View style={styles.View}>
                <ActivityIndicator size="large"
                    style={styles.ActivityIndicator}
                />
            </View>
            <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/home.jpg')} />
           
            
            </View>
    )
}

            export default Welcometo

            const styles = StyleSheet.create({
                container:{
                flex:1,

            alignItems:'center',
            justifyContent:'center',
            backgroundColor: '#fff',
            paddingHorizontal: 16,
            paddingBottom: 20
    },
            ImagesStyles: {
                height: 250,
            width: 250,
    },
            View:{
                height:100,
            width:300,
            backgroundColor:'#FFFF',
            borderRadius:10,
    
      },
            ActivityIndicator:{
                marginTop:30, 
        
      },
            Text:{
                textAlign:'center'
      }
})