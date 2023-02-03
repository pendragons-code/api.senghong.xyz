# Deployment
I have deployed an instance and it should be working, there is not much there yet and I will soon be working on more features

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

# Issue:

some exporting stuff does not seem to work and some stuff regarding the db also does not work. I am currently conflicted about using a normal array to list all the endpoint or using a db. I originally wanted to integrate a discord bot and one of the things be uptime status for certain endpoints. So in the event the api is down, there is a list of endpoints and the utilisation of those endpoints are still around. Let me figure this one out!
