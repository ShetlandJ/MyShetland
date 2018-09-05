/* @flow */

import React, { Component } from 'react';
import Header from './Header'
import Menu from './Menu'

import StatusBar from '../Global/StatusBar'


import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <StatusBar />
        <Header />
        <Menu />
      </React.Fragment>
    );
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
