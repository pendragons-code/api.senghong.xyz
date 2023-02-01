const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "degrees",
	category: "angles",
	utilisation: `
	{
		requestedAngle: 5
	}
	`,
	async execute(req, res) {
		if(req.body.requestedAngle) return res.json({ error: "You need to provide a number to parse!" })
		if(isNaN(req.body.requestedAngle)) return res.json({ error: "You need to provide a number to parse!" })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInDegrees = parseFloat(req.body.requestedAngle)
		let numberInRadian = numberInDegrees * (Math.PI/180)
		let numberInGradian = numberInDegrees * (200/180)
		let numberInMilliradian = numberInRadian * 1000
		let numberInSecondOfArc = numberInDegrees * 3600
		let numberInMinuteOfArc = numberInSecondOfArc / 60
		return res.json({
			requested: numberInDegrees,
			Radian: numberInRadian,
			Gradian: numberInGradian,
			Milliradian: numberInMilliradian,
			SecondOfArc: numberInSecondOfArc,
			MinuteOfArc: numberInMinuteOfArc
		})
	}
}
