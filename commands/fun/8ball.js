const {MessageEmbed} = require("discord.js");
module.exports={
    name: "8ball",
    timeout: 5000,
    run: async(bot, message, args) =>{
        let question = message.content.slice(bot.prefix.length+6)
        if(!question){
            message.reply("Please specify a question to ask the magic 8ball")
        } else {
            let responses = [
                "Yes",
                "Of course, yes",
                "Of course not",
                "Nope, not at all",
                "No",
                "Certainly",
                "Duh, what do you think?",
                "Try again later",
                "Dont even ask me that",
                "Don't even try",
                "No bruh",
            ]
            let Response = responses[Math.floor(Math.random()*(responses.length)-1)]
            let Embed = new MessageEmbed()
                .setTitle("🎱 Magic 8ball 🎱")
                .setDescription('**Question:** '+question+"\n**8ball Says:** "+Response)
                .setColor("RANDOM")
            message.channel.send(Embed)
        }
    }
}
