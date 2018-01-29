import React, { Component } from 'react';
import {
  Text, View, StyleSheet,
  TextInput, Button, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.6;
const formHeight = height * 0.3;

export default class Login extends Component {
  state = {
    voterKey: '',
    email: ''
  }

  handleLogin = () => {
    let email = this.state.email
    let lowerEmail= email.replace(/[\W_]/g, '').toLowerCase()

    let data = {
      voterKey: this.state.voterKey,
      email: lowerEmail
    }
    this.props.getVoter(data);
  }

  changeKeyHandler = (key) => {
    //change state to new key
    console.log(key);
    this.setState({voterKey: key});
    console.log('[state] first name: ', this.state.voterKey);
  }

  changeEmailHandler = (email) => {
    //change state to new email
    this.setState({email: email});
    console.log('[state] first name: ', this.state.email);
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
         style={styles.input}
         secureTextEntry
         placeholder='personal key'
         onChangeText={(e) => this.changeKeyHandler(e)}
         value={this.state.voterKey} />
        <TextInput
          style={styles.input}
          placeholder='email'
          onChangeText={(e) => this.changeEmailHandler(e)}
          value={this.state.email} />
        <Button
          style={styles.button}
          title='Login'
          color='gray'
          onPress={() => this.handleLogin()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    margin: 20,
    padding: 20,
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
