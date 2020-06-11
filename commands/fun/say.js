const Discord = require("discord.js");

module.exports = {
  name: "say",
  timeout: 1000,
  run: async(bot, message, args) =>{

    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(`**${sayMessage}**`);
  }
}