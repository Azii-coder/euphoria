const {MessageEmbed} = require('discord.js');
module.exports={
    name: "kick",
    usage: '<user id> <reason>',
    run: async(bot, message, args) =>{
        if (!args[0]) return message.channel.send(`Invalid usage, please specify who you would like to kick.`)
        let User = message.guild.members.cache.get(args[0])
        if (!User)return message.channel.send(`Ok Boomer! That user is not in the server`)
        let Reason = message.content.split(`!kick ${User.id} `)
        if(!args[1]) return message.channel.send("Bruh, specify the reason to kick the member!")
        if(!Reason) return message.channel.send("Bruh, specify the reason to kick the member!")
        if(!User.kickable) return message.channel.send(`Bruh....You cannot kick a staff member lol.`)
        if(!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("Lol....no you need kick members permission.")
        User.kick(Reason)

        //message embed
        const kickEmbed = new MessageEmbed()
        .setDescription(`**${bot.users.cache.get(User.id).tospring} **has been kicked** for **${Reason.slice(1)}`)
        message.channel.send(kickEmbed)
    }
}