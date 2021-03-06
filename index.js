const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')

client.login(config.token)
client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()

    if (!commandName.startsWith(config.prefix)) return

    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return

    if (command.guildOnly && !message.guild) return message.channel.send('Cette commande ne peut être utilisée que dans un serveur.')

    command.run(message, args, client)
})

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(`${member}`, new Discord.MessageEmbed()
        .setTitle('Bienvenue')
        .setDescription(`${member} a rejoint le serveur **Diginamic**, nous sommes désormais ${member.guild.memberCount} ! 🎉 🎉`)
        .setColor('GREEN')
        .setTimestamp())
    member.roles.add(config.greeting.role)
})

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
        .setTitle('Au revoir')
        .setDescription(`${member.user.tag} a quitté le serveur **Diginamic**... 😢`)
        .setColor('RED'))
})