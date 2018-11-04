import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      text: ''
    })
  }

  onChangeText = (text) => {
    this.setState({text})
  }


  onSubmitEditing = () => {
    this.props.addTodo(this.state.text);
    this.setState({text: ''})
  }


  render() {
    return (
      <TextInput 
        style = {styles.input}
        value = {this.state.text}
        placeholder = {this.props.placeholder}
        onChangeText = {this.onChangeText}
        onSubmitEditing = {this.onSubmitEditing}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50
  }
})