import React from 'react'
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native'

//Custom Imports
// import store from './src/redux/store';
import Navigation from './src/navigation/rootNavigation'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Provider store={store}> */}
        <Navigation/>
       
      {/* </Provider> */}
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})