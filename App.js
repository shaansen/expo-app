import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, ScrollView, FlatList } from 'react-native'

const rows = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
  {id: 10, text: 'View'},
  {id: 11, text: 'Text'},
  {id: 12, text: 'Image'},
  {id: 13, text: 'ScrollView'},
  {id: 14, text: 'ListView'},
  {id: 20, text: 'View'},
  {id: 21, text: 'Text'},
  {id: 22, text: 'Image'},
  {id: 23, text: 'ScrollView'},
  {id: 24, text: 'ListView'},
]

const extractKey = ({id}) => id

export default class App extends Component {
  
  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }
  
  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})

AppRegistry.registerComponent('App', () => App)
