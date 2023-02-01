const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "/docs",
	async execute(req, res) {
		//utilisation by category:
		//{
		//	requestedSpeed: 100
		//}
		//this page will list all different types here
		res.send("Works In Progress")
	}
}
