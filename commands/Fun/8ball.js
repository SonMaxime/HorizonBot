const { MESSAGES } = require('../../util/constants');
const { MessageEmbed, Message } = require('discord.js');

module.exports.run = async (client, message, args) => {
    const replies = [message.guild.language.yes, message.guild.language.no, message.guild.language.maybe, message.guild.language.miskina, message.guild.language.ptdr, message.guild.language.quelPlaisir]
    const question = args.join(" ");
    const responce = Math.floor(Math.random() * replies.length);

    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#36393F")
    .addField(question, replies[responce])

    message.channel.send(embed)
};

module.exports.help = MESSAGES.COMMANDS.FUN.EIGHTBALL;