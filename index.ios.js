/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from "firebase"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,TextInput
} from 'react-native';

import SignUpLogin from "./Signup-Login.js"
import Dashboard from "./Dashboard.js"

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);
// Initialize Firebase
var config = {
 apiKey: "AIzaSyBODxoQGXMZDXKgtae5KjKEL3sVLo5ooLQ",
 authDomain: "push-up-tracker.firebaseapp.com",
 databaseURL: "https://push-up-tracker.firebaseio.com",
 storageBucket: "push-up-tracker.appspot.com",
 messagingSenderId: "21535802496"
};
firebase.initializeApp(config);


export default class pushUpTrackerNative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenState: "home"
     };
  }
  render() {

    if(this.state.screenState == "dashboard"){
      return (
          <View style={styles.appBackground}>
            <MyStatusBar backgroundColor="#006064" barStyle="light-content" />
            <Text style={styles.headerText}>
              Push Up Tracker
            </Text>
            <Dashboard
                handleScreenState={this.handleScreenState.bind(this)}
                firebase={firebase}
              />
          </View>
      );
    }

    return (
    <View style={styles.appBackground}>
      <MyStatusBar backgroundColor="#006064" barStyle="light-content" />
      <Text style={styles.headerText}>
        Push Up Tracker
      </Text>
      <SignUpLogin
          handleScreenState={this.handleScreenState.bind(this)}
          firebase={firebase}
        />
    </View>
    );
  }
  handleScreenState(screenState) {
    this.setState({screenState})
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  appBackground:{
    flex:1,
    backgroundColor: '#0097a7',
    alignItems:"center"
  },

  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
  },
  headerText:{
    fontSize:30,
    textAlign: 'center',
    marginTop: 50,
    color: "#ffffff",
    fontFamily: "Helvetica Light"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('pushUpTrackerNative', () => pushUpTrackerNative);
