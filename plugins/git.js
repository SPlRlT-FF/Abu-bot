const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/QDpVJ7m/IMG-20220120-WA0097.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝑨𝑩𝑼 𝑩𝑶𝑻 𝑪𝑹𝑬𝑨𝑻𝑬𝑫 𝑩𝒀 𝑨𝑩𝑼 𝑺𝑬𝑹*
*Cʀᴇᴀᴛᴇʀ number : wa.me/917025994178?text=Hɪ%20Aʙʜ%20%20*

*Aʙᴜ Sᴇʀ Bᴏᴛ Gʀᴏᴜᴘ Lɪɴᴋ* : https://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk

*Gɪᴛ Lɪɴᴋ Fᴏʀ Bᴏᴛ (Sᴇᴛᴜᴘ)* :    https://github.com/Ajx-Abu/Abu-bot

*Aᴜᴅɪᴏ Cᴏᴍᴍᴀɴᴅs * :   https://github.com/Ajx-Abu/Abu-bot/tree/master/uploads

*Sᴛɪᴄᴋᴇʀ Cᴏᴍᴍᴀɴᴅs* : https://github.com/Ajx-Abu/Abu-bot/tree/master/sticker

*Mʏ Cʜᴀɴᴀʟ* : https://youtube.com/channel/UCvWLxIw5MQvbD7It9A5-3Ow 

*For More Updates Subscribe The Channel ☝*
`}) 

}));

