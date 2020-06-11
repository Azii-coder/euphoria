const Discord = require("discord.js");
const fs = require("fs");
const config = require(`./config.json`)
const prefix = config.prefix
require ('dotenv/config')
const http = require('http')
const port = process.env.PORT || 3000;
const token = precess.env.TOKEN;
http.createServer().listen(port);
const client = new Discord.Client();
const bot = new Discord.Client({disableMentions:"everyone"});
bot.snipes = new Discord.Collection();
bot.prefix = prefix;
bot.commands = new Discord.Collection()
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});
bot.on('ready', () =>{
    bot.user.setActivity(` Azii my precious | >help`, {type: "WATCHING"});
    console.log(`Hi, ${bot.user.username} is now online!`)
})

bot.on('message', async message =>{
    require('./events/guild/message')(bot, message)
})

bot.login(token.Token)

