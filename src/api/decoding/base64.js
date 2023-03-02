const { noStringProvided, invalidRequest, maximumLength, minimumLength } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "decodeBase64",
	category: "decoding",
	utilisation: `
	{
		requestedString: "ILikeApples"
	}
	`, async execute(req, res) {
		if(!req.body.requestedString) return res.json({ error: invalidRequest })
		if(req.body.requestedString.length < 100000) return res.json({ error: maximumLength, maximumAllowedLength: 100000 })
		if(req.body.requestedString.length < 1) return res.json({ error: minimumLength, minimumAllowedLength: 1 })
		if(typeof req.body.requestedString !== "string") return res.json({ error: noStringProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let bufferObject = new Buffer.from(req.body.requestedString)
		let dataInAsciiText = bufferObject.toString("ascii")
		res.json({
			requested: req.body.requestedString,
			asciiOutput: dataInAsciiText
		})
		return bufferObject.fill(0)
	}
}
