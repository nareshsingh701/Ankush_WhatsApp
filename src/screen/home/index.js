import * as React from 'react';
import { Animated, View, TouchableOpacity, StyleSheet,Text,Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Calls from '../homeScreen/calls';
import Chats from '../homeScreen/chats';
import Status from '../homeScreen/status';
import coloe from '../../utils/color'



class MainHome extends React.Component {

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'CHATS' },
      { key: 'second', title: 'STATUS' },
      { key: 'third', title: 'CALLS' },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity>
        <Image resizeMode={'cover'} style={styles.ImagesStyles} source={require('../../assets/images/three.png')} />
        </TouchableOpacity>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  _renderScene = SceneMap({
    first: Chats,
    second: Status,
    third: Calls
  });
  render() {
    return ( 
    <View style={styles.container}>
    <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      /> 
      </View> 
    );
  }
}
export default MainHome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop:80,
    backgroundColor:coloe.teal_800
  },
  tabItem: { 
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  ImagesStyles:{
    marginTop:15,
    marginLeft:10
  }
});
