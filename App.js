import React, { Component } from 'react';
import { Alert, Animated, AppRegistry, AppState, AsyncStorage, Button, Modal, NetInfo, Platform, ScrollView, StyleSheet, Image, Text, View, ProgressViewIOS, TouchableHighlight ,TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { Calendar, CalendarList } from 'react-native-calendars' 
import { StackNavigator, } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import axios from 'axios';
import BackgroundGeolocation from "react-native-background-geolocation";
/*import BackgroundTimer from 'react-native-background-timer'*/
import Settings from './Settings.js';
import AnimDemo from './AnimDemo.js';
import AnimatedDemo from './AnimatedDemo.js';
import Intro from './Intro.js';
var countries = [
{flag: require("./utils/png/afghanistan.png"),name: "Afghanistan", schengen: false, europe: false},
{flag: require("./utils/png/albania.png"), name: "Albania", schengen: false, europe: true, colors: ['black', 'red']},
{flag: require("./utils/png/algeria.png"), name: "Algeria", schengen: false, europe: false},
{flag: require("./utils/png/andorra.png"), name: "Andorra", schengen: true, europe: true},
{flag: require("./utils/png/angola.png"), name: "Angola", schengen: false, europe: false},
{flag: require("./utils/png/anguilla.png"), name: "Anguilla", schengen: false, europe: false},
{flag: require("./utils/png/antigua-and-barbuda.png"), name: "Antigua & Barbuda", schengen: false, europe: false},
{flag: require("./utils/png/argentina.png"), name: "Argentina", schengen: false, europe: false},
{flag: require("./utils/png/armenia.png"), name: "Armenia", schengen: false, europe: true, colors:['gold', 'red', 'blue']},
{flag: require("./utils/png/australia.png"), name: "Australia", schengen: false, europe: false},
{flag: require("./utils/png/austria.png"), name: "Austria", schengen: true, europe: true},
{flag: require("./utils/png/azerbaijan.png"), name: "Azerbaijan", schengen: false, europe: false},
{flag: require("./utils/png/bahamas.png"), name: "Bahamas", schengen: false, europe: false},
{flag: require("./utils/png/bahrain.png"), name: "Bahrain", schengen: false, europe: false},
{flag: require("./utils/png/bangladesh.png"), name: "Bangladesh", schengen: false, europe: false},
{flag: require("./utils/png/barbados.png"), name: "Barbados", schengen: false, europe: false},
{flag: require("./utils/png/belarus.png"), name: "Belarus", schengen: false, europe: true},
{flag: require("./utils/png/belgium.png"), name: "Belgium", schengen: true, europe: true, colors: ['gold', 'red', 'black']},
{flag: require("./utils/png/belize.png"), name: "Belize", schengen: false, europe: false},
{flag: require("./utils/png/benin.png"), name: "Benin", schengen: false, europe: false},
{flag: require("./utils/png/bermuda.png"), name: "Bermuda", schengen: false, europe: false},
{flag: require("./utils/png/bhutan.png"), name: "Bhutan", schengen: false, europe: false},
{flag: require("./utils/png/bolivia.png"), name: "Bolivia", schengen: false, europe: false},
{flag: require("./utils/png/bosnia-and-herzegovina.png"), name: "Bosnia & Herzegovina", schengen: false, europe: true, colors:['white', 'red', 'blue']},
{flag: require("./utils/png/botswana.png"), name: "Botswana", schengen: false, europe: false},
{flag: require("./utils/png/brazil.png"), name: "Brazil", schengen: false, europe: false, colors:['green', 'yellow']},
{flag: require("./utils/png/brunei.png"), name: "Brunei Darussalam", schengen: false, europe: false},
{flag: require("./utils/png/bulgaria.png"), name: "Bulgaria", schengen: false, europe: true},
{flag: require("./utils/png/burkina-faso.png"), name: "Burkina Faso", schengen: false, europe: false},
{flag: require("./utils/png/afghanistan.png"), name: "Myanmar/Burma", schengen: false, europe: false},
{flag: require("./utils/png/burundi.png"), name: "Burundi", schengen: false, europe: false},
{flag: require("./utils/png/cambodia.png"), name: "Cambodia", schengen: false, europe: false},
{flag: require("./utils/png/cameroon.png"), name: "Cameroon", schengen: false, europe: false},
{flag: require("./utils/png/canada.png"), name: "Canada", schengen: false, europe: false, colors: ['white', 'red']},
/*{flag: require("./utils/png/cape-verdi.png"), name: "Cape Verde", schengen: false, europe: false},
*/{flag: require("./utils/png/cayman-islands.png"), name: "Cayman Islands", schengen: false, europe: false},
{flag: require("./utils/png/central-african-republic.png"), name: "Central African Republic", schengen: false, europe: false},
{flag: require("./utils/png/chad.png"), name: "Chad", schengen: false, europe: false},
{flag: require("./utils/png/chile.png"), name: "Chile", schengen: false, europe: false},
{flag: require("./utils/png/china.png"), name: "China", schengen: false, europe: false, colors: ['gold', 'red']},
{flag: require("./utils/png/colombia.png"), name: "Colombia", schengen: false, europe: false},
{flag: require("./utils/png/comoros.png"), name: "Comoros", schengen: false, europe: false},
{flag: require("./utils/png/afghanistan.png"), name: "Congo", schengen: false, europe: false},
{flag: require("./utils/png/costa-rica.png"), name: "Costa Rica", schengen: false, europe: false},
{flag: require("./utils/png/croatia.png"), name: "Croatia", schengen: false, europe: true, colors: ['red', 'white', 'blue']},
{flag: require("./utils/png/cuba.png"), name: "Cuba", schengen: false, europe: false},
{flag: require("./utils/png/cyprus.png"), name: "Cyprus", schengen: false, europe: true},
{flag: require("./utils/png/czech-republic.png"), name: "Czech Republic", schengen: true, europe: true, colors:['gold', 'red']},
{flag: require("./utils/png/afghanistan.png"), name: "The Congo", schengen: false, europe: false},
{flag: require("./utils/png/denmark.png"), name: "Denmark", schengen: true, europe: true, colors:['red', 'white']},
{flag: require("./utils/png/djibouti.png"), name: "Djibouti", schengen: false, europe: false},
{flag: require("./utils/png/dominica.png"), name: "Dominica", schengen: false, europe: false},
{flag: require("./utils/png/dominican-republic.png"), name: "Dominican Republic", schengen: false, europe: false},
{flag: require("./utils/png/ecuador.png"), name: "Ecuador", schengen: false, europe: false},
{flag: require("./utils/png/egypt.png"), name: "Egypt", schengen: false, europe: false, colors: ['red', 'white', 'black']},
{flag: require("./utils/png/afghanistan.png"), name: "El Salvador", schengen: false, europe: false},
{flag: require("./utils/png/equatorial-guinea.png"), name: "Equatorial Guinea", schengen: false, europe: false},
{flag: require("./utils/png/eritrea.png"), name: "Eritrea", schengen: false, europe: false},
{flag: require("./utils/png/estonia.png"), name: "Estonia", schengen: true, europe: true, colors: ['white', 'black', 'blue']},
{flag: require("./utils/png/ethiopia.png"), name: "Ethiopia", schengen: false, europe: false},
{flag: require("./utils/png/fiji.png"), name: "Fiji", schengen: false, europe: false},
{flag: require("./utils/png/finland.png"), name: "Finland", schengen: true, europe: true, colors: ['blue', 'white']},
{flag: require("./utils/png/france.png"), name: "France", schengen: true, europe: true, colors: ['red', 'white', 'blue']},
{flag: require("./utils/png/french-polynesia.png"), name: "French Guiana", schengen: false, europe: false},
{flag: require("./utils/png/gabon.png"), name: "Gabon", schengen: false, europe: false},
{flag: require("./utils/png/gambia.png"), name: "Gambia", schengen: false, europe: false},
{flag: require("./utils/png/georgia.png"), name: "Georgia", schengen: false, europe: true, colors:['white', 'red']},
{flag: require("./utils/png/germany.png"), name: "Germany", schengen: true, europe: true, colors: ['gold', 'black', 'red']},
{flag: require("./utils/png/ghana.png"), name: "Ghana", schengen: false, europe: false},
{flag: require("./utils/png/united-kingdom.png"), name: "Great Britain", schengen: false, europe: true, colors:['white', 'red', 'blue']},
{flag: require("./utils/png/greece.png"), name: "Greece", schengen: true, europe: true, colors:['white', 'blue']},
{flag: require("./utils/png/grenada.png"), name: "Grenada", schengen: false, europe: false},
{flag: require("./utils/png/united-nations.png"), name: "Guadeloupe", schengen: false, europe: false},
{flag: require("./utils/png/guatemala.png"), name: "Guatemala", schengen: false, europe: false},
{flag: require("./utils/png/guinea.png"), name: "Guinea", schengen: false, europe: false},
{flag: require("./utils/png/guinea-bissau.png"), name: "Guinea-Bissau", schengen: false, europe: false},
{flag: require("./utils/png/guyana.png"), name: "Guyana", schengen: false, europe: false},
{flag: require("./utils/png/haiti.png"), name: "Haiti", schengen: false, europe: false},
{flag: require("./utils/png/honduras.png"), name: "Honduras", schengen: false, europe: false},
{flag: require("./utils/png/hungary.png"), name: "Hungary", schengen: true, europe: true, colors:['white', 'red', 'green']},
{flag: require("./utils/png/iceland.png"), name: "Iceland", schengen: true, europe: true, colors:['blue', 'red', 'white']},
{flag: require("./utils/png/india.png"), name: "India", schengen: false, europe: false, colors:['green', 'white', 'gold']},
{flag: require("./utils/png/indonesia.png"), name: "Indonesia", schengen: false, europe: false},
{flag: require("./utils/png/iran.png"), name: "Iran", schengen: false, europe: false},
{flag: require("./utils/png/iraq.png"), name: "Iraq", schengen: false, europe: false, colors:['gold', 'green']},
{flag: require("./utils/png/ireland.png"), name: "Ireland", schengen: false, europe: true, colors: ['green', 'gold', 'white']},
{flag: require("./utils/png/israel.png"), name: "Israel and the Occupied Territories", schengen: false, europe: false, colors: ['blue', 'white']},
{flag: require("./utils/png/italy.png"), name: "Italy", schengen: true, europe: true, colors:['white', 'red', 'green']},
{flag: require("./utils/png/ivory-coast.png"), name: "Ivory Coast (Cote d'Ivoire)", schengen: false, europe: false},
{flag: require("./utils/png/jamaica.png"), name: "Jamaica", schengen: false, europe: false, colors: ['gold','black','green']},
{flag: require("./utils/png/japan.png"), name: "Japan", schengen: false, europe: false, colors: ['red', 'white']},
{flag: require("./utils/png/jordan.png"), name: "Jordan", schengen: false, europe: false},
{flag: require("./utils/png/kazakhstan.png"), name: "Kazakhstan", schengen: false, europe: false},
{flag: require("./utils/png/kenya.png"), name: "Kenya", schengen: false, europe: false},
{flag: require("./utils/png/kosovo.png"), name: "Kosovo", schengen: false, europe: true},
{flag: require("./utils/png/kuwait.png"), name: "Kuwait", schengen: false, europe: false},
{flag: require("./utils/png/kyrgyzstan.png"), name: "Kyrgyz Republic (Kyrgyzstan)", schengen: false, europe: false},
{flag: require("./utils/png/laos.png"), name: "Laos", schengen: false, europe: false},
{flag: require("./utils/png/latvia.png"), name: "Latvia", schengen: true, europe: true, colors: ['white', 'purple']},
{flag: require("./utils/png/lebanon.png"), name: "Lebanon", schengen: false, europe: false, colors: ['red','white','green']},
{flag: require("./utils/png/lesotho.png"), name: "Lesotho", schengen: false, europe: false},
{flag: require("./utils/png/liberia.png"), name: "Liberia", schengen: false, europe: false},
{flag: require("./utils/png/libya.png"), name: "Libya", schengen: false, europe: false},
{flag: require("./utils/png/liechtenstein.png"), name: "Liechtenstein", schengen: true, europe: true},
{flag: require("./utils/png/lithuania.png"), name: "Lithuania", schengen: true, europe: true, colors: ['gold', 'red', 'green']},
{flag: require("./utils/png/luxembourg.png"), name: "Luxembourg", schengen: true, europe: true, colors: ['red', 'white', 'lightblue']},
/*{flag: require("./utils/png/macedonia.png"), name: "Macedonia", schengen: false, europe: true, colors: ['red', 'gold']},
*/{flag: require("./utils/png/madagascar.png"), name: "Madagascar", schengen: false, europe: false},
{flag: require("./utils/png/malawi.png"), name: "Malawi", schengen: false, europe: false},
{flag: require("./utils/png/malaysia.png"), name: "Malaysia", schengen: false, europe: false},
{flag: require("./utils/png/maldives.png"), name: "Maldives", schengen: false, europe: false},
{flag: require("./utils/png/mali.png"), name: "Mali", schengen: false, europe: false},
{flag: require("./utils/png/malta.png"), name: "Malta", schengen: true, europe: true, colors: ['red', 'white']},
{flag: require("./utils/png/martinique.png"), name: "Martinique", schengen: false, europe: false},
{flag: require("./utils/png/mauritania.png"), name: "Mauritania", schengen: false, europe: false},
{flag: require("./utils/png/mauritius.png"), name: "Mauritius", schengen: false, europe: false},
/*{flag: require("./utils/png/mayotte.png"), name: "Mayotte", schengen: false, europe: false},
*/{flag: require("./utils/png/mexico.png"), name: "Mexico", schengen: false, europe: false, colors: ['red', 'white', 'green']},
{flag: require("./utils/png/moldova.png"), name: "Moldova, Republic of", schengen: false, europe: true},
{flag: require("./utils/png/monaco.png"), name: "Monaco", schengen: false, europe: true, colors: ['red', 'white']},
{flag: require("./utils/png/mongolia.png"), name: "Mongolia", schengen: false, europe: false},
{flag: require("./utils/png/montenegro.png"), name: "Montenegro", schengen: false, europe: true},
{flag: require("./utils/png/montserrat.png"), name: "Montserrat", schengen: false, europe: false},
{flag: require("./utils/png/morocco.png"), name: "Morocco", schengen: false, europe: false},
{flag: require("./utils/png/mozambique.png"), name: "Mozambique", schengen: false, europe: false},
{flag: require("./utils/png/namibia.png"), name: "Namibia", schengen: false, europe: false},
{flag: require("./utils/png/nepal.png"), name: "Nepal", schengen: false, europe: false, colors: ['red','white', 'blue']},
{flag: require("./utils/png/netherlands.png"), name: "Netherlands", schengen: true, europe: true, colors:['orange', 'white', 'blue']},
{flag: require("./utils/png/new-zealand.png"), name: "New Zealand", schengen: false, europe: false},
{flag: require("./utils/png/nicaragua.png"), name: "Nicaragua", schengen: false, europe: false},
{flag: require("./utils/png/niger.png"), name: "Niger", schengen: false, europe: false},
{flag: require("./utils/png/nigeria.png"), name: "Nigeria", schengen: false, europe: false},
{flag: require("./utils/png/north-korea.png"), name: "North Korea", schengen: false, europe: false},
{flag: require("./utils/png/norway.png"), name: "Norway", schengen: true, europe: true, colors:['white', 'red', 'blue']},
{flag: require("./utils/png/oman.png"), name: "Oman", schengen: false, europe: false},
{flag: require("./utils/png/pakistan.png"), name: "Pakistan", schengen: false, europe: false},
{flag: require("./utils/png/panama.png"), name: "Panama", schengen: false, europe: false},
{flag: require("./utils/png/papua-new-guinea.png"), name: "Papua New Guinea", schengen: false, europe: false},
{flag: require("./utils/png/paraguay.png"), name: "Paraguay", schengen: false, europe: false},
{flag: require("./utils/png/peru.png"), name: "Peru", schengen: false, europe: false},
{flag: require("./utils/png/philippines.png"), name: "Philippines", schengen: false, europe: false},
{flag: require("./utils/png/republic-of-poland.png"), name: "Poland", schengen: true, europe: true, colors:['white', 'red']},
{flag: require("./utils/png/portugal.png"), name: "Portugal", schengen: true, europe: true, colors: ['red', 'green']},
{flag: require("./utils/png/puerto-rico.png"), name: "Puerto Rico", schengen: false, europe: false},
{flag: require("./utils/png/qatar.png"), name: "Qatar", schengen: false, europe: false},
{flag: require("./utils/png/romania.png"), name: "Romania", schengen: false, europe: true, colors:['gold', 'white', 'blue']},
{flag: require("./utils/png/russia.png"), name: "Russian Federation", schengen: false, europe: true, colors:['white', 'red', 'blue']},
{flag: require("./utils/png/rwanda.png"), name: "Rwanda", schengen: false, europe: false},
{flag: require("./utils/png/saint-kitts-and-nevis.png"), name: "Saint Kitts &Nevis", schengen: false, europe: false},
{flag: require("./utils/png/united-nations.png"), name: "Saint Lucia", schengen: false, europe: false},
{flag: require("./utils/png/united-nations.png"), name: "Saint Vincent's & Grenadines", schengen: false, europe: false},
{flag: require("./utils/png/united-nations.png"), name: "Samoa", schengen: false, europe: false},
{flag: require("./utils/png/sao-tome-and-principe.png"), name: "Sao Tome & Principe", schengen: false, europe: false},
{flag: require("./utils/png/saudi-arabia.png"), name: "Saudi Arabia", schengen: false, europe: false, colors: ['green', 'white']},
{flag: require("./utils/png/senegal.png"), name: "Senegal", schengen: false, europe: false},
{flag: require("./utils/png/serbia.png"), name: "Serbia", schengen: false, europe: true, colors:['white', 'red', 'blue']},
{flag: require("./utils/png/seychelles.png"), name: "Seychelles", schengen: false, europe: false},
{flag: require("./utils/png/sierra-leone.png"), name: "Sierra Leone", schengen: false, europe: false},
{flag: require("./utils/png/singapore.png"), name: "Singapore", schengen: false, europe: false},
{flag: require("./utils/png/slovakia.png"), name: "Slovakia", schengen: true, europe: true, colors:['red', 'blue','white' ]},
{flag: require("./utils/png/slovenia.png"), name: "Slovenia", schengen: true, europe: true, colors:['white', 'red', 'blue']},
{flag: require("./utils/png/somaliland.png"), name: "Solomon Islands", schengen: false, europe: false, colors:['blue', 'red', 'white']},
{flag: require("./utils/png/somalia.png"), name: "Somalia", schengen: false, europe: false},
{flag: require("./utils/png/south-africa.png"), name: "South Africa", schengen: false, europe: false, colors:['gold', 'green', 'black']},
{flag: require("./utils/png/south-korea.png"), name: "Korea, South Korea", schengen: false, europe: false, colors:['blue', 'red', 'black']},
{flag: require("./utils/png/south-sudan.png"), name: "South Sudan", schengen: false, europe: false},
{flag: require("./utils/png/spain.png"), name: "Spain", schengen: true, europe: true, colors:['red', 'gold']},
{flag: require("./utils/png/sri-lanka.png"), name: "Sri Lanka", schengen: false, europe: false},
{flag: require("./utils/png/sudan.png"), name: "Sudan", schengen: false, europe: false},
{flag: require("./utils/png/suriname.png"), name: "Suriname", schengen: false, europe: false},
{flag: require("./utils/png/swaziland.png"), name: "Swaziland", schengen: false, europe: false},
{flag: require("./utils/png/sweden.png"), name: "Sweden", schengen: true, europe: true, colors: ['gold', 'blue']},
{flag: require("./utils/png/switzerland.png"), name: "Switzerland", schengen: true, europe: true, colors: ['red', 'white']},
{flag: require("./utils/png/syria.png"), name: "Syria", schengen: false, europe: false},
{flag: require("./utils/png/tajikistan.png"), name: "Tajikistan", schengen: false, europe: false},
{flag: require("./utils/png/tanzania.png"), name: "Tanzania", schengen: false, europe: false},
{flag: require("./utils/png/thailand.png"), name: "Thailand", schengen: false, europe: false},
{flag: require("./utils/png/togo.png"), name: "Togo", schengen: false, europe: false},
{flag: require("./utils/png/trinidad-and-tobago.png"), name: "Trinidad & Tobago", schengen: false, europe: false},
{flag: require("./utils/png/tunisia.png"), name: "Tunisia", schengen: false, europe: false},
{flag: require("./utils/png/turkey.png"), name: "Turkey", schengen: false, europe: true, colors: ['red', 'white']},
{flag: require("./utils/png/turkmenistan.png"), name: "Turkmenistan", schengen: false, europe: false},
{flag: require("./utils/png/turks-and-caicos.png"), name: "Turks & Caicos Islands", schengen: false, europe: false},
{flag: require("./utils/png/uganda.png"), name: "Uganda", schengen: false, europe: false},
{flag: require("./utils/png/ukraine.png"), name: "Ukraine", schengen: false, europe: true},
{flag: require("./utils/png/united-arab-emirates.png"), name: "United Arab Emirates", schengen: false, europe: false},
{flag: require("./utils/png/united-kingdom.png"), name: "United Kingdom", schengen: false, europe: true},
{flag: require("./utils/png/united-states-of-america.png"), name: "United States", schengen: false, europe: false, colors: ['red', 'white', 'blue']},
{flag: require("./utils/png/uruguay.png"), name: "Uruguay", schengen: false, europe: false},
{flag: require("./utils/png/uzbekistn.png"), name: "Uzbekistan", schengen: false, europe: false},
{flag: require("./utils/png/venezuela.png"), name: "Venezuela", schengen: false, europe: false},
{flag: require("./utils/png/vietnam.png"), name: "Vietnam", schengen: false, europe: false},
{flag: require("./utils/png/united-kingdom.png"), name: "UK Virgin Islands", schengen: false, europe: false},
{flag: require("./utils/png/united-kingdom.png"), name: "UK", schengen: false, europe: true},
{flag: require("./utils/png/united-states-of-america.png"), name: "US Virgin Islands", schengen: false, europe: false},
{flag: require("./utils/png/yemen.png"), name: "Yemen", schengen: false, europe: false},
{flag: require("./utils/png/zambia.png"), name: "Zambia", schengen: false, europe: false},
{flag: require("./utils/png/zimbabwe.png"), name: "Zimbabwe", schengen: false, europe: false}
]//NSLocationAlwaysAndWhenInUseUsageDescription and NSLocationWhenInUseUsageDescription
var plusImage = require("./utils/png/globe.png")
var minusImage = require("./utils/png/european-union.png")
const _format = 'YYYY-MM-DD'
const _today = moment().format(_format)
const _maxDate = _today
const _minDate = moment().subtract(90, 'days').format(_format)
// configure & initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCpzqnDrYn_6D0QGdVlGXspkEOM2M5G-Jw",
    authDomain: "schengentracker.firebaseapp.com",
    databaseURL: "https://schengentracker.firebaseio.com",
    projectId: "schengentracker",
    storageBucket: "schengentracker.appspot.com",
    messagingSenderId: "330964828818"
  };
 const firebaseApp = firebase.initializeApp(firebaseConfig);
