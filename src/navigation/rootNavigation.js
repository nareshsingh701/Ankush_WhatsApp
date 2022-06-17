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
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='openScreen'>
                <Stack.Screen options={{headerShown: false}} name="whatsApp" component={WhatsApp} />
                <Stack.Screen options={{headerShown: false}} name="screen" component={Screen} />
                <Stack.Screen options={{headerShown: false}} name="phoneNumber" component={PhoneNumber} /> 
                <Stack.Screen options={{headerShown: false}} name="calls" component={Calls} />
                <Stack.Screen options={{headerShown: false}} name="status" component={Status} />
                <Stack.Screen options={{headerShown: false}} name="camra" component={Camra} />
                <Stack.Screen options={{headerShown: false}} name="search" component={Search} />
                <Stack.Screen options={{headerShown: false}} name="openScreen" component={OpenScreen} />
                <Stack.Screen  options={{headerShown: false}} name="logIn" component={LogIn} />
                <Stack.Screen options={{headerShown: false}} name="data" component={Data} />
                <Stack.Screen options={{headerShown: false}} name="loderChearching" component={LoderChearching} />
                <Stack.Screen options={{headerShown: false}} name="loderData" component={LoderData} />
                <Stack.Screen options={{headerShown: false}} name="addData" component={AddData} />
                <Stack.Screen  options={{headerShown: false}} name="loder" component={Loder} />
                <Stack.Screen  options={{headerShown: false}} name="dataStor" component={DataStor} />
                <Stack.Screen options={{headerShown: false}} name="loderScreen" component={LoderScreen} />
                <Stack.Screen  options={{headerShown: false}} name="welcome" component={Welcome} />
                <Stack.Screen  options={{headerShown: false}} name="url" component={Url} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;