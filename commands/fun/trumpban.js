const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'trumpban',
    timeout: 2000,
    run: async(bot, message, args) =>{
        let Embed = new MessageEmbed()
            Embed.setImage("https://tenor.com/view/trump-donaldtrump-interview-banned-cnn-gif-7677105")
            Embed.setColor("RANDOM")
            return message.channel.send(Embed);
       
        }       
    };
