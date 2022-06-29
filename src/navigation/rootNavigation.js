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
import LinkedDevices from '../screen/satting/linkedDevices';
import NewBroadcase from '../screen/satting/newBroadcase';
import NewGroup from '../screen/satting/newGroup';
import Payments from '../screen/satting/payments';
import Settings from '../screen/satting/settings';
import StarredMessages from '../screen/satting/starredMessages';
import Account from '../screen/account/account';
import Privacy from '../screen/account/privacy';
import Lastseen from '../screen/account/lastseen';
import Profile from '../screen/account/profile';
import About from '../screen/account/about';
import Statusprofile from '../screen/account/statusprofile';
import Defaultmessage from '../screen/account/default message';
import Groups from '../screen/account/groups';
import Livelocation from '../screen/account/livelocation';
import Blocked from '../screen/account/blocked';
import Fingerprint from '../screen/account/fingerprint';
import Security from '../../src/security/security';
import Twostep from '../Threestep/twostep';
import Step from '../Threestep/step';
import Change from '../changenumber/change';
import Changenumber from '../changenumber/changenumber';
import Request from '../request/request';
import Delete from '../delete/delete';
import Chats from '../chats/chats';
import Wallpaper from '../chats/wallpaper';
import Chatbackup from '../chats/chatbackup';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MainHome'>
                {/* <Stack.Screen options={{headerShown: false}}  name="phoneNumber" component={PhoneNumber} />  */}
                <Stack.Screen options={{headerShown: false}} name="search" component={Search} />
                <Stack.Screen options={{headerShown: false}} name="openScreen" component={OpenScreen} />
                <Stack.Screen options={{headerShown: false}} name="logIn" component={LogIn} />
                <Stack.Screen options={{headerShown: false}} name="data" component={Data} />
                <Stack.Screen options={{headerShown: false}} name="loderChearching" component={LoderChearching} />
                <Stack.Screen options={{headerShown: false}} name="loderData" component={LoderData} />
                <Stack.Screen options={{headerShown: false}} name="addData" component={AddData} />
                <Stack.Screen options={{headerShown: false}} name="loder" component={Loder} />
                <Stack.Screen options={{headerShown: false}} name="dataStor" component={DataStor} />
                <Stack.Screen options={{headerShown: false}} name="loderScreen" component={LoderScreen} />
                <Stack.Screen options={{headerShown: false}} name="welcome" component={Welcome} />
                <Stack.Screen options={{headerShown: false}} name="loderFile" component={LoderFile} />
                <Stack.Screen options={{headerShown: false}} name="dataAdd" component={DataAdd} />
                <Stack.Screen options={{headerShown: false}} name="loderLogIn" component={LoderLogIn} />
                <Stack.Screen options={{headerShown: false}} name="welcometo" component={Welcometo} />
                <Stack.Screen options={{headerShown: false}} name="Screen" component={Screen} />
                <Stack.Screen options={{headerShown: false}} name="MainHome" component={MainHome} />
                <Stack.Screen options={{headerShown: false}} name="Photos" component={Photos} />
                <Stack.Screen options={{headerShown: false}} name="Videos" component={Videos} />
                <Stack.Screen options={{headerShown: false}} name="Links" component={Links} />
                <Stack.Screen options={{headerShown: false}} name="Gifs" component={Gifs} />
                <Stack.Screen options={{headerShown: false}} name="Audio" component={Audio} />
                <Stack.Screen options={{headerShown: false}} name="Documents" component={Documents} />
                <Stack.Screen options={{headerShown: false}} name="NewGroup" component={NewGroup} />
                <Stack.Screen options={{headerShown: false}} name="LinkedDevices" component={LinkedDevices} />
                <Stack.Screen options={{headerShown: false}} name="NewBroadcase" component={NewBroadcase} />
                <Stack.Screen options={{headerShown: false}} name="Payments" component={Payments} />
                <Stack.Screen options={{headerShown: false}} name="Settings" component={Settings} />
                <Stack.Screen options={{headerShown: false}} name="StarredMessages" component={StarredMessages} />
                <Stack.Screen options={{headerShown: false}} name="Account" component={Account} />
                <Stack.Screen options={{headerShown: false}} name="Privacy" component={Privacy} />
                <Stack.Screen options={{headerShown: false}} name="Lastseen" component={Lastseen} />
                <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
                <Stack.Screen options={{headerShown: false}} name="About" component={About} />
                <Stack.Screen options={{headerShown: false}} name="Statusprofile" component={Statusprofile} />
                <Stack.Screen options={{headerShown: false}} name="Defaultmessage" component={Defaultmessage} />
                <Stack.Screen options={{headerShown: false}} name="Groups" component={Groups} />
                <Stack.Screen options={{headerShown: false}} name="Livelocation" component={Livelocation} />
                <Stack.Screen options={{headerShown: false}} name="Blocked" component={Blocked} />
                <Stack.Screen options={{headerShown: false}} name="Fingerprint" component={Fingerprint} />
                <Stack.Screen options={{headerShown: false}} name="Security" component={Security} />
                <Stack.Screen options={{headerShown: false}} name="Twostep" component={Twostep} />
                <Stack.Screen options={{headerShown: false}} name="Step" component={Step} />
                <Stack.Screen options={{headerShown: false}} name="Change" component={Change} />
                <Stack.Screen options={{headerShown: false}} name="Changenumber" component={Changenumber} />
                <Stack.Screen options={{headerShown: false}} name="Request" component={Request} />
                <Stack.Screen name="Delete" component={Delete} />
                <Stack.Screen name="Chats" component={Chats} />
                <Stack.Screen name="Wallpaper" component={Wallpaper} />
                <Stack.Screen name="Chatbackup" component={Chatbackup} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;