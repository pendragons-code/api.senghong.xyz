const geoip = require("geoip-lite")
const { invalidRequest, noStringProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "geolocateIP",
	category: "geolocate",
	utilisation: `
	{
		requestedIP: "142.250.80.46"
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedIP) return res.json({ error: invalidRequest })
		if(typeof req.body.requestedIP !== "string") return res.json({ error: noStringProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let resultFromGeoIP = await geoip.lookup(req.body.requestedIP)
		if(resultFromGeoIP === null) return res.json({ error: "You need to provide a valid ip address!", context: "The NPM package geoip-lite returned null, an invalid response!" })
		res.json({
			result: resultFromGeoIP,
			requested: req.body.requestedIP
		})
	}
}
