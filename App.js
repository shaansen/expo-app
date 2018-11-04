import React, { Component } from 'react';
import { View } from 'react-native';

import Title from './Title';
import Input from './Input';
import List from './List';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: ['Cook Dinner', 'Play Spiderman', 'Learn React Native']
    }
  }

  onAddTodo  = (text) => {
    const {todos} = this.state

    this.setState({
      todos: [text, ...todos],
    })
  }

  onRemoveTodo = (i) => {

    this.setState({
      todos: this.state.todos.filter((x,y) => i !== y)
    })
  }

  render() {
    return (
      <View>
        <Title/>
        <Input
          placeholder = {'Type a todo and then hit Enter!'}
          addTodo = {this.onAddTodo}
        />
        <List 
          todos={this.state.todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}
