const { db } = require("../../loaders/dataBase.js")
const { domain } = require("../../../configuration/hosting.json")
const env = require("dotenv").config()
const port = process.env.port
module.exports = {
	name: "/",
	async execute(req, res) {
		await db.add("SuccessfulRequestCounter", 1)
		res.render("landingPage.ejs", { domain: `${domain}${port}` })
	}
}
