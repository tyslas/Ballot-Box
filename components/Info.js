import React, { Component } from 'react';
import {
  Text, View, StyleSheet,
  TextInput, Button, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.85;
const formHeight = height * 0.5;

export default class Info extends Component {

  render() {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.title}>Monthly Free Pizza!</Text>
        <Text style={styles.bullets}>- Do you like pizza?</Text>
        <Text style={styles.bullets}>- Would you be happy to pick up a complimentary pizza each month?</Text>
        <Text style={styles.bullets}>- Then you should vote yes on this!</Text>
        <Text style={styles.bullets}>- Vote no, if you don't like pizza or you don't have heart 💔</Text>

        <Text>{'\n'}</Text>

        <Text style={styles.title}>Less Traffic!</Text>
        <Text style={styles.bullets}>- Do you want more infrastructure for public transportation? Then vote yes.</Text>
        <Text style={styles.bullets}>- Do you despise all transportation technologies, including trains, busses, cars? Then vote no</Text>

        <Text>{'\n'}</Text>

        <Text style={styles.title}>MORE COWBELL!</Text>
        <Text style={styles.bullets}>- Do you have an unquenchable thirst for the twang of cowbell? Then vote yes. 🐮🛎</Text>
        <Text style={styles.bullets}>- Do you wish for all cowbells to be collected, melted down, and repurposed? Then vote no</Text>
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
  bullets: {
    color: 'white',
  }
});
