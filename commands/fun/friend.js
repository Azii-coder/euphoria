const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'friend',
    timeout: 2000,
    run: async(bot, message, args) =>{
        let Embed = new MessageEmbed()
        if(!message.mentions.users.first()){
            Embed.setDescription('haha you dont have friends, yor a noob.')
            Embed.setColor(`RANDOM`);
            return message.channel.send(Embed);
        } else {
            let User = message.mentions.members.first();
            Embed.setDescription(`You are now ${bot.users.cache.get(User.id).tag}'s Friend`);
            Embed.setColor(`RANDOM`);
            return message.channel.send(Embed)
        }       
    },
};