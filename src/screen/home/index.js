import * as React from 'react';
import { Animated, View, TouchableOpacity, StyleSheet, Text, Image, Modal, TextInput, } from 'react-native';
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
    modalVisible: false,
    Visible: false,
    ViewVisible: false,
    mostVisible: false,
    bestVisible: false,
    foldVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  setVisible = (visible) => {
    this.setState({ Visible: visible });
  }
  setViewVisible = (visible) => {
    this.setState({ ViewVisible: visible });
  }
  setmostVisible = (visible) => {
    this.setState({ mostVisible: visible });
  }
  setbestVisible = (visible) => {
    this.setState({ bestVisible: visible });
  }
  setfoldVisible = (visible) => {
    this.setState({ foldVisible: visible });
  }

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
  renderHeader = () => {
    const { index } = this.state;
    if (index === 0) {
      return (
        <React.Fragment>
          <TouchableOpacity  style={styles.TouchableOpacity} onPress={() => this.setVisible(true)} >
            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/two.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setModalVisible(true)} >
            <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/home.png')} />
          </TouchableOpacity>
        </React.Fragment>
      )
    } else if (index === 1) {
      return (
        <React.Fragment>
          <TouchableOpacity  style={styles.TouchableOpacity} onPress={() => this.setViewVisible(true)} >
            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/two.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setmostVisible(true)} >
            <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/home.png')} />
          </TouchableOpacity>
        </React.Fragment>
      )
    } else if (index === 2) {
      return (
        <React.Fragment>
          <TouchableOpacity style={styles.TouchableOpacity} onPress={() => this.setbestVisible(true)} >
            <Image resizeMode={'cover'} style={styles.ImagesStyle} source={require('../../assets/images/two.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setfoldVisible(true)} >
            <Image resizeMode={'cover'} style={styles.Images} source={require('../../assets/images/home.png')} />
          </TouchableOpacity>
        </React.Fragment>
      )
    }
  }
  render() {
    const { modalVisible } = this.state;
    const { Visible } = this.state;
    const { ViewVisible } = this.state;
    const { mostVisible } = this.state;
    const { bestVisible } = this.state;
    const { foldVisible } = this.state;
    return (
      <View style={{ flex: 1, }}>
        <View style={styles.ViewStyle}>
          <Text style={styles.Text}>WhatsApp</Text>

          {this.renderHeader()}
          <Modal
            animationType="fade"
            transparent={true}
            visible={Visible}
            onRequestClose={() => {
              this.setVisible(!Visible);
            }}
          >
            <View style={styles.ModalStyle}>
              <TouchableOpacity onPress={() => this.setVisible(!Visible)}>
                <Image resizeMode={'cover'} style={styles.ImagesTwo} source={require('../../assets/images/Rite.png')} />
              </TouchableOpacity>
              <TextInput
                style={styles.TextInput}
                placeholder='Search...'
              />
            </View>
            <View style={styles.ModalView}>
              <View style={styles.ViewTwo}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Photos')} style={styles.ViewOne} >
                  <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/photo.png')} />
                  <Text style={styles.TextStyle}>photo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Videos')} style={styles.ViewOne} >
                  <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/Video2.png')} />
                  <Text style={styles.TextStyle}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Links')} style={styles.ViewOne} >
                  <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/Links.png')} />
                  <Text style={styles.TextStyle}>Links</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ViewTwo}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Gifs')} style={styles.ViewOne} >
                  <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/GIFs.png')} />
                  <Text style={styles.TextStyle}>GIFs</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Audio')} style={styles.ViewOne} >
                  <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/Audio.png')} />
                  <Text style={styles.TextStyle}>Audio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Documents')} style={styles.ViewOnes} >
                  <Image resizeMode={'cover'} style={styles.Image} source={require('../../assets/images/Documents.png')} />
                  <Text style={styles.TextStyle}>Documents</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.Modal}  >
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('NewGroup')}>
                <Text style={styles.ModalText} >New group</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=> this.props.navigation.navigate('NewBroadcase')}>
                <Text style={styles.ModalText} >New broadcase</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=> this.props.navigation.navigate('LinkedDevices')}>
                <Text style={styles.ModalText} >Linked devices</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=> this.props.navigation.navigate('StarredMessages')}>
                <Text style={styles.ModalText} >Starred messages</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Payments')}>
                <Text style={styles.ModalText} >payments</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Settings')}>
                <Text style={styles.ModalText} >Settings</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          {this.renderHeader()}
          <Modal
            animationType="fade"
            transparent={true}
            visible={ViewVisible}
            onRequestClose={() => {
              this.setViewVisible(!ViewVisible);
            }}
          >
            <View style={styles.ViewStyleModal}>
              <TouchableOpacity onPress={() => this.setViewVisible(!ViewVisible)}>
                <Image resizeMode={'cover'} style={styles.Imagethree} source={require('../../assets/images/Rite.png')} />
              </TouchableOpacity>
              <TextInput
                style={styles.TextInput}
                placeholder='Search...'
              />
            </View>
          </Modal>
          <Modal
            animationType="fade"
            transparent={true}
            visible={mostVisible}
            onRequestClose={() => {
              this.setmostVisible(!mostVisible);
            }}
          >
            <View style={styles.ViewFore}>
              <TouchableOpacity >
                <Text style={styles.TextStyleModal}>Staturs Privacy</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={styles.TextStyleModal}>Settings</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          {this.renderHeader()}
          <Modal
            animationType="fade"
            transparent={true}
            visible={bestVisible}
            onRequestClose={() => {
              this.setbestVisible(!bestVisible);
            }}
          >
            <View style={styles.ViewStyleModal}>
              <TouchableOpacity onPress={() => this.setbestVisible(!bestVisible)}>
                <Image resizeMode={'cover'} style={styles.Imagethree} source={require('../../assets/images/Rite.png')} />
              </TouchableOpacity>
              <TextInput
                style={styles.TextInput}
                placeholder='Search...'
              />
            </View>
          </Modal>
          <Modal
            animationType="fade"
            transparent={true}
            visible={foldVisible}
            onRequestClose={() => {
              this.setfoldVisible(!foldVisible);
            }}
          >
            <View style={styles.ViewFive}>
              <TouchableOpacity>
                <Text style={styles.TextTwo}>Settings</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
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
    backgroundColor: coloe.teal_800
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  ImagesStyles: {
    marginTop: 15,
    marginLeft: 15
  },
  ViewStyle: {
    backgroundColor: coloe.teal_800,
    flexDirection: 'row'
  },
  Text: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: coloe.B_00
  },
  ImagesStyle: {
    height: 20,
    width: 20,
    marginTop: 30,
   
  },
  Images: {
    height: 20,
    width: 20,
    marginTop: 30,
    marginLeft: 20
  },
  Modal: {
    height: 250,
    width: 200,
    marginLeft: 190,
    marginTop: 50,
    borderRadius: 5,
    backgroundColor: coloe.white
  },
  ModalText: {
    marginLeft: 20,
    marginTop: 10,
    padding: 5,
    color: coloe.B_000,
  },
  ModalStyle: {
    height: 50,
    width: '100%',
    borderBottomWidth: 0.5,
    backgroundColor: coloe.white,
    marginTop: 10,
    flexDirection: 'row'
  },
  TextInput: {
    marginLeft: 50,
  },
  ModalView: {
    height: 150,
    width: '100%',
    backgroundColor: coloe.white,
  },
  Image: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginTop: 10
  },
  ViewOne: {
    width: 100,
    height: 40,
    backgroundColor: coloe.gray_50,
    marginTop: 20,
    borderRadius: 20,
    marginLeft: 10,
    flexDirection: 'row'
  },
  ViewOnes: {
    width: 130,
    height: 40,
    backgroundColor: coloe.gray_50,
    marginTop: 20,
    borderRadius: 20,
    marginLeft: 10,
    flexDirection: 'row'
  },
  TextStyle: {
    fontWeight: '500',
    marginLeft: 5,
    marginTop: 10
  },
  ViewTwo: {
    flexDirection: 'row'
  },
  ImagesTwo: {
    marginTop: 10,
    marginLeft: 10
  },
  ViewStyleModal: {
    height: 50,
    width: '100%',
    backgroundColor: coloe.gray_50,
    flexDirection: 'row'
  },
  Imagethree: {
    marginTop: 15,
    marginLeft: 20
  },
  ViewFore: {
    height: 100,
    width: 250,
    backgroundColor: coloe.gray_50,
    marginLeft: 135,
    marginTop: 20,
    borderRadius: 5
  },
  TextStyleModal: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },
  ViewFive: {
    height: 50,
    width: 200,
    backgroundColor: coloe.gray_50,
    marginTop: 70,
    marginLeft: 185
  },
  TextTwo: {
    marginLeft: 20,
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold'
  },
  TouchableOpacity:{
    marginLeft:180
  },


});
