import React, { Component } from 'react';
import { View } from 'react-native';

import Title from './Title';
import Input from './Input';

export default class App extends Component {

  render() {
    return (
      <View>
        <Title/>
        <Input
          placeholder = {'Type a todo and then hit Enter!'}
        />
      </View>
    )
  }
}
