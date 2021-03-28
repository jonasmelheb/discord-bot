const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Titre')
            .setDescription('[SID](http://sid.cleverapps.io/login.jsp)')
            .setColor('BLUE')
            .setTimestamp())
    },
    name: 'embed'
}