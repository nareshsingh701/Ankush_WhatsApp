import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
//Custom Imports
import { Provider } from 'react-redux';
import store from './src/store/store'
// import Counter from './src/data/counter';
import Navigation from './src/navigation/rootNavigation'


const App = (props) => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Navigation />
        {/* <Counter /> */}
      </Provider>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})