import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={{uri: 'https://images.alphacoders.com/102/102211.jpg'}}
      />
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})

AppRegistry.registerComponent('App', () => App)
