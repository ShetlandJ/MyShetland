/* @flow */

import React, { Component } from 'react';
import Header from './Header';
import Roads from '../Roads/Home';
import Rubbish from '../Rubbish/Home';

import Menu from './Menu'

// import { Button, View, Text } from 'react-native'


import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import StatusBar from '../Global/StatusBar'


import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar />
        <Header />
        <Menu
          navigation={this.props.navigation}
        />
      </React.Fragment>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },

    Roads: {
      screen: Roads,
      navigationOptions: {
        title: "Roads"
      }
    },
    Rubbish: {
      screen: Rubbish,
      navigationOptions: {
        title: "Litter & Rubbish"
      }
    },
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menu: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50
  }
});
