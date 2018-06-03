    console.disableYellowBox = true
import React, { Component } from 'react';
import { Animated, Button, Platform, StyleSheet, Image, Text, View, ProgressViewIOS, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
export default class Settings extends Component {
		    static navigationOptions = {
        header: null
    }
	constructor(props) {
		super(props)
		this.state={
			test: "there is state"
		}
	}
	render() {
		const { navigate } = this.props.navigation;
		return(
			<View style={{flex: 1, backgroundColor: 'black'}}>
				<View style={{marginTop: 32}}>
					<TouchableOpacity onPress={() => navigate('App')}><Icon name="ios-arrow-round-back-outline" size={30} color="blue" /></TouchableOpacity>
				</View>
				<Text style={{fontSize: 20, color: 'white'}}>Settings</Text>
			</View>
			)
	}
}