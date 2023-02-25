const { invalidRequest, maximumLength } = require("../../../assets/errorMessages.json")
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
		if(req.body.requestedString < 5000) return res.json({ error: maximumLength, maximumAllowedLength: 5000 })
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
