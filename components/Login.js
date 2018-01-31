import React, { Component } from 'react';
import {
  Text, View, StyleSheet,
  TextInput, Button, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.65;
const formHeight = height * 0.2;

export default class Login extends Component {
  state = {
    voterKey: '55555',
    email: 'ty@gschool.com'
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
    this.setState({voterKey: key});
  }

  changeEmailHandler = (email) => {
    //change state to new email
    this.setState({email: email});
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
         style={styles.input}
         autoFocus
         secureTextEntry
         placeholder='personal key'
         placeholderTextColor='white'
         selectionColor='white'
         underlineColorAndroid='gray'
         onChangeText={(e) => this.changeKeyHandler(e)}
         value={this.state.voterKey} />
        <TextInput
          style={styles.input}
          placeholder='email'
          placeholderTextColor='white'
          selectionColor='white'
          underlineColorAndroid='gray'
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
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#3A4357',
    borderRadius: 10,
    width: formWidth,
    height: formHeight,
  },
  input: {
    height: 30,
    margin: 5,
    color: 'white',
  },
  button: {
    margin: 5,
  }
});
