import React, { Component } from 'react'
import { AppRegistry, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class Toggle extends Component {

  render() {
    const {label, options} = this.props

    return (
      <View>
        <Text>
          Toggle Here
        </Text>
      </View>
    )
  }
}
