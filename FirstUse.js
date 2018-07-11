import React, { Component } from 'react';
import { Alert, Animated, AsyncStorage, Button,  NetInfo, Platform, ScrollView, StatusBar, StyleSheet, Image, Text, View, TouchableHighlight ,TouchableOpacity } from 'react-native';
import Intro from './Intro.js'
var blurb = `If you have been to Europe in the past six months, your device will notify Freschen whenever you cross a border, and recalculate your eligible days automatically. \n\n If you HAVE been to Europe during that period, tap "Yes" to view a calendar and mark the dates that you were in Europe. \n\n Have you been to Europe in the past six months?`
export default class FirstUse extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<View style={{flex: 1, justifyContent: 'center', backgroundColor: 'black'}}>
			<Intro />
			<View style={{backgroundColor: 'black', margin: 14}}>
				<Text style={{ fontSize: 14, color: 'pink'}}>{blurb}</Text>
			</View>
			<Button
			  
			  title="Yes"
			  color="#FF6B4E"
			  accessibilityLabel="I have been to Europe in the past six months"
			/>
			<Button
			 
			  title="No"
			  color="#58FF67"
			  accessibilityLabel="I have not been to Europe in the past six months"
			/>
			</View>
			)
	}
}