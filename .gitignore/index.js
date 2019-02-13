const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();


var prefix = "_";

const warns = JSON.parse(fs.readFileSync('./warns.json'))


client.login('NTMwNDE3NDk1OTgzNTIxNzky.DzS5Tg.0eeONE2Kn0_M2iASyRM_rBMmcko')
