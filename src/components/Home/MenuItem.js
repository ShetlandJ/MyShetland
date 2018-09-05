/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MenuItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Icon</Text>
        <Text>Heck</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 125,
    width: '40%',
    backgroundColor: 'red',
    margin: 5
  },
});
