const { invalidRequest, maximumLength, noStringProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "decodeBinary",
	category: "encoding",
	utilisation: `
	{
		requestedString: "ILikeApples"
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedString) return res.json({ error: invalidRequest })
		if(req.body.requestedString > 100000) return res.json({ error: maximumLength, maximumAllowedLength: 100000 })
		if(typeof req.body.requestedString !== "string") return res.json({ error: noStringProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let seperateByWhitespace = req.body.requestedString.split(" ")
		let notBinaryResult = seperateByWhitespace.map(binary => String.fromCharCode(parseInt(binary, 2))).join("")
		return res.json({ requested: req.body.requestedString, textResult: notBinaryResult })
	}
}
