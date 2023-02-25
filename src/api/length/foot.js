const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "foot",
	category: "length",
	utilisation: `
	{
		requestedLength: 5
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedLength) return res.json({ error: noJsonProvided })
		if(isNaN(req.body.requestedLength)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInFoot = parseFloat(req.body.requestedLength)
		let numberInCentimeter = numberInFoot * 30.48
		let numberInMeter = numberInFoot * 0.3048
		let numberInKilometer = numberInFoot * 0.0003048
		let numberInMillimeter = numberInFoot * 304.8
		let numberInMicrometer = numberInFoot * 304800
		let numberInNanometer = numberInFoot * 3.048e+8
		let numberInMile = numberInFoot / 5280
		let numberInYard = numberInFoot / 3
		let numberInInch = numberInFoot * 12
		let numberInNauticalMile = numberInFoot * 0.000164579
		return res.json({
			requested: numberInFoot,
			Centimeter: numberInCentimeter,
			Meter: numberInMeter,
			Kilometer: numberInKilometer,
			Millimeter: numberInMillimeter,
			Micrometer: numberInMicrometer,
			Nanometer: numberInNanometer,
			Mile: numberInMile,
			Yard: numberInYard,
			Inch: numberInInch,
			NauticalMile: numberInNauticalMile
		})
	}
}
