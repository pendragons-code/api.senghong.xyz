const { noNumberProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "milliradian",
	category: "angles",
	utilisation: `
	{
		requestedAngle: 5
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedAngle) return res.json({ error: noNumberProvided })
		if(isNaN(req.body.requestedAngle)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInMilliradian = parseFloat(req.body.requestedAngle)
		let numberInDegrees = 180/(Math.PI * 1000)
		let numberInRadian = numberInMilliradian / 1000
		let numberInGradian = numberInMilliradian * 200 / 1000 * Math.PI
		let numberInSecondOfArc = numberInRadian * (3600 * 180)/ 1000 * Math.PI
		let numberInMinuteOfArc = numberInRadian * (60 * 180)/1000 * Math.PI
		return res.json({
			requested: numberInMilliradian,
			Degrees: numberInDegrees,
			Radian: numberInRadian,
			Gradian: numberInGradian,
			Milliradian: numberInMilliradian,
			SecondOfArc: numberInSecondOfArc,
			MinuteOfArc: numberInMinuteOfArc
		})
	}
}
