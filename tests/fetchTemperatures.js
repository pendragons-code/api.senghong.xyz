const axios = require("axios")
axios({
	method: "post",
	url: "http://localhost:3000/api/base64",
	headers: {
		"Content-Type": "application/json"
	},
	data: {
		requestedString: "1"
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
