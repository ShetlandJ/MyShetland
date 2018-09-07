import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import Roads from '../Roads/Home'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


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
      //   >
      <View style={styles.container}>
        <FontAwesome5 name={this.props.name} />
        <Text style={styles.menuItemText}>{this.props.text}</Text>
      </View>
     // </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: 125,
    // margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 20
  }
});
