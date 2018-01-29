import React, { Component } from 'react';
import {
  Text, View, StyleSheet,
  TextInput, Button, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.4;
const formHeight = height * 0.25;

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            underlineColorAndroid='gray'
            value={this.props.voter.first} />
        </View>
        <View>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            selectionColor='white'
            underlineColorAndroid='gray'
            value={this.props.voter.last} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'space-around',
    padding: 10,
    margin: 10,
    backgroundColor: '#3A4357',
    borderRadius: 10,
    width: formWidth,
    height: formHeight,
  },
  input: {
    height: 30,
    color: 'white',
  },
  button: {
    padding: 30,
    margin: 10
  },
  label: {
    fontWeight: 'bold',
    color: 'white'
  }
});
