const { invalidRequest, maximumLength } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "encodeBase64",
	categoty: "encoding",
	utilisation: `
	{
		requestedString: "ILikeApples"
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedString) return res.json({ error: invalidRequest })
		if(req.body.requestedString.length > 5000) return res.json({ error: maximumLength, maximumAllowedLength: 5000 })
		await db.add(`SuccessfulRequestCounter`, 1)
		let bufferObject = new Buffer.from(req.body.requestedString)
		let dataInBase64 = bufferObject.toString("base64")
		res.json({
			requested: req.body.requestedString,
			base64Output: dataInBase64
		})
		return bufferObject.fill(0)
	}
}
