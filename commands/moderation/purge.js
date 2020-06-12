const Discord = require("discord.js");

module.exports = {
  name: "purge",
  category: "moderation",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.reply("No u. Only mods can use this");
    if (!args[0] > [100])
      return message.channel.send(
        "bruh I can only purge **100** messages, stop being a simp."
      );
    if (!args[0])
      return message.channel.send(
        "Thats clearly not a number you dumbhead"
      );
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel
        .send(`Cleared **${args[0]}** messages.`)
    });
  }
};
