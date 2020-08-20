import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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

      <LinearGradient style={styles.lG}
        colors={['cornflowerblue', 'darkorchid', 'darkslategrey']}>
      <View style={styles.starLeft} />

      <View style={styles.starRight} />
      <View style={styles.landing}>
        <Button
          style={styles.button}
          color='firebrick'
          onPress={this._onPressButton}
          title="LOG IN"/>
        <Button
          style={styles.button}
          color='firebrick'
          onPress={this._onPressButton}
          title="SIGN UP"/>
      </View>

      <View style={styles.starRight} />
      <View style={styles.starLeft} />
      <View style={styles.starRight} />

      </LinearGradient>

    );

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'firebrick',

    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  text: {
    color: 'ghostwhite',
    margin: 30,
    padding: 10,

  },
  landing: {
    backgroundColor: 'firebrick',
    color: 'ghostwhite',
    width: 200,
    height: 200,
    borderRadius: 200/2,
    margin: 100,
    marginTop: 230,
    alignItems: 'center',
    justifyContent: 'center',



  },
  lG: {
    flex: 3,
    alignSelf: "stretch",
  },
  starLeft: {
    height: 3,
    width: 3,
    backgroundColor: 'tomato',
    zIndex: 1,
    borderRadius: 3/2,
    margin: 5,
  },
  starRight: {
    height: 3,
    width: 3,
    backgroundColor: 'ghostwhite',
    zIndex: 1,
    borderRadius: 3/2,
    left: 275,
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
