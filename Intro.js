
import React, { Component } from 'react';
import { Animated, AppRegistry, Easing, LayoutAnimation, Platform, StyleSheet, Image, Text, View, ProgressViewIOS, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

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
{flag: require("./utils/png/united-nations.png"), name: "Poland", schengen: true, europe: true, colors:['white', 'red']},
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
{flag: require("./utils/png/united-states-of-america.png"), name: "United States", schengen: false, europe: false, colors: ['red', 'white', 'blue']},
{flag: require("./utils/png/uruguay.png"), name: "Uruguay", schengen: false, europe: false},
{flag: require("./utils/png/uzbekistn.png"), name: "Uzbekistan", schengen: false, europe: false},
{flag: require("./utils/png/venezuela.png"), name: "Venezuela", schengen: false, europe: false},
{flag: require("./utils/png/vietnam.png"), name: "Vietnam", schengen: false, europe: false},
{flag: require("./utils/png/united-kingdom.png"), name: "UK Virgin Islands", schengen: false, europe: false},
{flag: require("./utils/png/united-states-of-america.png"), name: "US Virgin Islands", schengen: false, europe: false},
{flag: require("./utils/png/yemen.png"), name: "Yemen", schengen: false, europe: false},
{flag: require("./utils/png/zambia.png"), name: "Zambia", schengen: false, europe: false},
{flag: require("./utils/png/zimbabwe.png"), name: "Zimbabwe", schengen: false, europe: false}
]
var armenia = require("./utils/png/armenia.png")
var austria = require("./utils/png/austria.png")
var belgium = require("./utils/png/belgium.png")
var bulgaria = require("./utils/png/bulgaria.png")
var estonia = require("./utils/png/estonia.png")
var germany = require("./utils/png/germany.png")
var hungary = require("./utils/png/hungary.png")
var ireland = require("./utils/png/ireland.png")
var italy = require("./utils/png/italy.png")
var latvia = require("./utils/png/latvia.png")
var luxembourg = require("./utils/png/luxembourg.png")
var lithuania = require("./utils/png/lithuania.png")
var netherlands = require("./utils/png/netherlands.png")
var romania = require("./utils/png/romania.png")
var spain = require("./utils/png/spain.png")

var horizontalFlags=[armenia, austria, bulgaria, estonia, germany, hungary, latvia, lithuania, luxembourg, netherlands, spain ]
var verticalFlags=[belgium, ireland, italy, romania]
var allFlags = countries.map((ctry, idx) => {
	return ctry.flag
})
var euroFlags=[]
var schengenFlags=[]
for(let i = 0; i < countries.length; i++){
	if(countries[i].europe){
		euroFlags.push(countries[i].flag)
	} 	if(countries[i].schengen){
		schengenFlags.push(countries[i].flag)
	}
}

export default class Intro extends Component {
        static navigationOptions = {
        header: null
    } 
  constructor (props) {
  	super(props)
  	this.state={
  		horizontalFlags: horizontalFlags,
  		verticalFlags: verticalFlags,
  		allFlags: allFlags,
  		euroFlags: euroFlags,
  		schengenFlags: schengenFlags,
  		curFlags: schengenFlags

  	}
	this.animatedValue = new Animated.Value(0)
	this.spinValue = new Animated.Value(0)
	this.spin = this.spin.bind(this)
	this.animate = this.animate.bind(this)
  } 
  componentDidMount() {

 setTimeout(() => {
 	LayoutAnimation.spring();
 	this.setState({curFlags: this.state.schengenFlags})} 	, 5000)

  	 this.animate()
  	 this.spin()

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


  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
      ).start()
  }

  render() {
  	const { navigate } = this.props.navigation;

  	const styles = StyleSheet.create({
  		container: {
  			flex: 1,
  			justifyContent: 'center',
  			backgroundColor: 'black'
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
	  },
	  blockText: {
	    color: '#5078F8', 
	    fontSize:40, 
	    letterSpacing: 6,
	    textAlign: 'center'
	  },
	  blockTextb: {
	    color: '#F6FEAC', 
	    fontSize:40, 
	    letterSpacing: 6,
	    textAlign: 'center'
	  },
	  testa:{
	  	marginLeft: 30,
	  	height: 40,
	  	width: 40,
	  	alignItems: 'center',
	  	borderRadius: 20,
	  	backgroundColor: 'coral'
	  }
  	})
  const fade = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })
  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })
  	const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100]
  })
  const opacity = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  })

  const marginTop = this.animatedValue.interpolate({
    inputRange: [0,  1],
    outputRange: [40, 10]
  })
    const marginBottom = this.animatedValue.interpolate({
    inputRange: [0,  1],
    outputRange: [40, 320]
  })
  const textSize = this.animatedValue.interpolate({
    inputRange: [0.5, 1],
    outputRange: [18, 32]
  })
  const rotateX = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '0deg']
  })
  var flagArr = []
for(let i = 0; i < this.state.curFlags.length; i++) {
		flagArr.push(<Animated.Image style={{width: 33,height: 33, transform: [{rotate: spin}] }}source={this.state.curFlags[i]} key={i}
      /> )
}

  	return(
  	<View style={styles.container}>
      <View style={{flex: .2, flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Animated.View style={[styles.block, {marginLeft} ]}><Text style={styles.blockText}>Fres</Text> </Animated.View>
        <Animated.View style={[styles.blockb, {marginTop}]}><Text style={styles.blockTextb}>chen</Text> </Animated.View>
      </View>
  		<View style={{marginTop: 26, marginLeft: 22,flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigate('App')}><Icon name="ios-arrow-round-back-outline" size={40} color='black' /></TouchableOpacity>
      </View>
      <View style={{flexDirection: "row", flexWrap: 'wrap', justifyContent: 'center' }}>   
			{flagArr}      
    </View> 

  	</View>
  		)
  }
}