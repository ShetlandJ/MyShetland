import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import Roads from '../Roads/Home'


import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello'
    };
  }

  render() {
    // const { navigate } = this.props.navigation;
    // console.log(this.props, "props is here");

    return (
      // <TouchableHighlight
      //   style={styles.container}
      //   onPress={() => navigate('Roads').bind(this)}
      //   >
      <View>
        <Text style={styles.menuItemText}>{this.props.icon}</Text>
        <Text style={styles.menuItemText}>{this.props.text}</Text>
      </View>
    // </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   height: 125,
  //   width: '40%',
  //   // backgroundColor: 'red',
  //   margin: 5,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  menuItemText: {
    fontSize: 20
  }
});
