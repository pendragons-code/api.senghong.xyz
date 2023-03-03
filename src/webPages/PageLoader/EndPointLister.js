const { db } = require("../../loaders/dataBase.js")
const { domain } = require("../../../configuration/hosting.json")
const { codeRequestSampleOne, codeRequestSampleTwo } = require("../../../assets/codeRequestSample.js")
const env = require("dotenv").config()
module.exports = {
	name: "EndPoints",
	async execute(req, res) {
		await db.add("SuccessfulRequestCounter", 1)
		let endpointsInArray = await db.get("endpointsInArray")
		let listOfEndpoints = ""
		let port = process.env.port
		for (let i = 0; i < endpointsInArray.length; ++i){
			let endpointsInArrayWithoutCategoryByPosition = endpointsInArray[i].search(" -")
			let endpointsInArrayWithoutCategory = endpointsInArray[i].slice(0, endpointsInArrayWithoutCategoryByPosition)
			listOfEndpoints += `<a href="${domain}${port}/${endpointsInArrayWithoutCategory}">${endpointsInArray[i]}</a><br>`
		}
		return res.render("EndPoints.ejs", { endpoints: listOfEndpoints, codeRequestSample: `${codeRequestSampleOne}<br>   requestedTemperature: 15<br>${codeRequestSampleTwo}` })
	}
}
