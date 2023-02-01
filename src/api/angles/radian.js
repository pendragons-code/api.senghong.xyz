module.exports = {
	name: "radian",
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
		let numberInRadian = parseFloat(req.body.requestedAngle)
		let numberInDegrees = numberInRadian * (180/Math.PI)
		let numberInGradian = numberInRadian * 200/Math.PI
		let numberInMilliradian = numberInRadian * 1000
		let numberInSecondOfArc = numberInRadian * (3600 * 180)/Math.PI
		let numberInMinuteOfArc = numberInRadian * (60 * 180)/Math.PI
		return res.json({
		})
	}
}
