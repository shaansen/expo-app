import React, { Component } from "react";
import { AppRegistry, View, Text, Stylesheet } from "react-native";
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
        <Toggle />
        <View style={styles.layout}>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>
    );
  }
}

const styles = {
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
};

AppRegistry.registerComponent("App", () => App);
