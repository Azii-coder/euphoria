const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'help',
    run: async(bot, message, args) => {
        let username = message.author.username
        const helpEmbed = new MessageEmbed()
        .setTitle("Euphoria - All Commands")
        .setDescription("Hi there, My prefix is (>)")
        .addField("** Fun Commands **", '\`8ball\` - \`avatar\` - \`meme\` - \`kill\` - \`friend\` - \`snipe\` - \`say\` - \`topic\`')
        .addField("** Info Commands **", '\`help\` - \`ping\` - \`serverinfo\` - \`whois\`')
        .addField("** Moderation Commands **", '\`kick\` - \`ban\` - \`purge\` - \`report\`')
        .addField("** Utility Commands**", '\`slowmode\` - \`emoji\` - \`role [create/delete] [name] [hex color]\` - \`timer\`')
        .addField("** Giveaway Commands**", '\`giveaway [time] [channel] [prize]\`')
        .addField("**Invite Link**", '\nhttps://discord.com/oauth2/authorize?client_id=692809045794619403&scope=bot&permissions=2146958839')
        .setColor("RANDOM")
        .setTimestamp()
        message.channel.send(helpEmbed)

}}
