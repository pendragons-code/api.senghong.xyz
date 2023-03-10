const { reverse } = require("dns")
const { db } = require("../../loaders/dataBase.js")
const { invalidRequest, noStringProvided } = require("../../../assets/errorMessages.json")
module.exports = {
	name: "reverseDNSlookup",
	utilisation:`
	{
		requestedIP: "142.250.80.46"
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedIP) return res.json({ error: invalidRequest })
		if(typeof req.body.requestedIP !== "string") return res.json({ error: noStringProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		reverse(req.body.requestedIP, (error, hostname) => {
			if(error || !hostname) return res.json({ error: "Something went wrong, I could not reach the address" })
			return res.json({
				resultHostname: hostname,
				note: "The result might not be the final redirect! Example: 142.250.80.46 would lead to an external server, not google.com!"
			})
		})
	}
}
// Some people are complaining that I should not write the function in the module.exports. Which I honestly am not very sure why people do not like it, I might ask around before going on to change it.
