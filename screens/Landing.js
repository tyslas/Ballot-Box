import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Image, Dimensions } from 'react-native';
import firebase from 'firebase';
import Firebase from '../components/firebase';

import CreateAcct from '../components/CreateAcct';
import Login from '../components/Login';
import Ballot from '../components/Ballot';

const logo = require('../assets/ballotbox-logo-blue.png');
const { width, height } = Dimensions.get('window');
const logoHeight = height * 0.2;
const logoWidth = width * 0.65;

export default class App extends Component {
  constructor() {
    super();

    Firebase.initialize();

    this.state = {
      loginData: null,
      createAcct: false,
      login: true,
      ballot: false
    };
  }

  addVoter = (data) => {
    // check to make sure that all fields are complete
    if (data.voterKey === '' || data.email === '' || data.first === '' || data.last === '' ) {
      console.log('please submit all fields');
      Alert.alert(
        'Submit all fields',
        'Please try again',
        [
          {text: 'OK', onPress:() => console.log('ok'), style:'cancel'}
        ]
      );
    }

    // add voter to Firebase
    firebase
      .database()
      .ref('voters/' + data.email + data.voterKey)
      .set({
        voterKey: data.voterKey,
        email: data.email,
        first: data.first,
        last: data.last,
      });
      console.log(data);
    this.setState({createAcct: false, login: true});
    this.getVoter(data);
  }

  getVoter = (data) => {
    console.log('[getVoter]', data);

    firebase
      .database()
      .ref("voters/" + data.email + data.voterKey)
      .on("value", snapshot => {
        const voter = snapshot.val();
        console.log('voter: ', voter)
        voter !== null
          ? this.setState({
              loginData: voter,
              createAcct: false,
              login: false,
              ballot: true
            })
          : Alert.alert(
            'Incorrect Login',
            'Try Again',
            [
              {text: 'OK', onPress:() => console.log('ok'), style:'cancel'}
            ]
          );
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={logo}
        />
        {this.state.createAcct ? (<CreateAcct addVoter={this.addVoter} />) : null}
        {this.state.login ? (<Login getVoter={this.getVoter} />) : null}
        {this.state.ballot ? (<Ballot />) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'flex-start',
  },
  logo: {
    width: logoWidth,
    height: logoHeight,
    resizeMode: 'contain',
  }
});
