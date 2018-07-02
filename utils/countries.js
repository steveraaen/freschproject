var countries = [{flag: "./utils/png/afghanistan.png",name: "Afghanistan", schengen: false, europe: false},
{flag: "./utils/png/albania.png", name: "Albania", schengen: false, europe: true, colors: ['black', 'red']},
{flag: "./utils/png/algeria.png", name: "Algeria", schengen: false, europe: false},
{flag: "./utils/png/andorra.png", name: "Andorra", schengen: true, europe: true},
{flag: "./utils/png/angola.png", name: "Angola", schengen: false, europe: false},
{flag: "./utils/png/anguilla.png", name: "Anguilla", schengen: false, europe: false},
{flag: "./utils/png/antigua-and-barbuda.png", name: "Antigua & Barbuda", schengen: false, europe: false},
{flag: "./utils/png/argentina.png", name: "Argentina", schengen: false, europe: false},
{flag: "./utils/png/armenia.png", name: "Armenia", schengen: false, europe: true, colors:['gold', 'red', 'blue']},
{flag: "./utils/png/australia.png", name: "Australia", schengen: false, europe: false},
{flag: "./utils/png/austria.png", name: "Austria", schengen: true, europe: true},
{flag: "./utils/png/azerbaijan.png", name: "Azerbaijan", schengen: false, europe: false},
{flag: "./utils/png/bahamas.png", name: "Bahamas", schengen: false, europe: false},
{flag: "./utils/png/bahrain.png", name: "Bahrain", schengen: false, europe: false},
{flag: "./utils/png/Bangladesh.png", name: "Bangladesh", schengen: false, europe: false},
{flag: "./utils/png/barbados.png", name: "Barbados", schengen: false, europe: false},
{flag: "./utils/png/belarus.png", name: "Belarus", schengen: false, europe: true},
{flag: "./utils/png/belgium.png", name: "Belgium", schengen: true, europe: true, colors: ['gold', 'red', 'black']},
{flag: "./utils/png/belize.png", name: "Belize", schengen: false, europe: false},
{flag: "./utils/png/Benin.png", name: "Benin", schengen: false, europe: false},
{flag: "./utils/png/bermuda.png", name: "Bermuda", schengen: false, europe: false},
{flag: "./utils/png/bhutan.png", name: "Bhutan", schengen: false, europe: false},
{flag: "./utils/png/bolivia.png", name: "Bolivia", schengen: false, europe: false},
{flag: "./utils/png/bosnia-and-herzegovina.png", name: "Bosnia & Herzegovina", schengen: false, europe: true, colors:['white', 'red', 'blue']},
{flag: "./utils/png/botswana.png", name: "Botswana", schengen: false, europe: false},
{flag: "./utils/png/brazil.png", name: "Brazil", schengen: false, europe: false, colors:['green', 'yellow']},
{flag: "./utils/png/brunei.png", name: "Brunei Darussalam", schengen: false, europe: false},
{flag: "./utils/png/bulgaria.png", name: "Bulgaria", schengen: false, europe: true},
{flag: "./utils/png/burkina-faso.png", name: "Burkina Faso", schengen: false, europe: false},
{flag: "./utils/png/afghanistan.png", name: "Myanmar/Burma", schengen: false, europe: false},
{flag: "./utils/png/burundi.png", name: "Burundi", schengen: false, europe: false},
{flag: "./utils/png/cambodia.png", name: "Cambodia", schengen: false, europe: false},
{flag: "./utils/png/cameroon.png", name: "Cameroon", schengen: false, europe: false},
{flag: "./utils/png/canada.png", name: "Canada", schengen: false, europe: false, colors: ['white', 'red']},
{flag: "./utils/png/cape-verdi.png", name: "Cape Verde", schengen: false, europe: false},
{flag: "./utils/png/cayman-islands.png", name: "Cayman Islands", schengen: false, europe: false},
{flag: "./utils/png/central-african-republic.png", name: "Central African Republic", schengen: false, europe: false},
{flag: "./utils/png/chad.png", name: "Chad", schengen: false, europe: false},
{flag: "./utils/png/chile.png", name: "Chile", schengen: false, europe: false},
{flag: "./utils/png/china.png", name: "China", schengen: false, europe: false, colors: ['gold', 'red']},
{flag: "./utils/png/colombia.png", name: "Colombia", schengen: false, europe: false},
{flag: "./utils/png/comoros.png", name: "Comoros", schengen: false, europe: false},
{flag: "./utils/png/afghanistan.png", name: "Congo", schengen: false, europe: false},
{flag: "./utils/png/costa-rica.png", name: "Costa Rica", schengen: false, europe: false},
{flag: "./utils/png/croatia.png", name: "Croatia", schengen: false, europe: true, colors: ['red', 'white', 'blue']},
{flag: "./utils/png/cuba.png", name: "Cuba", schengen: false, europe: false},
{flag: "./utils/png/cyprus.png", name: "Cyprus", schengen: false, europe: true},
{flag: "./utils/png/czech-republic.png", name: "Czech Republic", schengen: true, europe: true, colors:['gold', 'red']},
{flag: "./utils/png/afghanistan.png", name: "The Congo", schengen: false, europe: false},
{flag: "./utils/png/denmark.png", name: "Denmark", schengen: true, europe: true, colors:['red', 'white']},
{flag: "./utils/png/djibouti.png", name: "Djibouti", schengen: false, europe: false},
{flag: "./utils/png/dominica.png", name: "Dominica", schengen: false, europe: false},
{flag: "./utils/png/dominican-republic.png", name: "Dominican Republic", schengen: false, europe: false},
{flag: "./utils/png/ecuador.png", name: "Ecuador", schengen: false, europe: false},
{flag: "./utils/png/Egypt.png", name: "Egypt", schengen: false, europe: false, colors: ['red', 'white', 'black']},
{flag: "./utils/png/afghanistan.png", name: "El Salvador", schengen: false, europe: false},
{flag: "./utils/png/equatorial-guinea.png", name: "Equatorial Guinea", schengen: false, europe: false},
{flag: "./utils/png/eritrea.png", name: "Eritrea", schengen: false, europe: false},
{flag: "./utils/png/estonia.png", name: "Estonia", schengen: true, europe: true, colors: ['white', 'black', 'blue']},
{flag: "./utils/png/ethiopia.png", name: "Ethiopia", schengen: false, europe: false},
{flag: "./utils/png/fiji.png", name: "Fiji", schengen: false, europe: false},
{flag: "./utils/png/finland.png", name: "Finland", schengen: true, europe: true, colors: ['blue', 'white']},
{flag: "./utils/png/france.png", name: "France", schengen: true, europe: true, colors: ['red', 'white', 'blue']},
{flag: "./utils/png/french-polynesia.png", name: "French Guiana", schengen: false, europe: false},
{flag: "./utils/png/gabon.png", name: "Gabon", schengen: false, europe: false},
{flag: "./utils/png/gambia.png", name: "Gambia", schengen: false, europe: false},
{flag: "./utils/png/georgia.png", name: "Georgia", schengen: false, europe: true, colors:['white', 'red']},
{flag: "./utils/png/germany.png", name: "Germany", schengen: true, europe: true, colors: ['gold', 'black', 'red']},
{flag: "./utils/png/ghana.png", name: "Ghana", schengen: false, europe: false},
{flag: "./utils/png/united-kingdom.png", name: "Great Britain", schengen: false, europe: true, colors:['white', 'red', 'blue']},
{flag: "./utils/png/greece.png", name: "Greece", schengen: true, europe: true, colors:['white', 'blue']},
{flag: "./utils/png/grenada.png", name: "Grenada", schengen: false, europe: false},
{flag: "./utils/png/united-nations.png", name: "Guadeloupe", schengen: false, europe: false},
{flag: "./utils/png/guatemala.png", name: "Guatemala", schengen: false, europe: false},
{flag: "./utils/png/guinea.png", name: "Guinea", schengen: false, europe: false},
{flag: "./utils/png/guinea-bissau.png", name: "Guinea-Bissau", schengen: false, europe: false},
{flag: "./utils/png/guyana.png", name: "Guyana", schengen: false, europe: false},
{flag: "./utils/png/haiti.png", name: "Haiti", schengen: false, europe: false},
{flag: "./utils/png/honduras.png", name: "Honduras", schengen: false, europe: false},
{flag: "./utils/png/hungary.png", name: "Hungary", schengen: true, europe: true, colors:['white', 'red', 'green']},
{flag: "./utils/png/iceland.png", name: "Iceland", schengen: true, europe: true, colors:['blue', 'red', 'white']},
{flag: "./utils/png/india.png", name: "India", schengen: false, europe: false, colors:['green', 'white', 'gold']},
{flag: "./utils/png/indonesia.png", name: "Indonesia", schengen: false, europe: false},
{flag: "./utils/png/iran.png", name: "Iran", schengen: false, europe: false},
{flag: "./utils/png/iraq.png", name: "Iraq", schengen: false, europe: false, colors:['gold', 'green']},
{flag: "./utils/png/ireland.png", name: "Ireland", schengen: true, europe: true, colors: ['green', 'gold', 'white']},
{flag: "./utils/png/isreal.png", name: "Israel and the Occupied Territories", schengen: false, europe: false, colors: ['blue', 'white']},
{flag: "./utils/png/italy.png", name: "Italy", schengen: true, europe: true, colors:['white', 'red', 'green']},
{flag: "./utils/png/ivory-coast.png", name: "Ivory Coast (Cote d'Ivoire)", schengen: false, europe: false},
{flag: "./utils/png/jamaica.png", name: "Jamaica", schengen: false, europe: false, colors: ['gold','black','green']},
{flag: "./utils/png/japan.png", name: "Japan", schengen: false, europe: false, colors: ['red', 'white']},
{flag: "./utils/png/jordan.png", name: "Jordan", schengen: false, europe: false},
{flag: "./utils/png/kazakhstan.png", name: "Kazakhstan", schengen: false, europe: false},
{flag: "./utils/png/kenya.png", name: "Kenya", schengen: false, europe: false},
{flag: "./utils/png/kosovo.png", name: "Kosovo", schengen: false, europe: true},
{flag: "./utils/png/kuwait.png", name: "Kuwait", schengen: false, europe: false},
{flag: "./utils/png/kyrgyzstan.png", name: "Kyrgyz Republic (Kyrgyzstan)", schengen: false, europe: false},
{flag: "./utils/png/laos.png", name: "Laos", schengen: false, europe: false},
{flag: "./utils/png/latvia.png", name: "Latvia", schengen: true, europe: true, colors: ['white', 'purple']},
{flag: "./utils/png/lebanon.png", name: "Lebanon", schengen: false, europe: false, colors: ['red','white','green']},
{flag: "./utils/png/lesotho.png", name: "Lesotho", schengen: false, europe: false},
{flag: "./utils/png/liberia.png", name: "Liberia", schengen: false, europe: false},
{flag: "./utils/png/libya.png", name: "Libya", schengen: false, europe: false},
{flag: "./utils/png/liechtenstein.png", name: "Liechtenstein", schengen: true, europe: true},
{flag: "./utils/png/lithuania.png", name: "Lithuania", schengen: true, europe: true, colors: ['gold', 'red', 'green']},
{flag: "./utils/png/luxembourg.png", name: "Luxembourg", schengen: true, europe: true, colors: ['red', 'white', 'lightblue']},
{flag: "./utils/png/macedonia.png", name: "Macedonia", schengen: false, europe: true, colors: ['red', 'gold']},
{flag: "./utils/png/madagascar.png", name: "Madagascar", schengen: false, europe: false},
{flag: "./utils/png/malawi.png", name: "Malawi", schengen: false, europe: false},
{flag: "./utils/png/.png", name: "Malaysia", schengen: false, europe: false},
{flag: "./utils/png/.png", name: "Maldives", schengen: false, europe: false},
{flag: "./utils/png/mali.png", name: "Mali", schengen: false, europe: false},
{flag: "./utils/png/malta.png", name: "Malta", schengen: true, europe: true, colors: ['red', 'white']},
{flag: "./utils/png/martinique.png", name: "Martinique", schengen: false, europe: false},
{flag: "./utils/png/mauritania.png", name: "Mauritania", schengen: false, europe: false},
{flag: "./utils/png/mauritius.png", name: "Mauritius", schengen: false, europe: false},
{flag: "./utils/png/mayotte.png", name: "Mayotte", schengen: false, europe: false},
{flag: "./utils/png/mexico.png", name: "Mexico", schengen: false, europe: false, colors: ['red', 'white', 'green']},
{flag: "./utils/png/moldova.png", name: "Moldova, Republic of", schengen: false, europe: true},
{flag: "./utils/png/monaco.png", name: "Monaco", schengen: false, europe: true, colors: ['red', 'white']},
{flag: "./utils/png/mongolia.png", name: "Mongolia", schengen: false, europe: false},
{flag: "./utils/png/montenegro.png", name: "Montenegro", schengen: false, europe: true},
{flag: "./utils/png/montserrat.png", name: "Montserrat", schengen: false, europe: false},
{flag: "./utils/png/m.oroccopng", name: "Morocco", schengen: false, europe: false},
{flag: "./utils/png/mozambique.png", name: "Mozambique", schengen: false, europe: false},
{flag: "./utils/png/namibia.png", name: "Namibia", schengen: false, europe: false},
{flag: "./utils/png/nepal.png", name: "Nepal", schengen: false, europe: false, colors: ['red','white', 'blue']},
{flag: "./utils/png/netherlands.png", name: "Netherlands", schengen: true, europe: true, colors:['orange', 'white', 'blue']},
{flag: "./utils/png/new-zealand.png", name: "New Zealand", schengen: false, europe: false},
{flag: "./utils/png/nicaragua.png", name: "Nicaragua", schengen: false, europe: false},
{flag: "./utils/png/niger.png", name: "Niger", schengen: false, europe: false},
{flag: "./utils/png/nigeria.png", name: "Nigeria", schengen: false, europe: false},
{flag: "./utils/png/north-korea.png", name: "North Korea", schengen: false, europe: false},
{flag: "./utils/png/norway.png", name: "Norway", schengen: true, europe: true, colors:['white', 'red', 'blue']},
{flag: "./utils/png/oman.png", name: "Oman", schengen: false, europe: false},
{flag: "./utils/png/pakistan.png", name: "Pakistan", schengen: false, europe: false},
{flag: "./utils/png/panama.png", name: "Panama", schengen: false, europe: false},
{flag: "./utils/png/papua-new-guinea.png", name: "Papua New Guinea", schengen: false, europe: false},
{flag: "./utils/png/paraguay.png", name: "Paraguay", schengen: false, europe: false},
{flag: "./utils/png/peru.png", name: "Peru", schengen: false, europe: false},
{flag: "./utils/png/philippines.png", name: "Philippines", schengen: false, europe: false},
{flag: "./utils/png/poland.png", name: "Poland", schengen: true, europe: true, colors:['white', 'red']},
{flag: "./utils/png/portugal.png", name: "Portugal", schengen: true, europe: true, colors: ['red', 'green']},
{flag: "./utils/png/puerto-rico.png", name: "Puerto Rico", schengen: false, europe: false},
{flag: "./utils/png/qatar.png", name: "Qatar", schengen: false, europe: false},
{flag: "./utils/png/romania.png", name: "Romania", schengen: false, europe: true, colors:['gold', 'white', 'blue']},
{flag: "./utils/png/russia.png", name: "Russian Federation", schengen: false, europe: true, colors:['white', 'red', 'blue']},
{flag: "./utils/png/rwanda.png", name: "Rwanda", schengen: false, europe: false},
{flag: "./utils/png/saint-kitts-and-nevis.png", name: "Saint Kitts &Nevis", schengen: false, europe: false},
{flag: "./utils/png/united-nations.png", name: "Saint Lucia", schengen: false, europe: false},
{flag: "./utils/png/united-nations.png", name: "Saint Vincent's & Grenadines", schengen: false, europe: false},
{flag: "./utils/png/united-nations.png", name: "Samoa", schengen: false, europe: false},
{flag: "./utils/png/sao-tome-and-principe.png", name: "Sao Tome & Principe", schengen: false, europe: false},
{flag: "./utils/png/saudi-arabia.png", name: "Saudi Arabia", schengen: false, europe: false, colors: ['green', 'white']},
{flag: "./utils/png/senegal.png", name: "Senegal", schengen: false, europe: false},
{flag: "./utils/png/serbia.png", name: "Serbia", schengen: false, europe: true, colors:['white', 'red', 'blue']},
{flag: "./utils/png/seychelles.png", name: "Seychelles", schengen: false, europe: false},
{flag: "./utils/png/sierra-leone.png", name: "Sierra Leone", schengen: false, europe: false},
{flag: "./utils/png/singapoer.png", name: "Singapore", schengen: false, europe: false},
{flag: "./utils/png/slovakia.png", name: "Slovakia", schengen: true, europe: true, colors:['red', 'blue','white' ]},
{flag: "./utils/png/slovenia.png", name: "Slovenia", schengen: true, europe: true, colors:['white', 'red', 'blue']},
{flag: "./utils/png/somaliland.png", name: "Solomon Islands", schengen: false, europe: false, colors:['blue', 'red', 'white']},
{flag: "./utils/png/solamia.png", name: "Somalia", schengen: false, europe: false},
{flag: "./utils/png/south-africa.png", name: "South Africa", schengen: false, europe: false, colors:['gold', 'green', 'black']},
{flag: "./utils/png/south-korea.png", name: "Korea, South Korea", schengen: false, europe: false, colors:['blue', 'red', 'black']},
{flag: "./utils/png/south-sudan.png", name: "South Sudan", schengen: false, europe: false},
{flag: "./utils/png/spain.png", name: "Spain", schengen: true, europe: true, colors:['red', 'gold']},
{flag: "./utils/png/sri-lanka.png", name: "Sri Lanka", schengen: false, europe: false},
{flag: "./utils/png/sudan.png", name: "Sudan", schengen: false, europe: false},
{flag: "./utils/png/suriname.png", name: "Suriname", schengen: false, europe: false},
{flag: "./utils/png/.swazilandpng", name: "Swaziland", schengen: false, europe: false},
{flag: "./utils/png/sweden.png", name: "Sweden", schengen: true, europe: true, colors: ['gold', 'blue']},
{flag: "./utils/png/switzerland.png", name: "Switzerland", schengen: true, europe: true, colors: ['red', 'white']},
{flag: "./utils/png/syria.png", name: "Syria", schengen: false, europe: false},
{flag: "./utils/png/tajikistan.png", name: "Tajikistan", schengen: false, europe: false},
{flag: "./utils/png/tanzania.png", name: "Tanzania", schengen: false, europe: false},
{flag: "./utils/png/thailand.png", name: "Thailand", schengen: false, europe: false},
{flag: "./utils/png/togo.png", name: "Togo", schengen: false, europe: false},
{flag: "./utils/png/trinidad-and-tobago.png", name: "Trinidad & Tobago", schengen: false, europe: false},
{flag: "./utils/png/tunisia.png", name: "Tunisia", schengen: false, europe: false},
{flag: "./utils/png/turkey.png", name: "Turkey", schengen: false, europe: true, colors: ['red', 'white']},
{flag: "./utils/png/turkmenistan.png", name: "Turkmenistan", schengen: false, europe: false},
{flag: "./utils/png/turks-and-caicos.png", name: "Turks & Caicos Islands", schengen: false, europe: false},
{flag: "./utils/png/uganda.png", name: "Uganda", schengen: false, europe: false},
{flag: "./utils/png/ukraine.png", name: "Ukraine", schengen: false, europe: true},
{flag: "./utils/png/united-arab-emirates.png", name: "United Arab Emirates", schengen: false, europe: false},
{flag: "./utils/png/united-states-of-america.png", name: "United States", schengen: false, europe: false, colors: ['red', 'white', 'blue']},
{flag: "./utils/png/uruguay.png", name: "Uruguay", schengen: false, europe: false},
{flag: "./utils/png/uzbekistan.png", name: "Uzbekistan", schengen: false, europe: false},
{flag: "./utils/png/venezuela.png", name: "Venezuela", schengen: false, europe: false},
{flag: "./utils/png/vietnam.png", name: "Vietnam", schengen: false, europe: false},
{flag: "./utils/png/united-kingdom.png", name: "UK Virgin Islands", schengen: false, europe: false},
{flag: "./utils/png/united-states-of-america.png", name: "US Virgin Islands", schengen: false, europe: false},
{flag: "./utils/png/yemen.png", name: "Yemen", schengen: false, europe: false},
{flag: "./utils/png/zambia.png", name: "Zambia", schengen: false, europe: false},
{flag: "./utils/png/zimbabwe.png", name: "Zimbabwe", schengen: false, europe: false}
]
module.exports = countries