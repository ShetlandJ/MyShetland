import React, { Component } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MenuItem from './MenuItem'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.menu}>

        <View style={styles.container}>
          <MenuItem text="Potholes" />
        </View>

        <View style={styles.container}>
          <MenuItem text="Poor road surface" />
        </View>

        <View style={styles.container}>
          <MenuItem text="Road sign faults" />
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
});
