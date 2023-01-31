const { db } = require(".././loaders/dataBase.js")
module.exports = {
	name: "degrees",
	category: "angles",
	utilisation: `
	{
		requestedAngle: 5
	}
	`,
	async execute(req, res) {
		if(req.body.requestedAngle) return res.json({ error: "You need to provide a number to parse!" })
		if(isNaN(req.body.requestedAngle)) return res.json({ error: "You need to provide a number to parse!" })
	}
}
