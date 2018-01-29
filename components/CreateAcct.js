import React, { Component } from 'react';
import {
  Text, View, StyleSheet,
  TextInput, Button, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.65;
const formHeight = height * 0.3;

export default class CreateAcct extends Component {
  state = {
    voterKey: '',
    email: '',
    first: '',
    last: '',
  }

  handleAddVoter = () => {
    let email = this.state.email
    let lowerEmail= email.replace(/[\W_]/g, '').toLowerCase()

    let data = {
      voterKey: this.state.voterKey,
      email: lowerEmail,
      first: this.state.first,
      last: this.state.last
    }

    this.props.addVoter(data);
  }

  changeKeyHandler = (key) => {
    //change state to new key
    this.setState({voterKey: key});
  }

  changeEmailHandler = (email) => {
    //change state to new email
    this.setState({email: email});
  }

  changeFirstHandler(fName) {
    //change state to new first
    this.setState({first: fName});
  }

  changeLastHandler(lName) {
    //change state to new last
    this.setState({last: lName});
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
        <TextInput
          style={styles.input}
          placeholder='first name'
          onChangeText={(e) => this.changeFirstHandler(e)}
          value={this.state.firstName} />
        <TextInput
          style={styles.input}
          placeholder='last name'
          onChangeText={(e) => this.changeLastHandler(e)}
          value={this.state.lastName} />
        <View>
          <Button
            style={styles.button}
            title='Register'
            color='gray'
            onPress={() => this.handleAddVoter()} />
        </View>
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
  },
  button: {
    margin: 5
  }
});
