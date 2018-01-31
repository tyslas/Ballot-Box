import React, { Component } from 'react';
import {
  Text, View, StyleSheet, ScrollView,
  TextInput, Button, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const formWidth = width * 0.85;
const formHeight = height * 0.7;

export default class Info extends Component {

  render() {
    return (
      <View style={styles.formContainer}>
        <ScrollView>
          <Text style={styles.title}>The Colorado Age Qualification for General Assembly Members Amendment is on the ballot in Colorado as a legislatively referred constitutional amendment on November 6, 2018</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.bullets}>- A "yes" vote supports this amendment to reduce the age qualification from 25 to 21 for citizens to be members of the state House of Representatives or state Senate.</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.bullets}>- A "no" vote opposes this amendment to reduce the age qualification from 25 to 21 for citizens to be members of the state House of Representatives or state Senate.</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.bullets}>- Due to the passage of Amendment 71 in 2016, a 55 percent vote at the ballot box is required to pass this amendment.</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.bullets}>- In 2008, voters rejected Referendum L, a similar amendment designed to reduce the age qualification from 25 to 21 for electors to be members of the legislature. The vote was 46.5 percent in support to 53.5 percent against.</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.title}>Constitutional Changes</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.bullets}>- The measure would amend Section 4 of Article V of the Colorado Constitution. The following underlined text would be added, and struck-through text would be deleted:</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.bullets}>- No person shall be a representative or senator who shall not have attained the age of twenty-five twenty-one years, who shall not be a citizen of the United States, and who shall not for at least twelve months next preceding his or her election, have resided within the territory included in the limits of the district in which he shall be chosen.</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#3A4357',
    borderRadius: 10,
    width: formWidth,
    height: formHeight,
  },
  input: {
    height: 30,
  },
  button: {
    padding: 30,
    margin: 10
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  bullets: {
    color: 'white',
  }
});
