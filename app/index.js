import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { MainNavigator } from './router';
import EStyleSheet from 'react-native-extended-stylesheet';


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


EStyleSheet.build({
  $primaryBlue: '#e8cd1a',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
});