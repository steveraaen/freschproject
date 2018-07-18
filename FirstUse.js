import React, { Component } from 'react';
import { Alert, Animated, AsyncStorage, Button,  NetInfo, Platform, ScrollView, StatusBar, StyleSheet, Image, Text, View, TouchableHighlight ,TouchableOpacity } from 'react-native';
import moment from 'moment'
import Intro from './Intro.js'
import DeviceInfo from 'react-native-device-info'
var sixMonthsAgo = moment().subtract(180, 'days').format('MMMM Do YYYY')

var blurb = `Your device will notify Freschen whenever you cross a border, and recalculate your eligible days automatically. \n\n If you have been to Europe during that period, tap "Yes" to view a calendar and mark the dates that you were in Europe. \n\n Have you been to Europe since ${sixMonthsAgo}?`
export default class FirstUse extends Component {
	constructor(props) {
		super(props);
		const deviceLocale = DeviceInfo.getDeviceCountry();
		this.state={locale: deviceLocale}
	}
	render() {

	/*	const { navigate } = this.props.navigation;*/
		return(
			<View style={{flex: 1, justifyContent: 'center', backgroundColor: 'black'}}>
			<Intro />
			<View style={{backgroundColor: 'black', margin: 14}}>
				<Text style={{textAlign: 'center', fontSize: 14, color: '#F6FEAC'}}>{blurb}</Text>
			</View>
			<Button	
				onPress={() => this.props.ackIn()}
				title="Yes"
				color="#FF6B4E"
				accessibilityLabel="I have been to Europe in the past six months"
			/>
			<Button	
				onPress={() => this.props.ackOut()} 
				title="No"
				color="#58FF67"
				accessibilityLabel="I have not been to Europe in the past six months"
			/>
			</View>
			)
	}
}