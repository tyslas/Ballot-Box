import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Image, Dimensions } from 'react-native';
import firebase from 'firebase';
import Firebase from '../components/firebase';

import CreateAcct from '../components/CreateAcct';
import Login from '../components/Login';
import Ballot from '../components/Ballot';
import TopBar from '../components/TopBar';
import LandingNav from '../components/LandingNav';
import BallotNav from '../components/BallotNav';
import Profile from '../components/Profile';

const logo = require('../assets/ballotbox-logo-blue.png');
const { width, height } = Dimensions.get('window');
const logoHeight = height * 0.2;
const logoWidth = width * 0.65;
const boxLogo = require('../assets/ballotbox_wht_favicon.png');
// const bLogoHeight = height * 0.04;
// const bLogoWidth = width * 0.2;
const menuHeight = height * 0.08;

export default class App extends Component {
  constructor() {
    super();

    Firebase.initialize();

    this.state = {
      loginData: null,
      createAcct: false,
      login: false,
      ballot: true,
      profile: false
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

  toggleCreateAcct = (click) => {
    this.setState({createAcct: click, login: !click});
  }

  toggleRegister = (click) => {
    this.setState({createAcct: !click, login: click});
  }

  toggleBallot = (click) => {
    this.setState({ballot: click, profile: !click});
  }

  toggleProfile = (click) => {
    this.setState({ballot: !click, profile: click});
  }

  handleLogout = (click) => {
    this.setState({createAcct: click, ballot: !click, profile: !click})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.topBar}>
            <Image source={boxLogo} />
          </View>
          {(this.state.ballot || this.state.profile) ? null :
            <Image
              style={styles.logo}
              source={logo} />}

          {this.state.profile ? <Profile /> : null}

          {this.state.createAcct ? (<CreateAcct addVoter={this.addVoter} />) : null}
          {this.state.login ? (<Login getVoter={this.getVoter} />) : null}
          {this.state.ballot ? (<Ballot />) : null}
        </View>

        {(this.state.ballot || this.state.profile) ?
          (<BallotNav
            toggleBallot={this.toggleBallot}
            logout={this.handleLogout}
            toggleProfile={this.toggleProfile} />) : null}
        {(this.state.login || this.state.createAcct) ?
          (<LandingNav
            toggleCreateAcct={this.toggleCreateAcct}
            toggleRegister={this.toggleRegister}/>) : null}
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
    justifyContent: 'space-between',
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: logoWidth,
    height: logoHeight,
    resizeMode: 'contain',
  },
  topBar: {
    height: menuHeight,
    width: width,
    backgroundColor: '#3A4357',
    justifyContent: 'center',
  },
  boxLogo: {
    marginRight: 10,
    resizeMode: 'contain',
  }
});
