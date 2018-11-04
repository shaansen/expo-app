import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet } from "react-native";
import Toggle from "./Toggle";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    };
  }

  render() {

    return (
      <View style={styles.container}>
        <Toggle 
          label={'Primary Axis (flexDirection)'}
          value={this.state.flexDirection}
          options={['row', 'column']}
          onChange={(option) => this.setState({flexDirection: option})}
        />
        <Toggle 
          label={'Distribution (justifyContent)'}
          value={this.state.justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
          onChange={(option) => this.setState({justifyContent: option})}
        />
        <Toggle 
          label={'Alignment (alignItems)'}
          value={this.state.alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch']}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <View style={styles.layout, this.state}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  layout: {
    flex: 1,
    backgroundColor: "silver"
  },
  box: {
    padding: 25,
    backgroundColor: "black",
    margin: 10
  }
});

AppRegistry.registerComponent("App", () => App);
