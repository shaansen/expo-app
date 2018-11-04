import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}> To-do App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: 'darkblue',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  }
})