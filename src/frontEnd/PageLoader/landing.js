const { db } = require("../../loaders/dataBase.js")
const { domain } = require("../../../configuration/hosting.json")
const env = require("dotenv").config()
const port = process.env.port
module.exports = {
	name: "/",
	async execute(req, res) {
		let listOfCategories = await db.get("listOfCategories")
		let docsBuilderLandingPage = ""
		for(let i = 0; i < listOfCategories.length; ++i) {
			docsBuilderLandingPage += `<a href="${domain}${port}/docs/${listOfCategories[i]}">${listOfCategories[i]}</a>`
		}
		await db.add("SuccessfulRequestCounter", 1)
		res.render("landingPage.ejs", { domain: `${domain}${port}`, categoryNavigation: docsBuilderLandingPage })
	}
}
