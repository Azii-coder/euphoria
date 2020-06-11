const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'help',
    run: async(bot, message, args) => {
        let username = message.author.username
        const helpEmbed = new MessageEmbed()
        .setTitle("Euphoria - All Commands")
        .setDescription("Euphoria is a bot made by `Azii#5515` which has a variety of features, fun commands, moderation and much more to be coded.")
        .addField("**🎲 Fun Commands 🎲**", '\`8ball\`, \`avatar\`,\`meme\`,\`kill\`,\`friend\`,\`snipe\`,\`say\`, \`topic\`')
        .addField("**ℹ Info Commands ℹ**", '\`help\`, \`ping\`, \`serverinfo\`, \`whois\`')
        .addField("**🔨 Moderation Commands 🔨**", '\`kick\`, \`ban\`, \`purge\`, \`report\`')
        .addField("**🔧 Utility Commands🔧**", ',\`slowmode\`,\`emoji\`,\`role [create/delete] [name] [hex color]\`')
        .addField("**🎉 Giveaway Commands🎉**", '\`giveaway [time] [channel] [prize]\`')
        .addField("**Invite Link**, \nhttps://discord.com/oauth2/authorize?client_id=692809045794619403&scope=bot&permissions=2146958839")
        .setColor("RANDOM")
        .setTimestamp()
        message.channel.send(helpEmbed)

}}
