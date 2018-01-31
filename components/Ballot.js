import React, { Component } from 'react';
import {
  Text, View, StyleSheet,
  TextInput, Button, Dimensions } from 'react-native';

import CheckBox from './Checkbox';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.85;
const formHeight = height * 0.6;

export default class Ballot extends Component {
  state = {
    selectedOption: true,
    lessTraffic: false,
    moreCowbell: true
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.title}>Shall there be an amendment to the Colorado constitution concerning a reduction in the age qualification for a member of the general assembly from twenty-five years to twenty-one years?</Text>
        <Text>{'\n'}</Text>
        <CheckBox />
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
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
});
