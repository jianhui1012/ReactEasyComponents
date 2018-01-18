/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ViewPagerPage from "./ViewPagerPage";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <ViewPagerPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
