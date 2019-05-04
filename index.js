const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTc0MjU2MDczOTgxMjk2NjYw.XM23GQ.ppHYOotcFx4ZrkRds3ULm7bsOac';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('Subscribe to my channel! youtube.com/mrzlionz :) | coming soon | Try l!help for some help uwu |')
})

bot.on('message', msg=>{
    if(msg.content ===  "HELLO"){
        msg.reply('Whats good nibba');
    }
})

bot.login(token);