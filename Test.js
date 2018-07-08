import React, { Component } from 'react';
import { Animated, AppRegistry, Easing, LayoutAnimation, Platform, StyleSheet, Image, Text, View, ProgressViewIOS, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
var lineColors = {
  ace: {
    color: "#4D96FF", 
    routeArray: ["A", "C", "E"]
  },
  bdfm: {
    color: "#FF6319", 
    routeArray: ["B", "D", "F", "M"]
  },
  g: {
    color: "#6CBE45", 
    routeArray: ["G"]
  },
  jz: {
    color: "#996633", 
    routeArray: ["J", "Z"]
  },
  nqrw: {
    color: "#FCCC0A", 
    routeArray: ["N", "Q", "R", "W"]
  },
/*  s: {
    color: "#808183", 
    routeArray: ["S"]
  },*/
  oneTwoThree: {
    color: "#EE352E", 
    routeArray: ["1", "2", "3"]
  },
  fourFiveSix: {
    color: "#00933C", 
    routeArray: ["4", "5", "6", "5X", "6X"]
  },
  si: {
    color: "#4D96FF", 
    routeArray: ["S"]
  },
  l: {
    color: "#A7A9AC",
     routeArray: ["L", "9"]
  },
  seven: {
    color: "#B933AD",
     routeArray: ["7"]
  }
 }
var nearbySubways = ["N", "E", "A", "R", "B", "Y",]


export default class Test extends Component{
	constructor(props){
	super(props);
	this.state={
		lineColors: lineColors
	}
	this.animatedValue = new Animated.Value(0)
/*	this.spinValue = new Animated.Value(0)
	this.spin = this.spin.bind(this)*/
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
render() {
	var lines=[]
	  for(let lne in this.state.lineColors) {
	  		for(let i = 0; i < lineColors[lne].routeArray.length; i++) {
	  			
	  			var line = (
	  				<View key={lineColors[lne].routeArray[i]}style ={{borderRadius: 36, backgroundColor: lineColors[lne].color, height: 36, width: 36, alignItems: 'center', justifyContent: 'center'}}>
	  					<Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center', position: 'absolute'}}>{lineColors[lne].routeArray[i]}</Text>
	  				</View>
	  				)
	  		lines.push(line)
	  	}
	 }
	 return(
	<View style={{justifyContent: 'center'}}>
	<View style= {{flexDirection: 'row', flexWrap: 'wrap', margin: 12}}>
		{lines}
	</View>
		<View style= {{flexDirection: 'row', flexWrap: 'wrap', margin: 12}}>


		</View>
	</View>
	)
}
}