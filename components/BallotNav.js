import React, { Component } from 'react';
import { Text, Button, Dimensions, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const menuHeight = height * 0.1;
const buttonWidth = width * 0.1;

export default class BallotNav extends Component {
  state = {
    ballotClick: false,
    profileClick: false,
    infoClick: false,
    logoutClick: false
  }

  handleBallotToggle = () => {
    let toggle = !this.state.profileClick;
    this.props.toggleBallot(toggle);
  }

  handleProfileToggle = () => {
    let toggle = !this.state.ballotClick;
    this.props.toggleProfile(toggle);
  }

  handleInfoToggle = () => {
    let toggle = !this.state.infoClick;
    this.props.toggleInfo(toggle);
  }

  handleLogoutToggle = () => {
    let toggle = !this.state.logoutClick;
    this.props.logout(toggle);
  }

  render() {
    return (
      <View style={styles.menu}>
        <Button title='Ballot' color='gray' onPress={() => this.handleBallotToggle()} />
        <Button title='Profile' color='gray' onPress={() => this.handleProfileToggle()} />
        <Button title='Info' color='gray' onPress={() => this.handleInfoToggle()} />
        <Button title='Logout' color='gray' onPress={() => this.handleLogoutToggle()} />
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
  },
  button: {
    width: buttonWidth,
  }
})