database= firebase.database()

export default class App extends Component {
	    static navigationOptions = {
        header: null
    }
  constructor(props) {
    initialState = {
      [_today]: {selected: true}
      }
    super(props);    
      this.state={
        appState: AppState.currentState,
        _markedDates: initialState,
        col: 'white',
        daysInEU: 0,
        daysLeft: 90,
        curIn: false,
        fadeAnim:  new Animated.Value(0),
        todaysDate: moment().format('dddd, MMMM Do YYYY'),
        modalVisible: false
      }

	this.onLocation = this.onLocation.bind(this)
	this.onMotionChange = this.onMotionChange.bind(this)
	this.onActivityChange = this.onActivityChange.bind(this)
	this.onProviderChange = this.onProviderChange.bind(this)
	this.revGeocode = this.revGeocode.bind(this)
	this.onDaySelect = this.onDaySelect.bind(this)
	this.calcDays = this.calcDays.bind(this)
	this.writeUserData = this.writeUserData.bind(this)
	this.checkToday = this.checkToday.bind(this)
	this._handleAppStateChange = this._handleAppStateChange.bind(this)
	this._showAlert = this._showAlert.bind(this)
	this.setModalVisible = this.setModalVisible.bind(this)

    BackgroundGeolocation.on('location', this.onLocation, this.onError);
    BackgroundGeolocation.on('motionchange', this.onMotionChange);
    BackgroundGeolocation.on('activitychange', this.onActivityChange);
    BackgroundGeolocation.on('providerchange', this.onProviderChange);
  } 
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  writeUserData(uid, wdi, wdl, mkd) {
  	AsyncStorage.getItem('key', (err, res) => {
  		console.log(res)
  	})
      console.log('writeUserData called')
      database.ref('users/' + uid).set({
         uid: uid,
        _markedDates: mkd,
        daysInEU: wdi,
        daysLeft: wdl,
        lastDay: moment().add(wdl, 'days').format('MMMM Do YYYY'),
      }, () => {
/*      AsyncStorage.setItem('key', JSON.stringify({uid: this.state.uid, markedDates: this.state._markedDates, daysInEU: this.state.daysInEU, daysLeft: this.state.daysLeft}))
*/      });
    } 
  checkToday() {
  	console.log('checkToday1')
       navigator.geolocation.getCurrentPosition(function(pos) {
           
            this.setState({
                uPosition: pos.coords,
                deviceLng: pos.coords.longitude,
                deviceLat: pos.coords.latitude,
                col: 'yellow',
                timeNow: moment().format('h:mm:ss a')
            }, () => this.revGeocode(this.state.deviceLat, this.state.deviceLng, () => {
      
            	this.calcDays()
            },))
		}.bind(this))
  }
  onDaySelect(day) { 
  	console.log(day)

      const _selectedDay = moment(day.dateString).format(_format);      
      let selected = true; 
    	let textColor = "#58FF67"
    	let msg = "Not Schengen"
    	let flag = plusImage

      if (this.state._markedDates[_selectedDay]) {
        selected = !this.state._markedDates[_selectedDay].selected;  
        if(selected) {
        	textColor = '#FF6B4E'
        	msg = "Schengen"
        	flag = minusImage
        }       
      } 
      const updatedMarkedDates = {...this.state._markedDates, ...{ [_selectedDay]: { selected: selected, textColor: textColor, country: msg, flag: flag } } }
      console.log(updatedMarkedDates)
      this.setState({ _markedDates: updatedMarkedDates }, () =>
          this.calcDays(this.state._markedDates)
        );
  }
  calcDays(mds) {
    console.log(mds)
    var selectedArray = []
    for( let mkds in mds) {
      if(mds[mkds].selected) {
        selectedArray.push(mds[mkds])
      }
   
      this.setState({
        daysInEU: selectedArray.length,
        daysLeft: 90 - selectedArray.length
      })
    }
  } 
    revGeocode(lat, lng) {  
    	console.log('revGeocode')
    	var lat= parseFloat(this.state.deviceLat).toFixed(6); 
      var lng= parseFloat(this.state.deviceLat).toFixed(6) ;
      var histObj = {}
      var histArray = []
     return axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + parseFloat(this.state.deviceLat).toFixed(6) +',' + parseFloat(this.state.deviceLng).toFixed(6) + '&key=AIzaSyD0Zrt4a_yUyZEGZBxGULidgIWK05qYeqs', {
        }).then((doc) => {

        for (let i = 0; i < countries.length; i++) {

          for(let j = 0; j < doc.data.results.length; j++) {

          if(countries[i].name === doc.data.results[j].formatted_address) {
           var cctry = countries[i]  
           var curOut = !cctry.europe && !cctry.schengen;
           var curIn = cctry.schengen
           var curNear = !cctry.schengen && cctry.europe
           var flag = countries[i].flag
           if(curIn){
           		var curIOColor = '#FF6B4E'
           	} else{
           		var curIOColor = '#58FF67'
           	}

           	histObj.ctry = cctry.name
           	histObj.day = moment().format('MMMM Do YYYY')
           	histObj.flag = flag

           this.setState({
              ctry: cctry.name,
              flag: flag,
              curOut: curOut,
              curIn: curIn,
              curIOColor: curIOColor,
              curNear: curNear,
              histArray: histArray,
              histObj: histObj
	            }, () => {
	            		this.setState({_markedDates: {...this.state._markedDates, ...{[_today]: {selected: this.state.curIn, textColor: this.state.curIOColor, country: this.state.ctry, flag: this.state.flag  }} }})
	            })
	            }
	          }
	          }
          this.setState({            
            address:  doc.data.results[0].formatted_address.split(",")[0] + ", " + doc.data.results[0].formatted_address.split(",")[1],
            latitude: doc.data.results[0].geometry.location[1],
            longitude: doc.data.results[0].geometry.location[0],
            placeName: doc.data.results[0]
          }, () => {
          	console.log(this.state)

          })
        }).catch(function(error) {
       throw error
    }); 
  }
    _handleAppStateChange = (nextAppState) => {

    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
    } 
    if (this.state.appState  === 'active' && nextAppState.match(/inactive|background/) ) {
      console.log('App has gone to background!')
      this.writeUserData(this.state.uid, this.state.daysInEU, this.state.daysLeft, this.state._markedDates)
    }
    this.setState({appState: nextAppState});
  }
  componentWillUnmount() {
    BackgroundGeolocation.removeListeners();

  }
  onLocation(location) {
    console.log('- [event] location: ', location);
    	this.revGeocode(location.coords.latitude, location.coords.longitude)
   
    	this.setState({locationLat: location.coords.latitude, locationLng: location.coords.longitude})
  }
  onError(error) {
    console.warn('- [event] location error ', error);
  }
  onActivityChange(activity) {
    console.log('- [event] activitychange: ', activity);  // eg: 'on_foot', 'still', 'in_vehicle'
   /* this.setState({activity: activity})*/
  }
  onProviderChange(provider) {
    console.log('- [event] providerchange: ', provider); 
  /*  this.setState({provider: provider})  */ 
  }
  onMotionChange(location) {
    console.log('- [event] motionchange: ', location.isMoving, location);
  /*  this.setState({isMoving: location.isMoving})*/
  }
    
  
  componentWillMount() {


BackgroundGeolocation.ready({

  distanceFilter: 10,
	logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
	stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
	startOnBoot: true,
}, (state) => {
  console.log('- BackgroundGeolocation is ready: ', state);
    if (!state.enabled) {  // <-- current state provided to callback
    
    BackgroundGeolocation.start();
  }
});

/* AsyncStorage.clear()*/

  }
    componentDidMount() {
  	/* this.checkToday()*/
        navigator.geolocation.getCurrentPosition(function(pos) {
            var { longitude, latitude, accuracy, heading } = pos.coords
            this.setState({
                deviceLng: pos.coords.longitude,
                deviceLat: pos.coords.latitude,
                uPosition: pos.coords,
                loading: false
            }, () => {
            	this.revGeocode(this.state.deviceLat, this.state.deviceLng)
            })
        }.bind(this))
     AppState.addEventListener('change', this._handleAppStateChange);   
// authenticate user and get initial snapshot  
  firebase.auth().signInAnonymously()

  .then(() => {
    var database = firebase.database()
    const uid = firebase.auth().currentUser.uid
console.log(this.state.ctry)
    database.ref('users/' + uid).once('value', (snapshot) =>{
     if(this.state.curIn) {
      	var cIn = true
      	var msg = "Schengen"
      	var icon = minusImage

      }  else if(!this.state.curIn) {
      	var cIn = false
      	var msg = "Not Schengen"
      	var icon = plusImage
      }
      if(!snapshot.val()) {

		var mdArr = []
		for(let i = 1; i < 180; i++) {
			 mdArr.push({[moment().subtract(i, 'days').format(_format)]:{textColor: this.state.curIOColor, selected: cIn, country: msg, flag: icon}})		
		}
		mdArr = mdArr.reverse()
		var newObj = Object.assign({}, ...mdArr)
		this.setState({_markedDates: newObj})

        database.ref('users/' + uid).set({
          uid: uid,
          daysInEU: 0,
          daysLeft: 90,
          markedDates: {...this.state._markedDates, ...{[_today]: {selected: cIn, textColor: this.state.curIOColor, country: this.state.ctry}} },
/*          hist: [{ctry: this.state.ctry, day: moment().format('ddd, MMM Do YY'), flag: this.state.flag, inSch: cIn}]*/

        })
        AsyncStorage.setItem('key', JSON.stringify({in:0, left:90, md:{...this.state._markedDates, ...{[_today]: {selected: cIn}} }}))

      }
      	if(snapshot.val()) {
      		this.setState({daysInEU: snapshot.val().daysInEU, daysLeft: snapshot.val().daysLeft, lastDay: snapshot.val().lastDay, _markedDates: snapshot.val()._markedDates})
      		console.log(snapshot.val())
      	}

/*       database.ref('users/' + this.state.uid).on('value', (snapshot) =>{
         this.setState({
          snp: snapshot.val(),
          daysInEU: snapshot.val().daysInEU,
          daysLeft: snapshot.val().daysLeft,
          lastDay: moment().add(snapshot.val().daysLeft, 'days').format('MMMM Do YYYY'),
          mkddts: snapshot.val().markedDates
        }, () => {
      this.setState({ _markedDates: this.state.mkddts }, () =>
          this.calcDays(this.state._markedDates)
        );
        })
         console.log(snapshot.val())
      })    */    
    })

    this.setState({
      authObj: firebase.auth(),
      isAuthenticated: true,
      uid: firebase.auth().currentUser.uid,
    }, () => {

    });
  });
  // Get geolocation
  }
    _showAlert = () => {
    Alert.alert(
      'One - Time Setup',
      'Have you been to Europe in the past six months?',
      [
        {
          text: 'No',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Yes',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Show me the list of Schengen countries', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };
  render() {
  	 const { navigate } = this.props.navigation;
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();

			if(this.state._markedDates){
				var dates= this.state._markedDates
				var dts = Object.entries(dates)
				dts = dts.reverse()
				var fmtdDates = dts.map((dt, idx) => {

					return (
					
						<View  key={idx} style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
						<View style={{marginLeft: 8}}>
							<Text style={{color: '#F6FEAC', fontSize: 14}}>
								{moment(dt[0]).format('ddd, MMM Do')}
							</Text>
						</View>
						<View style={{margin: 4}}>
							<Text style={{color: dt[1].textColor, fontSize: 16, textAlign: 'right'}}>
								{dt[1].country}
							</Text>
						</View>
						<View style={{marginRight: 8}}>
							<Image style={{width: 20,height: 20}} source={dt[1].flag} />
						</View>
						</View>
				
						)
				})
}
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
		         <View>
		           <CalendarList
		                horizontal={true}
		                style={{marginTop: 1, height: 320}}           
		                theme={{ calendarBackground: 'black', monthTextColor: 'white', textDisabledColor: 'gray', selectedDayTextColor: 'red'}}
		                pastScrollRange={6}
		              	 minDate={moment().subtract(180, 'days').format(_format)}
		              	 maxDate={moment().format(_format)}                
		                futureScrollRange={0}
		                onDayPress={this.onDaySelect}
		              
		                markedDates={this.state._markedDates}
		                markingType={'period'}               
		            /> 
		        </View>
          </View>
        </Modal>        
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 22,  height: 28}}>

	         <View style={{flex: .20 , marginLeft: 18}}>
	        		<TouchableOpacity onPress={() => navigate('AnimDemo')}><Icon name="ios-information-circle-outline" size={24} color="#F6FEAC" /></TouchableOpacity>
	        	</View>
	    	   <View style={{flex: .20 , marginLeft: 18}}>
	        		<TouchableOpacity onPress={() => navigate('Settings', {histry: this.state._markedDates})}><Icon name="ios-settings-outline" size={24} color="#F6FEAC" /></TouchableOpacity>
	        	</View>
	    	   <View style={{flex: .20 , marginLeft: 18}}>
	        		<TouchableOpacity onPress={() => navigate('Intro')}><Icon name="ios-menu-outline" size={24} color="pink" /></TouchableOpacity>
	        	</View>
	    	   <View style={{flex: .20 , marginLeft: 18}}>
	        		<TouchableOpacity onPress={() => { this.setModalVisible(true)}}><Icon name="ios-calendar-outline" size={24} color="pink" /></TouchableOpacity>
	        	</View>
        	</View>

        <View style={{flexDirection: 'row', justifyContent: 'center', height:38}}> 
          <View style={{paddingBottom: 6}}><Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>{this.state.ctry}</Text></View>
          <View style={{marginLeft: 20, marginTop: 4}}><TouchableOpacity  onPress={this._showAlert}><Image source={this.state.flag} style={{width: 30, height: 30}}/></TouchableOpacity></View>
        </View>
      
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
        <View style={{flex: .5}}><Text style={{color: '#F6FEAC', fontSize: 18, textAlign: 'center'}}>Days In</Text></View>
        <View style={{flex: .5}}><Text style={{color: '#F6FEAC', fontSize: 18, textAlign: 'center'}}>Days Left</Text></View>
        </View>
        <View style={{flexDirection: 'row'}}>
        <View style={{flex: .5}}><Text style={{color: 'white', fontSize: 24, textAlign: 'center'}}>{this.state.daysInEU}</Text></View>
        <View style={{flex: .5}}><Text style={{color: 'white', fontSize: 24, textAlign: 'center'}}>{this.state.daysLeft}</Text></View>
        </View>
      
      <View style={{marginTop: 24, marginBottom: 20}}><ProgressViewIOS  progressTintColor='red' trackTintColor='green' progress={this.state.daysInEU / 90}/></View>
      	<View style={{flex: 1, justifyContent: 'center', backgroundColor: 'black'}}>

				<Text style={{fontSize: 20, color: 'white'}}>Recent Locations</Text>

				<ScrollView style={{flex: 1}}>
					{fmtdDates}
				</ScrollView>
			</View>
        <View style={{flexDirection: 'column'}}>
         <View style={{alignItems: 'center', marginBottom: 6}}><Text style={{fontSize: 14, color: 'gray'}}>You can stay until</Text></View>
        <View style={{alignItems: 'center', marginBottom: 8}}><Text style={{color: '#F6FEAC', fontSize: 16, fontWeight: 'bold'}}>{moment().add(this.state.daysLeft, 'days').format('dddd, MMMM Do YYYY')}</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 /*   justifyContent: 'center',*/
  
    backgroundColor: 'black'
  }
});
export const freschproject = StackNavigator({
  App: { screen: App },
  Settings: { screen: Settings },
  AnimDemo: {screen: AnimDemo},
  Intro: {screen: Intro},
  AnimatedDemo: {screen: AnimatedDemo}
});

AppRegistry.registerComponent('freschproject', () => freschproject);
