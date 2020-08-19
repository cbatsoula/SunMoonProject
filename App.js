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
    const WORLD_WEATHER = process.env.REACT_APP_WORLD_WEATHER;
    // fetch(`https://api.worldweatheronline.com/premium/v1/astronomy.ashx?q=11230&date=today&key=${WORLD_WEATHER}&format=json`)
    //  .then( r => r.json() )
    //  .then( data => {
    //    console.log("here it is:", data)
    //    this.setState({
    //      weatherData: data,
    //    })
    //  })
  }


  render () {
    return (
      <View style={styles.container}>
      <StatusBar style="auto" />
        <Button
      onPress={this._onPressButton}
      title="yea"/>
      <View style={styles.landing}>
        <Text style={styles.text}>Hello world!!!</Text>
        <Text style={styles.text}>Hello world!!!</Text>
      </View>

      <View style={styles.starfive}>
        <TriangleUp style={styles.starfiveTop} />

        <View style={styles.starfiveBefore} />
        <View style={styles.starfiveAfter} />
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
    margin: 30,
    padding: 10,
  },
  landing: {
    backgroundColor: 'plum',
    color: 'ghostwhite',
    width: 250,
    height: 250,
    borderRadius: 250/2,

  },
starfive: {
  width: 150,
  height: 150,
},
starfiveTop: {
  position: 'absolute',
  top: -45,
  left: 37
},
starfiveBefore: {
  backgroundColor: 'transparent',
  position: 'absolute',
  left: 0,
  top: 0,
  borderStyle: 'solid',
  borderRightWidth: 100,
  borderRightColor: 'transparent',
  borderBottomWidth: 70,
  borderBottomColor: 'red',
  borderLeftWidth: 100,
  borderLeftColor: 'transparent',
  transform: [
    { rotate: '35deg'}
  ]
},
starfiveAfter: {
  backgroundColor: 'transparent',
  position: 'absolute',
  top: 0,
  left: -25,
  width: 0,
  height: 0,
  borderStyle: 'solid',
  borderRightWidth: 100,
  borderRightColor: 'transparent',
  borderBottomWidth: 70,
  borderBottomColor: 'red',
  borderLeftWidth: 100,
  borderLeftColor: 'transparent',
  transform: [
    { rotate: '-35deg'}
  ]
},
triangleUp: {
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderLeftWidth: 50,
  borderRightWidth: 50,
  borderBottomWidth: 100,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: 'red'
}
});
