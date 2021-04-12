const Discord = require('discord.js')

module.exports = {
    run: message => message.channel.send(new Discord.MessageEmbed()
        .setTitle('Dépot git Tp Twitter')
        .setDescription('[Git repo](https://github.com/dwaps/touiteur-diginamic)')
        .setColor('GREEN')
        .setTimestamp()),
    name: 'twitter'
}