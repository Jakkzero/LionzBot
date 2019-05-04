const Discord = require('discord.js');
const bot = new Discord.Client();
 
const token = '';
 
bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('Subscribe to my channel! youtube.com/mrzlionz :) | Try l!help for some help uwu')
 
    if(msg.content ===  "l!hello"){
        msg.reply('Whats good nibba');
    }

    if(msg.content ===  "l!help"){
        msg.reply("The Lionz-Bot github page and its commands can be found at: <https://github.com/Jakkzero/LionzBot>");
    }
 
    if(msg.content ===  "l!test"){
        msg.reply("This bot is working as it's supposed to! (probably)");
    }
 
    if(msg.content ===  "l!balanced"){
        msg.reply('Perfectly balanced, like all things should be. :thanosxd:')
    }
})
 
bot.login(token);
