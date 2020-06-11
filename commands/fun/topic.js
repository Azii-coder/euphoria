const {MessageEmbed} = require("discord.js");
module.exports={
    name: "topic",
    timeout: 5000,
    run: async(bot, message, args) =>{
            let responses = [
                "What are some things you like about the server?",
                "What are some of your hobbies?",
                "Do you enjoy gaming or binge watching",
                "How long does it take for you to get dressed for school?",
                "Do you take long or short showers/bath's",
                "Do you enjoy (back in my day) stories?",
                "Do you prefer dad jokes or bad jokes?",
                "Do you enjoy watching superhero movies or villain movies?",
                "What is your favorite meal?",
                "Do you have any pets?",
                "What are some games you play a lot?",
            ]
            let Response = responses[Math.floor(Math.random()*(responses.length)-1)]
            let Embed = new MessageEmbed()
                .setDescription("**Topic**: " +Response)
                .setColor("RANDOM");
            message.channel.send(Embed)
        }}
    
