import { Col, Row, Grid } from "react-native-easy-grid";
import React, { Component } from 'react';
import MenuItem from './MenuItem'


import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

var NUMBERS = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six"
];


export default class Menu extends Component {



  render() {
    return (
      <React.Fragment>

        <View style={styles.menu}>
          <MenuItem icon='🚗' text='Roads' />
          <MenuItem icon='🗑' text='Litter & Rubbish' />
          <MenuItem icon='💡' text='Streetlights' />
          <MenuItem icon='📙' text='More Services' />
          <MenuItem icon='🚢' text='Ferry timetables' />
          <MenuItem icon='🚌' text='Bus timetables' />

        </View>

      </React.Fragment>

    );
  }
}

const styles = StyleSheet.create({

  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }


});
