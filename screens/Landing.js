import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import firebase from 'firebase';
import Firebase from '../components/firebase';

import CreateAcct from '../components/CreateAcct';
import Login from '../components/Login';

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
    // this.setState({createAcct: false, login: true});
    this.getVoter(data);
  }

  getVoter = (data) => {
    console.log('[getVoter]', data);

    // firebase
    //   .database()
    //   .ref("voters/" + data.email + data.password)
    //   .on("value", snapshot => {
    //     const user = snapshot.val();
    //     console.log(user)
    //     user !== null
    //       ? this.setState({
    //           loginData: user,
    //           modalVisible: false,
    //           buttonsloaded: false,
    //           fontloaded: false,
    //           console: styles.console,
    //           secondPage: true,
    //           welcomePage: true
    //         })
    //       : Alert.alert(
    //         'Incorrect Login',
    //         'Try Again',
    //         [
    //           {text: 'OK', onPress:() => console.log('ok'), style:'cancel'}
    //         ]
    //       );
    //   });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.createAcct ? (<CreateAcct addVoter={this.addVoter} />) : null}
        {this.state.login ? (<Login getVoter={this.getVoter} />) : null}
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
