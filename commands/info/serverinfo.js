const Discord = require("discord.js")

module.exports = {
    name: "serverinfo",
    timeout: 2000,
}

module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.MessageEmbed()
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL())
    .addField("Guild Name:", `**${message.guild.name}**`, true)
    .addField("Guild Owner:", `${message.guild.owner}`, true)
    .addField("Member Count:", `${message.guild.memberCount}`, true)
    .setFooter(`Euphoria | Azii#5515`)
    message.channel.send({embed: sEmbed});
}