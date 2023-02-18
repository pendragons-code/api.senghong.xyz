const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "/",
	async execute(req, res) {
		await db.add("SuccessfulRequestCounter", 1)
		console.log(await db.get("endpointsInCategory"))
		res.render("landingPage.ejs")
	}
}
