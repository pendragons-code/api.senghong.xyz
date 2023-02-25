const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "yard",
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
		let numberInYard = parseFloat(req.body.requestedLength)
		let numberInCentimeter = numberInYard * 91.44
		let numberInMeter = numberInYard * 0.9144
		let numberInKilometer = numberInYard * 0.0009144
		let numberInMillimeter = numberInYard * 914.4
		let numberInMicrometer = numberInYard * 914400
		let numberInNanometer = numberInYard * 9.144e+8
		let numberInMile = numberInYard / 1760
		let numberInFoot = numberInYard * 3
		let numberInInch = numberInYard * 36
		let numberInNauticalMile = numberInYard * 0.000493737
		return res.json({
			requested: numberInYard,
			Centimeter: numberInCentimeter,
			Meter: numberInMeter,
			Kilometer: numberInKilometer,
			Millimeter: numberInMillimeter,
			Micrometer: numberInMicrometer,
			Nanometer: numberInNanometer,
			Mile: numberInMile,
			Foot: numberInFoot,
			Inch: numberInInch,
			NauticalMile: numberInNauticalMile
		})
	}
}
