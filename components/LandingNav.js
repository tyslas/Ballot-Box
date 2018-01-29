import React, { Component } from 'react';
import { Text, Button, Dimensions, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const menuHeight = height * 0.1;
const buttonWidth = width * 0.1;

export default class LandingNav extends Component {
  state = {
    registerClick: false,
    loginClick: false
  }

  handleLoginToggle = () => {
    let toggle = !this.state.loginClick;
    this.props.toggleRegister(toggle);
  }

  handleRegisterToggle = () => {
    let toggle = !this.state.registerClick;
    this.props.toggleCreateAcct(toggle);
  }

  render() {
    return (
      <View style={styles.menu}>
        <Button title='Login' color='gray' onPress={() => this.handleLoginToggle()} />
        <Button title='Register' color='gray' onPress={() => this.handleRegisterToggle()} />
      </View>
    );
  }

}

styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: menuHeight,
    width: width,
    backgroundColor: '#3A4357',
    borderRadius: 10,
  },
  button: {
    width: buttonWidth,
  }
})
