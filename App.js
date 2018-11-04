import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, ScrollView } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxLargeRed}></View>
        <ScrollView horizontal>
          <View style={styles.boxSmall}></View>
          <View style={styles.boxSmall}></View>
          <View style={styles.boxSmall}></View>
        </ScrollView>
        <View style={styles.boxLargeBlue}></View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  boxLargeRed: {
    height: 500,
    width: 500,
    backgroundColor: 'red',
    margin: 10
  },
  boxLargeBlue: {
    height: 500,
    width: 500,
    backgroundColor: 'steelblue',
    margin: 10
  },
  boxSmall: {
    height: 200,
    width: 200,
    backgroundColor: 'maroon',
    margin: 10
  }
})

AppRegistry.registerComponent('App', () => App)
