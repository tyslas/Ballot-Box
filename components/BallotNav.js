import React, { Component } from 'react';
import { Text, Button, Dimensions, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const menuHeight = height * 0.1;
const buttonWidth = width * 0.1;

export default class BallotNav extends Component {
  state = {
    ballotClick: false,
    logoutClick: false,
    profileClick: false
  }

  handleBallotToggle = () => {
    let toggle = !this.state.profileClick;
    this.props.toggleBallot(toggle);
  }

  handleLogoutToggle = () => {
    let toggle = !this.state.logoutClick;
    console.log(toggle);
    this.props.logout(toggle);
  }

  handleProfileToggle = () => {
    let toggle = !this.state.ballotClick;
    this.props.toggleProfile(toggle);
  }

  render() {
    return (
      <View style={styles.menu}>
        <Button title='Ballot' color='gray' onPress={() => this.handleBallotToggle()} />
        <Button title='Logout' color='gray' onPress={() => this.handleLogoutToggle()} />
        <Button title='Profile' color='gray' onPress={() => this.handleProfileToggle()} />
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
