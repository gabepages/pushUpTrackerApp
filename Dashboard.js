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

  render() {
    console.log(this.state, this.props);
    return (
      <View style={{flex:1}}>
        <View style={styles.header}>
          <Button
            onPress={() => console.log('Hello Wolrd')}
            title="Menu"
            color="#fff"
          />
          <Text style={{textAlign: "center"}}>Push Up Tracker</Text>
        </View>
        <View>
          <Text style={{textAlign: "center"}}>Hello World</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:"#0097a7",
    height:45,
  }
});
