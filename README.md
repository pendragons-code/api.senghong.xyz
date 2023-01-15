# What is this?:
This is an open source version of a RESTful API that I will soon be deploying. I'm not really good at this so should there be anything about the project that I can improve, please do tell me!

# Currently
routes are handled dynamically and that means naming and configuration can be interpreted as slightly easier.

# how to run
```
git clone https://github.com/pendragons-code/api.senghong.xyz
cd api.senghong.xyz
npm i
node .
```

# api Usage example
Assuming that your api will be pointing at localhost:3000;
```
const axios = require("axios")
axios({
	method: "post",
	url: "http://localhost:3000/api/celsius",
	headers: {
		"Content-Type": "application/json"
	},
	data: {
		requestedTemperature: 1/3
	}
}).then((result) => {
	console.log(result)
})
```
