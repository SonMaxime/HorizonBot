const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send('Testing ping...').then(async m => {
        let dataPing = Date.now()
        let dataPingNow = Date.now()
        let dataRealPing = dataPingNow - dataPing
        const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTitle('🏓 Pong!')
        .setDescription(`Bot Evaluation Time - **${Math.round((m.createdAt - message.createdAt)/(client.ws.ping))}**ms \nBot Latency - **${Math.round(m.createdAt - message.createdAt)}**ms \nAPI Latency - **${Math.round(client.ws.ping)}**ms\nDatabase Latency - **${dataRealPing}**ms`)
        .setColor('BLACK')
        m.edit(embed)
        m.edit("\u200b")
    })
}

module.exports.help = {
    name: "ping",
    aliases: ["imagetext"],
    category: 'owner',
    description: "test ping",
    cooldown: 10,
    usage: '<args>',
    isUserAdmin: false,
    permissions: false,
    args: false,
    inDev: true
}
