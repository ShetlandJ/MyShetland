import React, { Component } from 'react';
import MapView from 'react-native-maps'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MapTemplate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
        region={{
          latitude: 59.32,
          longitude: 18.06,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});
