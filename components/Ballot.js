import React, { Component } from 'react';
import {
  Text, View, StyleSheet,
  TextInput, Button, Dimensions } from 'react-native';

import ListViewSelectExample from './ListViewExample';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.8;
const formHeight = height * 0.65;

export default class Ballot extends Component {
  state = {
    selectedOption: true,
    lessTraffic: false,
    moreCowbell: true
  }

  render() {
    return (
      <View>
        <ListViewSelectExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#3A4357',
    borderRadius: 10,
    width: formWidth,
    height: formHeight,
  },
  input: {
    height: 30,
  },
  button: {
    padding: 30,
    margin: 10
  }
});
