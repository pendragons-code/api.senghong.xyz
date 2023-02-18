const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "/",
	async execute(req, res) {
		await db.add("SuccessfulRequestCounter", 1)
		res.render("landingPage.ejs")
	}
}
