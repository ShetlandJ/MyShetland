import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default class Roads extends Component {
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, "props is here");

    return (
      <View style={styles.container}>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Rubbish')
          }
        />

        <Text>I'm the Roads component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
