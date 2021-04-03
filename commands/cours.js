const Discord = require('discord.js')

module.exports = {
    run: message => message.channel.send(new Discord.MessageEmbed()
        .setTitle('Planning de cours')
        .setDescription('[SID Cours](https://sid.cleverapps.io/index.jsp#!/monCompte/planningDeCours)')
        .setThumbnail('https://www.diginamic.fr/wp-content/uploads/2017/04/Logo_Diginamic_Passeport-e1492187736114.png?x68007')
        .setColor('BLUE')
        .setTimestamp()),
    name: 'cours'
}