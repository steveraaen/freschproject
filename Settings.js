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
		for(let i = 1; i < 180; i++) {
			 mdArr.push({[moment().subtract(i, 'days').format(format)]:{color: 'green', selected: false}})		
		}
		var newObj = Object.assign({}, ...mdArr)
		this.setState({ates: newObj})
	}

	render() {
		const { navigate } = this.props.navigation;
		const styles = StyleSheet.create({
		})
		console.log(this.state)
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
                theme={{ calendarBackground: 'black', textDisabledColor: 'gray', dayTextColor: 'green', monthTextColor: 'white'}}
                pastScrollRange={6}
              	 minDate={moment().subtract(180, 'days').format('YYYY-MM-DD')}
              	 maxDate={moment().format('YYYY-MM-DD')}                
                futureScrollRange={0}
                markedDates={this.state.ates}			
              
              
            /> 
				</View>
				<View style={{flex: 1}}>
					
				</View>
			</View>
			)
	}
}












