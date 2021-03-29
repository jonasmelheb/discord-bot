const Discord = require('discord.js')

module.exports = {
    run: message => message.channel.send(new Discord.MessageEmbed()
        .setTitle('Emargement')
        .setDescription('[SID Emargement](https://sid.cleverapps.io/#!/monCompte/emargement)')
        .setColor('GREEN')
        .setTimestamp()),
    name: 'link'
}