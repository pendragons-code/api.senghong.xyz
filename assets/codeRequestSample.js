const codeRequestSampleOne = `
const axios = require("axios")
<br>axios({
<br> method: "post",
<br> url: "http://api.senghong.xyz/api/celsius",
<br> headers: {
<br>  "Content-Type": "application/json"
<br> },
<br>  data: {`
const codeRequestSampleTwo = 
`  }
<br>}).then((result) => {
<br> console.log(result)
<br>})
`
// output example: console.log(`${codeRequestSampleOne}\n		requestedTemperature: 15 \n${codeRequestSampleTwo}`)
module.exports = { codeRequestSampleOne, codeRequestSampleTwo }
