const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'info',
    run: async(bot, message, args) => {
        let username = message.author.username
        const infoEmbed = new MessageEmbed()
        .setTitle("Euphoria Information ")
        .setDescription("Euphoria is a fun and awesome discord bot coded and created by `Azii#5515` written in `discord.js`, This bot has a lot of cool features and commands and is updated every day.")
        .setColor("RANDOM")
        .setTimestamp()
        message.channel.send(infoEmbed)

}}
