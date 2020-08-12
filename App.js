import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  _onPressButton() {
  alert('You tapped the button!')
  }

  render () {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Hello world!!!</Text>
      <StatusBar style="auto" />
      <View style={styles.landing}>
        <Button
        onPress={this._onPressButton}
        title="yea"/>
      </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'firebrick',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'ghostwhite',
  },
  landing: {
    backgroundColor: 'plum',
    color: 'ghostwhite',
    width: 250,
    height: 100,
  }
});
