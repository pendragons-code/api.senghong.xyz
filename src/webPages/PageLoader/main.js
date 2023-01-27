const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "/",
	async execute(req, res) {
		const arrayOfEndpointsToPage = await db.get(`endpointsInDB`)
		res.render("index.ejs", { endpoints: `/api/${arrayOfEndpointsToPage.join("<br>/api/")}` })
	}
}
