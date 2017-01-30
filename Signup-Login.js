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
  constructor(props){
    super(props);
    this.state = { emailText: '' , passwordText: ''};

    this.props.firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        props.changeScreenState('dashboard')
      }
    });
  }
  render() {
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
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={(passwordText) =>  {
            this.setState({passwordText})
          }}
          value={this.state.passwordText}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <View style={styles.buttons}>
          <Button
            onPress={this.signUp.bind(this)}
            title="Sign Up"
            color="#fff"
            accessibilityLabel="Sign Up"
          />
          <Button
            onPress={this.login.bind(this)}
            title="Login"
            color="#fff"
            accessibilityLabel="Login"
          />
        </View>
    </View>
    );
  }
  signUp (e) {
   e.preventDefault();
   var email = this.state.emailText;
   var password = this.state.passwordText;
   this.props.firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
  });
}
  login (e)  {
    e.preventDefault();
    var email = this.state.emailText;
    var password = this.state.passwordText;
    this.props.firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
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
  },
  buttons: {
    flex: 1,
    flexDirection: "row"
  }
});
