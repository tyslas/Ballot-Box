import React, { Component } from 'react';
import {
  Text, View, StyleSheet,
  TextInput, Button, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.8;
const formHeight = height * 0.65;

export default class Login extends Component {
  state = {
    voterKey: '',
    email: ''
  }

  // handleLogin = () => {
  //   let email = this.state.email
  //   let lowerEmail= email.replace(/[\W_]/g, '').toLowerCase()
  //
  //   let data = {
  //     voterKey: this.state.voterKey,
  //     email: lowerEmail
  //   }
  //   this.props.getVoter(data);
  // }
  //
  // changeKeyHandler = (key) => {
  //   //change state to new key
  //   console.log(key);
  //   this.setState({voterKey: key});
  //   console.log('[state] first name: ', this.state.voterKey);
  // }
  //
  // changeEmailHandler = (email) => {
  //   //change state to new email
  //   this.setState({email: email});
  //   console.log('[state] first name: ', this.state.email);
  // }

  render() {
    return (
      <View style={styles.formContainer}>
        <Text>Ballot Component</Text>
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
