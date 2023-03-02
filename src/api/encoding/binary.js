const { invalidRequest, maximumLength, noStringProvided, minimumLength } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "encodeBinary",
	category: "encoding",
	utilisation: `
	{
		requestedString: "ILikeApples"
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedString) return res.json({ error: invalidRequest })
		if(req.body.requestedString > 100000) return res.json({ error: maximumLength, maximumAllowedLength: 100000 })
		if(req.body.requestedString < 1) return res.json({ error: minimumLength, minimumAllowedLength: 1 })
		if(typeof req.body.requestedString !== "string") return res.json({ error: noStringProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let resultInBinary = ""
		for(let i = 0; i < req.body.requestedString.length; ++i) {
			let bin = req.body.requestedString[i].charCodeAt().toString(2)
			resultInBinary += Array(8 - bin.length + 1).join("0") + bin
			if(i < (req.body.requestedString.length - 1)) resultInBinary += " "
		}
		return res.json({ requested: req.body.requestedString, binaryOutput: resultInBinary })
	}
}
