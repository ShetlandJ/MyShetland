import React, { Component } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MenuItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
        <FontAwesome5 name={'chevron-right'} style={styles.chevron} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
  },
  chevron: {
    padding: 8,
    color: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
