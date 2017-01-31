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
  TouchableOpacity,
  Image,
  AlertIOS,
  Button
} from 'react-native';

import SideMenu from 'react-native-side-menu'


class Menu extends Component {
  render() {
    return (
      <View>
        <Text>menu 1</Text>
        <Text>menu 2</Text>
      </View>
    );
  }
}

const menu = <Menu />

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SideMenu menu={menu}>
        <View>
          <View>
            <TouchableOpacity onPress={this.handleMenu}>
              <Image source={require('./menu.png')}
                     style={{width: 25, height: 25, margin: 10}}  />
            </TouchableOpacity>
          </View>
        </View>
      </SideMenu>
    );
  }
  handleMenu () {
    AlertIOS.alert(
     'Sync Complete',
     'All your data are belong to us.'
    );
  }
}





const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:"#0097a7",
    height:45,
  }
});
