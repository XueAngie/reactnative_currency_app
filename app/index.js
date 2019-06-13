import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { MainNavigator } from './router';

export default class App extends Component {
  render() {
    const Nav = MainNavigator()
    return (
      <View style={styles.container}>
        <Nav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
