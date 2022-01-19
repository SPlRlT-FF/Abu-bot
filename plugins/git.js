const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/aO8uCtQ.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*spirit  bot created by Spirit*
*Creator number : wa.me/16052772640?text=Hi%20spirit%20%20*

*spirit bot group* : https://chat.whatsapp.com/F3adhxvYpd3KzVptzDxhC4

*Githublink (Setup)* :    https://github.com/SPlRlT-YT/spirit-bot

*Audio commads* :   https://github.com/SPlRlT-YT/spirit-bot/tree/master/uploads

*Sticker commads* : https://github.com/SPlRlT-YT/spirit-bot/tree/master/sticker

*My channel* : https://youtube.com/channel/UCBv1Z1zkOmdGeWU2QRdYBnA 

*For More Updates Subscribe The Channel ☝*
`}) 

}));

