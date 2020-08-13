import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  state = {
    zipcode: 11230,
    weatherData: null,
  }

  _onPressButton() {
  alert('You tapped the button!')
  }

  componentDidMount() {
    fetch(`https://api.worldweatheronline.com/premium/v1/astronomy.ashx?q=11230&date=today&key=${process.env.REACT_APP_WORLD_WEATHER}&format=json`)
     .then( r => r.json() )
     .then( data => {
       console.log("here it is:", data)
       this.setState({
         weatherData: data,
       })
     })
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
