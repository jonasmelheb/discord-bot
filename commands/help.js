const Discord = require('discord.js')

module.exports = {
    run: message => message.channel.send(new Discord.MessageEmbed()
        .setTitle("Hello, I am here to help you")
        .setDescription("**!link** => pour avoir le lien d'emargement \n\n **!drive** => pour le lien du drive \n\n **!twitter** => pour avoir le lien repo twitter  __***Réserver pour l'admin***__ \n\n **!kick @member** => pour exclure un utilisateur \n\n **!ban @member** => pour bannir un utilisateur\n\n **!twitter** => pour avoir le lien repo twitter \n\n ")
        .setColor('RED')),
    name: 'help'
}