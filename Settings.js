    console.disableYellowBox = true
import React, { Component } from 'react';
import { Animated, Button, Platform, StyleSheet, Image, Text, View, ProgressViewIOS, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { CalendarList, Calendar } from 'react-native-calendars' 
import moment from 'moment'
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
	componentWillMount() {

		const format = 'YYYY-MM-DD'
		var mdArr = []
		for(let i = 0; i < 90; i++) {
			 mdArr.push({[moment().subtract(i, 'days').format(format)]:{selected: true, marked: true, dotColor: 'red'}})		
		}
		var newObj = Object.assign({}, ...mdArr)
		this.setState({dts: newObj})

	}
	render() {
		const { navigate } = this.props.navigation;
		return(
			<View style={{flex: 1, justifyContent: 'center', backgroundColor: 'black'}}>
				<View style={{marginTop: 32}}>
					<TouchableOpacity onPress={() => navigate('App')}><Icon name="ios-arrow-round-back-outline" size={30} color="blue" /></TouchableOpacity>
				</View>
				<Text style={{fontSize: 20, color: 'white'}}>Settings</Text>
				<View style={{flex:1}}>
           <CalendarList
                horizontal={true}
                style={{marginTop: 1}}           
                theme={{ calendarBackground: 'black',/* dayTextColor: 'gray',*/  monthTextColor: 'white', selectedDayTextColor: 'red'}}
                pastScrollRange={3}
                futureScrollRange={0}
                onDayPress={this.onDaySelect}
                markedDates={this.state.dts}
                markingType={'period'}
                
            /> 
				</View>
			</View>
			)
	}
}