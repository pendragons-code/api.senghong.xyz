const { db } = require("../../loaders/dataBase.js")
const { codeRequestSampleOne, codeRequestSampleTwo } = require("../../../assets/codeRequestSample.js")
module.exports = {
	name: "/",
	async execute(req, res) {
		await db.add("SuccessfulRequestCounter", 1)
		res.render("landingPage.ejs")
	}
}
