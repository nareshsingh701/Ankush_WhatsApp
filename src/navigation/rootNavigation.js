import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/native'



import Search from '../screen/search';
import OpenScreen from '../screen/openScreen';
import LogIn from '../screen/login/logIn';
import Data from '../screen/data/data';
import Welcome from '../screen/welcomeToWhatsApp/welcome';
import PhoneNumber from '../screen/phoneNumberScreen/phoneNumber';
import Loder from '../screen/otherScreen/loder';
import DataStor from '../screen/dataStor/dataStor'
import LoderScreen from '../screen/otherScreen/loderScreen';
import AddData from '../screen/add/addData';
import LoderChearching from '../screen/otherScreen/loderChearching'
import LoderData from '../screen/otherScreen/loderData';
import DataAdd from '../screen/dataAdd/dataAdd';
import LoderFile from '../screen/otherScreen/loderFile';
import LoderLogIn from '../screen/otherScreen/loderLogIn'
import Welcometo from '../screen/welcomeToWhatsApp/welcometo';
import MainHome from '../screen/home';
import Screen from '../screen/screen';
import Photos from '../screen/modal/photos';
import Videos from '../screen/modal/videos';
import Links from '../screen/modal/links';
import Gifs from '../screen/modal/gifs';
import Audio from '../screen/modal/audio';
import Documents from '../screen/modal/documents';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MainHome'>
                {/* <Stack.Screen options={{headerShown: false}}  name="phoneNumber" component={PhoneNumber} />  */}
                <Stack.Screen name="search" component={Search} />
                <Stack.Screen name="openScreen" component={OpenScreen} />
                <Stack.Screen name="logIn" component={LogIn} />
                <Stack.Screen  name="data" component={Data} />
                <Stack.Screen name="loderChearching" component={LoderChearching} />
                <Stack.Screen name="loderData" component={LoderData} />
                <Stack.Screen  name="addData" component={AddData} />
                <Stack.Screen name="loder" component={Loder} />
                <Stack.Screen name="dataStor" component={DataStor} />
                <Stack.Screen name="loderScreen" component={LoderScreen} />
                <Stack.Screen name="welcome" component={Welcome} />
                <Stack.Screen name="loderFile" component={LoderFile} />
                <Stack.Screen name="dataAdd" component={DataAdd} />
                <Stack.Screen name="loderLogIn" component={LoderLogIn} />
                <Stack.Screen name="welcometo" component={Welcometo} />
                <Stack.Screen name="Screen" component={Screen} />
                <Stack.Screen  name="MainHome" component={MainHome} />
                <Stack.Screen  name="Photos" component={Photos} />
                <Stack.Screen  name="Videos" component={Videos} />
                <Stack.Screen  name="Links" component={Links} />
                <Stack.Screen  name="Gifs" component={Gifs} />
                <Stack.Screen  name="Audio" component={Audio} />
                <Stack.Screen  name="Documents" component={Documents} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;