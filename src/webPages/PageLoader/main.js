const { db } = require("../../loaders/dataBase.js")
const { codeRequestSampleOne, codeRequestSampleTwo } = require("../../../assets/codeRequestSample.js")
module.exports = {
	name: "/",
	async execute(req, res) {
		await db.add("SuccessfulRequestCounter", 1)
		let endpointsInArray = await db.get("endpointsInArray")
		res.render("index.ejs", { endpoints: `/api/${endpointsInArray.join("<br>/api/")}`, codeRequestSample: `${codeRequestSampleOne}<br>   requestedTemperature: 15<br>${codeRequestSampleTwo}` })
	}
}
