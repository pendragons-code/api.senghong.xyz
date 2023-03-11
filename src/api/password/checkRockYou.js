const { invalidRequest,  noStringProvided, maximumLength } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
const { readFile } = require("fs")
module.exports = {
	name: "checkRockYou",
	category: "password",
	utilisation: `
	{
		requestedString: "password123"
	}
	`, async execute(req, res) {
		if(!req.body.requestedString) return res.json({ error: invalidRequest })
		if(typeof req.body.requestedString !== "string") return res.json({ error: noStringProvided })
		if(req.body.requestedString.length < 1) return res.json({ error: "Your password must be at least 1 character long." })
		if(req.body.requestedString.length > 200) return res.json({ error: maximumLength, maximumAllowedLength: 200 })
		await db.add(`SuccessfulRequestCounter`, 1)
		readFile("./assets/rockyou.txt", "utf8", async function(err, data){
			if(data.search(JSON.stringify(req.body.requestedString)) === -1) return res.json({ result: "Not present." })
			return res.json({ result: "This password is present in rockyou.txt." })
		})
	}
}
