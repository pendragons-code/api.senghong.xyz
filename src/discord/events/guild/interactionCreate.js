const { EmbedBuilder, InteractionType } = require("discord.js")
module.exports = async (bot, interactionCreate) => {
	if(interactionCreate.type = InteractionType.ApplicationCommand) {
		const slashCmd = bot.slashCommands.get(interactionCreate.commandName)
		if(!slashCmd) return
		slashCmd.execute({bot, interactionCreate})
	}
}
