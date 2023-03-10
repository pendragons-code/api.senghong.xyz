const { invalidRequest, noStringProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
const { lookup } = require("dns")
module.exports = {
	name: "domainToIP",
	utilisation: `
	{
		requestedDomain: "api.senghong.xyz"
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedDomain) return res.json({ error: invalidRequest })
		if(typeof req.body.requestedDomain !== "string") return res.json({ error: noStringProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		lookup(req.body.requestedDomain, (error, address, family) => {
			if(error || !address) return res.json({ error: "Something went wrong, I could not reach the address!" })
			return res.json({
				IPfamily: family,
				dnsResult: address
			})
		}) // callback
	}
}
