const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "nanometer",
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
		let numberInNanometer = parseFloat(req.body.requestedLength)
		let numberInCentimeter = numberInNanometer / 1e+7
		let numberInMeter = numberInNanometer / 1e+9
		let numberInKilometer = numberInNanometer / 1e+12
		let numberInMillimeter = numberInNanometer / 1e+6
		let numberInMicrometer = numberInNanometer / 1000
		let numberInMile = numberInNanometer * 6.2137e-13
		let numberInYard = numberInNanometer / 9.144e+8
		let numberInFoot = numberInNanometer / 3.048e+8
		let numberInInch = numberInNanometer / 2.54e+7
		let numberInNauticalMile = numberInNanometer / 1.852e+12
		return res.json({
			requested: numberInNanometer,
			Centimeter: numberInCentimeter,
			Meter: numberInMeter,
			Kilometer: numberInKilometer,
			Millimeter: numberInMillimeter,
			Micrometer: numberInMicrometer,
			Mile: numberInMile,
			Yard: numberInYard,
			Foot: numberInFoot,
			Inch: numberInInch,
			NauticalMile: numberInNauticalMile
		})
	}
}
