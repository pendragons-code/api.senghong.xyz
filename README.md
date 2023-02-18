# Deployment
I have deployed an instance and it should be working, there is not much there yet and I will soon be working on more features.

# What is this?
This is an open source version of a RESTful API that I will soon be deploying. I'm not really good at this so should there be anything about the project that I can improve, please do tell me!			

# Currently
The routes are handled dynamically and that means naming and configuration can be interpreted as slightly easier.

# Docs
Sending a get request to a specific endpoint will get it to send the utilisation or the required json fields!				
[Here](https://api.senghong.xyz/api/secondOfArc) is an example!

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
# Issues:
Code quality enhancement, especially on the front-end because I lean more to the back-end.
# Dev-dependencies
I like using nodemon and husky, but I recognize that some other people like to use other tools. Therefor, I did not really add that many config files to this thing.
