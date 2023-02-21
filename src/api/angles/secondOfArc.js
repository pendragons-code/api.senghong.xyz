const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "secondOfArc",
	category: "angles",
	utilisation: `
	{
		requestedAngle: 5
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedAngle) return res.json({ error: noJsonProvided })
		if(isNaN(req.body.requestedAngle)) return res.json ({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInSecondOfArc = parseFloat(req.body.requestedAngle)
		let numberInDegrees = numberInSecondOfArc / 3600
		let numberInRadian = (numberInSecondOfArc * Math.PI) / (180 * 3600)
		let numberInGradian = numberInSecondOfArc / 3240
		let numberInMilliradian = numberInRadian * 1000
		let numberInMinuteOfArc = numberInRadian / 60
		return res.json({
			requested: numberInSecondOfArc,
			Degrees: numberInDegrees,
			Radian: numberInRadian,
			Gradian: numberInGradian,
			Milliradian: numberInMilliradian,
			MinuteOfArc: numberInMinuteOfArc
		})
	}
}
