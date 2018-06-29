    console.disableYellowBox = true
import React, { Component } from 'react';
import { Animated, Button, Platform, StyleSheet, Image, ScrollView, Text, View, ProgressViewIOS, TouchableOpacity } from 'react-native';
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

		var unfiltered = this.props.navigation.state.params.histry

		var milan = [45.464211, 9.191383]
		var istanbul = [41.008238, 28.978359]
		var london = [51.509865, -0.118092]
		var brussels = [50.85045, 4.34878]
		var madrid = [40.415363, -3.707398]
		var dublin = [53.350140, -6.266155]
		var bucharest = [44.439663, 26.096306]
		var sarajevo = [43.84864, 18.35644]
		console.log(this.props.navigation.state.params)
			if(this.props.navigation.state.params.histry){
				var dates= this.props.navigation.state.params.histry
				var dts = Object.entries(dates)
				dts = dts.reverse()
				var fmtdDates = dts.map((dt, idx) => {
console.log(dt[0], dt[1].country)
					return (
						<View key={idx} style={{flex: 1, flexDirection: 'row'}}>
						<View style={{flex: .3, marginLeft: 12, alignContent: 'flex-end'}}>
							<Text style={{color: 'white', fontSize: 12}}>
								{moment(dt[0]).format('ddd, MMM Do')}
							</Text>
						</View>
						</View>
						)
				})
}

		const { navigate } = this.props.navigation;
/*		const styles = StyleSheet.create({
		})*/
		console.log(this.state)
		return(
			<View style={{flex: 1, justifyContent: 'center', backgroundColor: 'black'}}>
				<View style={{marginTop: 32}}>
					<TouchableOpacity onPress={() => navigate('App')}><Icon name="ios-arrow-round-back-outline" size={30} color="blue" /></TouchableOpacity>
				</View>
				<Text style={{fontSize: 20, color: 'white'}}>Recent Locations</Text>

				<ScrollView style={{flex: 1}}>
					{fmtdDates}
				</ScrollView>
			</View>
			)

	}
}












