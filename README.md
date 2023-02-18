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

# Project-Tree
```
.
├── app.js
├── assets
│   ├── codeRequestSample.js
│   └── errorMessages.json
├── configuration
│   ├── hosting.json
│   ├── rateLimit.json
│   └── ToSendID.json
├── package.json
├── README.md
├── src
│   ├── api
│   │   ├── angles
│   │   │   ├── degrees.js
│   │   │   ├── gradian.js
│   │   │   ├── milliradian.js
│   │   │   ├── minuteOfArc.js
│   │   │   ├── radian.js
│   │   │   └── secondOfArc.js
│   │   ├── report
│   │   │   └── errors.js
│   │   ├── speed
│   │   │   ├── FootPerSecond.js
│   │   │   ├── KilometerPerHour.js
│   │   │   ├── knot.js
│   │   │   ├── MeterPerSecond.js
│   │   │   └── MilePerHour.js
│   │   └── temperature
│   │       ├── celsius.js
│   │       ├── fahrenheit.js
│   │       └── kelvin.js
│   ├── loaders
│   │   ├── apiRoutes.js
│   │   ├── dataBase.js
│   │   ├── frontEnd.js
│   │   └── webserver.js
│   └── webPages
│       ├── PageLoader
│       │   ├── EndPointLister.js
│       │   └── landing.js
│       ├── public
│       │   ├── ads.txt
│       │   └── css
│       │       ├── landingPage.css
│       │       └── styles.css
│       └── views
│           ├── EndPoints.ejs
│           └── landingPage.ejs
└── tests
    └── fetchTemperatures.js

16 directories, 35 files

```
