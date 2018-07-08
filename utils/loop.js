var arrayArray = [
	[5,4,3,2,1,8],
	[5,4,3,2,1]
]
arrayArray.forEach((element) => {
	for(let i = 0; i < element.length; i++) {
		let j = element[i]
			if(j < element[i + 1]) {
				console.log('array' + j + '=true')
			}
	}
})
var myObject = {
	id1: {
		value1: 5,
		value2: 4,
		value3: 3,
		value4: 2,
	},
	id2: {
		value1: 5,
		value2: 2,
		value3: 3,
		value4: 2,
	}
}
for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(key + " -> " + myObject[key]);
    }
}