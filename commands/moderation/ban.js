const {MessageEmbed} = require('discord.js');
module.exports={
    name: "ban",
    usage: '<user id> <reason>',
    run: async(bot, message, args) =>{
        if (!args[0]) return message.channel.send(`Invalid usage, please specify who you would like to ban.`)
        let User = message.guild.members.cache.get(args[0])
        if (!User)return message.channel.send(`Ok Boomer! That user is not in the server`)
        let Reason = message.content.split(`!ban ${User.id} `)
        if(!args[1]) return message.channel.send("Please specify the reason to ban the member!")
        if(!Reason) return message.channel.send("Please specify the reason to ban the member!")
        if(!User.bannable) return message.channel.send(`You cannot ban a staff member!`)
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You must have the ban members permission.")
        User.ban(Reason)

        //message embed
        const banEmbed = new MessageEmbed()
        .setDescription(`**${bot.users.cache.get(User.id).tospring} **has been banned** for the reason of **${Reason.slice(1)}`)
        message.channel.send(banEmbed)
    }
}