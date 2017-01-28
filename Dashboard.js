/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  TextInput,
  PixelRatio,
  Button
} from 'react-native';



export default class Dashboard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View>
          <Button
            onPress={this.signOut.bind(this)}
            title="Sign Out"
            color="#f00"
            accessibilityLabel="Sign Out"
          />
    </View>
    );
  }
  signOut (e) {
     e.preventDefault()
     let self = this
     this.props.firebase.auth().signOut().then(function() {
        self.props.handleScreenState('home');
      }, function(error) {
        alert(error)
      });
  }

}
