import React, { Component } from "react";
import { AppRegistry, View, Text, Stylesheet } from "react-native";
import Toggle from './Toggle';

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
      <View>
        <Text>Some Random Text here</Text>
        <Toggle />
      </View>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
