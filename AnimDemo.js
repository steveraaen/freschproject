
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
    outputRange: [-20, 10]
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
      <View style={{flex: .1, flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 20}}>
        <Animated.View style={[styles.block, {marginLeft}, {opacity} ]}><Text style={styles.blockText}>Fres</Text> </Animated.View>
        <Animated.View style={[styles.blockb, {marginTop}, {opacity}]}><Text style={styles.blockTextb}>chen</Text> </Animated.View>
      </View>
        <View style={{flex: 1, marginLeft: 12, marginRight: 12}}>
        <View style={{marginBottom: 12}}>
        <Text style={{fontSize:20, color: 'white', lineHeight: 24, textAlign: 'justify'}}>
          Freschen isn’t a planner. It is a tracker. 
        </Text></View>
        <View><Text style={{fontSize:16, color: 'white'}} >
          Freschen will monitor the amount of time you can stay in Europe by periodically checking to see which country you’re in. 
          If you’ve been in a Schengen Area country within the last six months, press the Calendar Icon below, scroll back on the calendar and press the dates you were there. 
        
        </Text></View>
           <View style={{flex: .20 , marginLeft: 18, alignItems: 'center', marginTop: 39}}>
              <TouchableOpacity onPress={() => this.props.navigation.state.params.setModalVisible(true)}><Icon name="ios-calendar-outline" size={38} color="#F6FEAC" /></TouchableOpacity>
            </View>
</View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
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