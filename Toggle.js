import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class Toggle extends Component {
  onPress = option => {
    const { onChange } = this.props;
    onChange(option);
  };

  renderOption = (option, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={
          (styles.options, option === this.props.value && styles.activeOption)
        }
        onPress={this.onPress.bind(this, option)}
      >
        <Text style={styles.text}>{option}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.label}</Text>
        <View style={styles.optionsContainer}>
          {this.props.options.map(this.renderOption)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingBottom: 20
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  option: {
    padding: 4,
    backgroundColor: "whitesmoke"
  },
  activeOption: {
    backgroundColor: "skyblue"
  },
  text: {
    padding: 4,
    fontSize: 14
  }
});
