const Discord = require('discord.js');
const bot = new Discord.Client();
 
const token = '';
 
bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('| l!help | Subscribe to my channel! youtube.com/mrzlionz :) |')
})
 
bot.on('message', msg=>{
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
        msg.reply('Perfectly balanced, like all things should be. <:thanosxd:574302028331745280>')
    }

    if(msg.content ===  "l!youtube"){
        msg.reply("<https://youtube.com/mrzlionz>")
    }

    if(msg.content ===  "l!twitch"){
        msg.reply('<https://twitch.tv/yttlionz>')
    }

    if(msg.content ===  'l!pickle'){
        msg.reply('<https://www.youtube.com/watch?v=l6nc-CEuwVQ>')
    }

    if(msg.content === 'l!die'){
        msg.reply(' No u, <:thanosxd:574302028331745280>')
    }
})
 
bot.login(token);
