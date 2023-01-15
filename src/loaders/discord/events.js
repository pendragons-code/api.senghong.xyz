const { readdirSync } = require("fs")
const { bot } = require("./bot.js")
async function loadEvents() {
	console.log("Events")
	readdirSync("./src/discord/events").forEach(dirs => {
		const eventFile = readdirSync(`./src/discord/events/${dirs}`).filter(file => file.endsWith(".js"))
		for(const file of eventFile) {
			const event = require(`../../discord/events/${dirs}/${file}`)
			console.log(`Loading event: ${file} from ${dirs}!`)
			bot.on(file.split(".")[0], event.bind(null, bot))
		}
	})
}

module.exports = { loadEvents }
