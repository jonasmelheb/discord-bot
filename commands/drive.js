const Discord = require('discord.js')

module.exports = {
    run: message => message.channel.send(new Discord.MessageEmbed()
        .setTitle('Le lien du Drive')
        .setDescription('[Drive](https://drive.google.com/drive/folders/1Dv1NC9lJ_19akCgARJScUOKnccYCCmL4)')
        .setThumbnail('https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png')
        .setColor('GREEN')
        .setTimestamp()),
    name: 'drive'
}