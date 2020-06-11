const {MessageEmbed} = require("discord.js");
module.exports={
    name: "kill",
    timeout: 5000,
    run: async(bot, message, args) =>{
        let User = message.mentions.members.first();
            let responses = [
                "was run over by a drunk driver.",
                "had no life and commited suicide.",
                "died in a great war.",
                "was eaten by a massive shark. lol...",
                `drank too much and died.`,
                "was stupid enough to mess with thanos..",
            ]         
            let Response = responses[Math.floor(Math.random()*(responses.length)-1)]
            let Embed = new MessageEmbed();
            Embed.setDescription(`**${bot.users.cache.get(User.id).tag}** ` +Response);
            Embed.setColor(`RANDOM`);
            return message.channel.send(Embed)
        }}
    
