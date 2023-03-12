const { db } = require("../../loaders/dataBase.js")
const { animeHug } = require("../../../assets/animeEmotes.json")
const { arrayResultBuilder } = require("../../helpfulFunctions/animoteArrayManipulation.js")
const { invalidRequest, gifRequestMinimum, gifRequestMaxLimit } = require("../../../assets/errorMessages.json")
module.exports = {
	name: "animePoutGIF",
	category: "animote",
	utilisation: `
	{
		totalRequestedGifs: 6
	}
	`,
	async execute(req, res) {
		if(!req.body.totalRequestedGifs) return res.json({ error: invalidRequest })
		if(isNaN(req.body.totalRequestedGifs)) return res.json({ error: noNumberProvided })
		if(req.body.totalRequestedGifs > 10) return res.json({ error: gifRequestMaxLimit, maxPossible: 10 })
		if(req.body.gifRequestMinimum < 1) return res.json({ error: gifRequestMinimum })
		await db.add(`SuccessfulRequestCounter`, 1)
		let results = await arrayResultBuilder(req.body.totalRequestedGifs, animeHug)
		return res.json({
			hugGifs: results
		})
	}
}
