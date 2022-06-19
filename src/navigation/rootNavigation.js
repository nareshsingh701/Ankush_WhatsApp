import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/native'

import WhatsApp from '../screen/phoneNumberScreen/whatsApp';
import Calls from '../screen/calls';
import Screen from '../screen/screen';
import Status from '../screen/status';
import Camra from '../screen/camra';
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
import Url from '../screen/URL/url';
import DataAdd from '../screen/dataAdd/dataAdd';
import LoderFile from '../screen/otherScreen/loderFile';
import LoderLogIn from '../screen/otherScreen/loderLogIn'
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='openScreen'>
                <Stack.Screen options={{headerShown: false}} name="whatsApp" component={WhatsApp} />
                <Stack.Screen options={{headerShown: false}} name="screen" component={Screen} />
                <Stack.Screen  name="phoneNumber" component={PhoneNumber} /> 
                <Stack.Screen name="calls" component={Calls} />
                <Stack.Screen name="status" component={Status} />
                <Stack.Screen  name="camra" component={Camra} />
                <Stack.Screen name="search" component={Search} />
                <Stack.Screen name="openScreen" component={OpenScreen} />
                <Stack.Screen name="logIn" component={LogIn} />
                <Stack.Screen name="data" component={Data} />
                <Stack.Screen name="loderChearching" component={LoderChearching} />
                <Stack.Screen name="loderData" component={LoderData} />
                <Stack.Screen  name="addData" component={AddData} />
                <Stack.Screen  name="loder" component={Loder} />
                <Stack.Screen  name="dataStor" component={DataStor} />
                <Stack.Screen  name="loderScreen" component={LoderScreen} />
                <Stack.Screen   name="welcome" component={Welcome} />
                <Stack.Screen  name="url" component={Url} />
                <Stack.Screen  name="loderFile" component={LoderFile} />
                <Stack.Screen  name="dataAdd" component={DataAdd} />
                <Stack.Screen  name="loderLogIn" component={LoderLogIn} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;