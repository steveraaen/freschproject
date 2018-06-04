
import React, { Component } from 'react';
import { Animated, AppRegistry, Easing, Platform, StyleSheet, Image, Text, View, ProgressViewIOS, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
export default class AnimDemo extends Component {
        static navigationOptions = {
        header: null
    }  
  constructor (props) {
  	super(props)
    this.animatedValue = new Animated.Value(0)
    this.animatedValueA = new Animated.Value(0.2)
    this.animate = this.animate.bind(this)
  }  
  animate (easing) {
    this.animatedValue.setValue(0)
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1, 
          duration: 1500,
          easing
        }
    ).start()
  }
  componentDidMount() {

    this.animate()
  }
  render () {
    const { navigate } = this.props.navigation;
  const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100]
  })
  const opacity = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  const marginTop = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [80, 10]
  })
  const textSize = this.animatedValue.interpolate({
    inputRange: [0.5, 1],
    outputRange: [18, 32]
  })
  const rotateX = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '0deg']
  })
    return (
      <View style={styles.container}>
        <View style={{marginTop: 32, marginLeft: 22,flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TouchableOpacity onPress={() => navigate('App')}><Icon name="ios-arrow-round-back-outline" size={40} color='#5078F8' /></TouchableOpacity>
        </View>
      <View style={{flex: .3, flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Animated.View style={[styles.block, {marginLeft}, {opacity} ]}><Text style={styles.blockText}>Fres</Text> </Animated.View>
        <Animated.View style={[styles.blockb, {marginTop}, {opacity}]}><Text style={styles.blockTextb}>chen</Text> </Animated.View>
      </View>
      <View style={{flex: 1, margin: 22}}><Text style={{fontSize:16, color: 'white', letterSpacing: 4}}>
Freshen checks your location every four hours. And displays how many days you are eligible to stay in the Schengen area. It is a tracker, not a planner. 
How It Works:
If you’ve been to Europe within the past six months:
Scroll back to mark the dates you’ve been in the Schengen area, then decide if we should notify you when your eligibility is almost over. 
If you haven’t been to Europe in the past six months:
Don’t do anything, except to authorize the app to access your location. 
Note, the app doesn’t continuously track your location. It “wakes up” several times per day to find what country you’re in. 

</Text></View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  button: {
  	height: 60,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  blockText: {
    color: '#5078F8', 
    fontSize:30, 
    letterSpacing: 6,
    textAlign: 'center'
  },
  blockTextb: {
    color: '#F6FEAC', 
    fontSize:30, 
    letterSpacing: 6,
    textAlign: 'center'
  },
  block: {
    marginTop: 10,
    height: 40,
   
    justifyContent: 'center'
  },
  blockb: {
    marginTop: 10,
    height: 40, 
    justifyContent: 'center'
  }
});