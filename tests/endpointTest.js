const axios = require("axios")
axios({
	method: "post",
	url: "http://localhost:3000/api/decodeBinary",
	headers: {
		"Content-Type": "application/json"
	},
	data: {
		requestedString: "01001001 00100000 01001100 01101001 01101011 01100101 00100000 01100010 01100001 01101110 01100001 01101110 01100001 01110011"
	}
}).then((result) => {
	console.log(result.data)
})
axios({
	method: "post",
	url: "http://localhost:3000/api/fahrenheit",
	headers: {
		"Content-Type": "application/json"
	},
	data: {
		requestedTemperature: 1
	}
}).then((result) => {
	console.log(result.data)
})
axios({
	method: "post",
	url: "http://localhost:3000/api/kelvin",
	headers: {
		"Content-Type": "application/json"
	},
	data: {
		requestedTemperature: 1
	}
}).then((result) => {
	console.log(result.data)
})
