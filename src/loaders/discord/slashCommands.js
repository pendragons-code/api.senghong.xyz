const { readdirSync } = require("fs")
const { Collection } = require("discord.js")
const { bot } = require("./bot.js")

function loadSlashCommands() {
	bot.slashCommands = new Collection()
	CommandsArray = [];
	readdirSync("./src/discord/commands/slashCommands").forEach(dirs => {
		const slashCommandsFile = readdirSync(`./src/discord/commands/slashCommands/${dirs}`).filter(file => file.endsWith(".js"))
		for(const file of slashCommandsFile) {
			const slashCommand = require(`../../discord/commands/slashCommands/${dirs}/${file}`)
			bot.slashCommands.set(slashCommand.name.toLowerCase(), slashCommand)
			console.log(`Loaded ${file} from ${dirs}!`)
			CommandsArray.push(slashCommand);
		}
	})
	bot.on("ready", (bot) => {
		bot.application.commands.set(CommandsArray)
	})
}
module.exports = { loadSlashCommands }
