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
		var hArray = this.props.navigation.state.params.histry.map((day, idx) => {
			return (<View  key={idx} style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
					<View style={{marginRight: 6}}>
						<Text style={{fontSize:12, color: 'white'}}>
						{day.day}
						</Text>
						</View>
						<View style={{marginRight: 6}}>
						<Text style={{fontSize:12, color: 'white'}}>
						{day.ctry}
						</Text>
					 </View>
					 <View>
					 <Image style={{width: 20,height: 20}} source={day.flag} />
					 	
					 </View>
					 </View>)
		})
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

				<View style={{flex: 1}}>
					{hArray}
				</View>
			</View>
			)
	}
}












