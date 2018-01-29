import React, { Component } from 'react';
import { Image, Text, Button, Dimensions, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const menuHeight = height * 0.05;
const bLogoHeight = height * 0.04;

const boxLogo = require('../assets/ballotbox-logo-box-solo-blue.png');

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.topBar}>
        <Image style={styles.boxLogo} source={boxLogo} />
      </View>
    );
  }

}

styles = StyleSheet.create({
  topBar: {
    height: menuHeight,
    width: width,
    backgroundColor: '#3A4357',
    borderRadius: 10,
  },
  boxLogo: {
    height: bLogoHeight,
  }
})
