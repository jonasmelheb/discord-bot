const Discord = require('discord.js')

module.exports = {
    run: message => message.channel.send(new Discord.MessageEmbed()
        .setTitle("Hello, I am here to help you")
        .setDescription("**!link** => pour avoir le lien d'emargement \n\n **!drive** => pour le lien du drive ")
        .setColor('RED')),
    name: 'help'
}