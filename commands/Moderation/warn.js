const { MessageEmbed } = require('discord.js')
const warningModel = require('../../models/warning')

module.exports.run = async (client, message, args, settings) => {
    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!target) return message.channel.send(
        client.embedError(message, "Please mention a user. Use `[prefix]help warn` for more information on how to use this command.")
    )

    if (target.id === message.author.id) return message.reply("You cannot warn yourself.")

    if (target.user.bot) return message.reply("You cannot warn bots.")

    if (target.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send("You cannot warn a moderation/administrator.");
    }
    
    let reason = args.slice(1).join(' ')
    if (!reason) reason = "Not specified"

    const loadingMessage = await message.channel.send(
        new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Warning ${target}... Please wait!`)
    )
    const cases = await guildCasesModel.findOneAndUpdate({
        guildId: message.guild.id,
    }, {
        $inc: {
            totalCases: 1,
            warnCases: 1
        }
    }, {
        upsert: true,
        new: true,
    })
    await new warningModel({
        guildId: message.guild.id,
        userId: target.id,
        moderatorId: message.author.id,
        timestamp: new Date().getTime(),
        reason,
    }).save()

    target.send(
        new MessageEmbed()
        .setAuthor(target.user.username, target.user.displayAvatarURL())
        .setTitle(`You have been warned in ${message.guild.name}`)
        .addField('Moderator', message.author.tag, false)
        .addField('Reason', reason, false)
        .setColor('YELLOW')
        .setFooter(`Sent from ${message.guild.name}`, message.guild.iconURL())
    ).catch(e => message.channel.send(`Warning logged for ${target}... I could not message them.`))

    loadingMessage.edit(
        new MessageEmbed()
        .setTitle(`Case Number #${cases.totalCases} | Warn`)
        .setDescription(`Successfully warned ${target}`)
        .setColor('#F1C40F')
    )
};

module.exports.help = {
  name: "warn",
  aliases: ['warn'],
  category: 'moderation',
  description: "PLACEHOLDER",
  cooldown: 10,
  usage: '<@user> <reason>',
  isUserAdmin: true,
  permissions: true,
  args: true,
  inDev: true
}