const { db } = require("../../loaders/dataBase.js")
const { animeSlap } = require("../../../assets/animeEmotes.json")
const { invalidRequest, gifRequestMinimum, gifRequestMaxLimit } = require("../../../assets/errorMessages.json")
module.exports = {
	name: "animeSlapGIF",
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
		let arrayOfSlapGIFs = []
		for (let i = 0; i < req.body.totalRequestedGifs; ++i) {
			let randomGifGenerator = animeSlap[Math.floor(Math.random() * animeSlap.length)]
			arrayOfSlapGIFs.push(randomGifGenerator)
		}
		return res.json({
			slapGIF: arrayOfSlapGIFs
		})
	}
}
