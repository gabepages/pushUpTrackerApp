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



export default class SignUpLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { emailText: '' , passwordText: ''};
  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.inputFieldSection}>
        <Text style={{ color:"#ffffff",fontSize:20, marginBottom:20}}>Sign Up or Login:</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(emailText) =>  {
            this.setState({emailText})
          }}
          value={this.state.emailText}
          placeholder="Email"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={(passwordText) =>  {
            this.setState({passwordText})
          }}
          value={this.state.passwordText}
          placeholder="Password"
        />
        <View style={{flexDirection: "row",}>
        <Button
          onPress={this.signUp}
          title="Sign Up"
          color="#fff"
          accessibilityLabel="Sign Up"
        />
        <Button
          onPress={this.login}
          title="Login"
          color="#fff"
          accessibilityLabel="Login"
        />
        </View>
      </View>
    );
  }
  signUp ()  {

  }
  login ()  {

  }
}



const styles = StyleSheet.create({
  inputFieldSection:{
    marginTop:100,
    alignItems: "center"
  },
  inputField:{
    height: 30,
    width:250,
    borderRadius: 12,
    margin: 10,
    color:"#000000",
    paddingLeft: 10,
    backgroundColor: "#ffffff"

  }
});
