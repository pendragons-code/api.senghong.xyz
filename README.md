# NOTICE!
If you are running it the first time, the execution of endpoint and utilisation registry will not be fast enough to be completed. I actually got inconsistent results with this whole thing, the db would sometimes be able to have it work instantly on the first try and sometimes get the thing to work after waiting a while. But most of the time, the db would not be able to get all the things out in time and it seems that only upon a restart it could work!				

TLDR: If your `docs/category here` is not working, try restarting the thing first. If the issue still persists, consider making an issue!

# encoding and decoding
I decided to put a cap on that as I did not want to get spammed with riduclously hard to encode or decode requests and causing the site to crash. I might bump the limit up in the future tho.

# What is this?
This is a basic project I decided to make just for fun. I will be adding more features in the future XD!

# Docs
Sending a get request to a specific endpoint will get it to send the utilisation or the required json fields!				
[Here](https://api.senghong.xyz/api/secondOfArc) is an example!			
Proper documentation will soon be implemented. I'm just not sure how I should present it!

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
├── DataBase
│   └── placeholder.txt
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
│   │   ├── decoding
│   │   │   ├── base64.js
│   │   │   └── binary.js
│   │   ├── encoding
│   │   │   ├── base64.js
│   │   │   └── binary.js
│   │   ├── length
│   │   │   ├── centimeters.js
│   │   │   ├── foot.js
│   │   │   ├── inch.js
│   │   │   ├── kilometer.js
│   │   │   ├── meter.js
│   │   │   ├── micrometer.js
│   │   │   ├── mile.js
│   │   │   ├── millimeter.js
│   │   │   ├── nanometer.js
│   │   │   ├── nauticalMile.js
│   │   │   └── yard.js
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
│   │   ├── databaseBackUp.js
│   │   ├── dataBase.js
│   │   ├── docsBuilder.js
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
│           ├── docs.ejs
│           ├── EndPoints.ejs
│           └── landingPage.ejs
└── tests
    └── endpointTest.js

20 directories, 54 files
```
