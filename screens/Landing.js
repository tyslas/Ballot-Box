import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import firebase from 'firebase';
import Firebase from '../components/firebase';

import CreateAcct from '../components/CreateAcct';

export default class App extends Component {
  constructor() {
    super();

    Firebase.initialize();

    this.state = {
      loginData: null,
      createAcct: false,
      loggedIn: false,
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
  }

  getVoter = (data) => {

  }

  render() {
    return (
      <View style={styles.container}>
        <CreateAcct addVoter={this.addVoter} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
