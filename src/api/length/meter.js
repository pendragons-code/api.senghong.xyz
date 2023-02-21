const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "meter",
	category: "length",
	utilisation: `
	{
		requestedLength: 55
	}
	`,
	async execute(req, res){
		if(!req.body.requestedLength) return res.json({ error: noJsonProvided })
		if(isNaN(req.body.requestedLength)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInMeter = parseFloat(req.body.requestedLength)
		let numberInCentimeter = numberInMeter * 100
		let numberInKilometer = numberInMeter / 1000
		let numberInMillimeter = numberInMeter * 1000
		let numberInMicrometer = numberInMeter * 1000000
		let numberInNanometer = numberInMeter * 1000000000
		let numberInMile = numberInMeter * 0.000621371
		let numberInYard = numberInMeter * 1.09361
		let numberInFoot = numberInMeter * 3.28084
		let numberInInch = numberInMeter * 39.37
		let numberInNauticalMile = numberInMeter / 1852
		return res.json({
			requested: numberInMeter,
			Centimeter: numberInCentimeter,
			Kilometer: numberInKilometer,
			Millimeter: numberInMillimeter,
			Micrometer: numberInMicrometer,
			Nanometer: numberInNanometer,
			Mile: numberInMile,
			Yard: numberInYard,
			Foot: numberInFoot,
			Inch: numberInInch,
			NauticalMile: numberInNauticalMile
		})
	}
}
