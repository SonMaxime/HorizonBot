const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args, settings, dbUser) => {
  const embed = new MessageEmbed()
  .setTitle(`Level of ${message.author.username}`)
  .setColor("#dc143c")
  .setDescription(message.guild.language.youAreLevel + ` ${dbUser.level}.`)
  .setFooter(`Level Discord via cloud.mongodb.com`, message.author.displayAvatarURL())

  message.channel.send(embed)
};

module.exports.help = MESSAGES.COMMANDS.XP.LEVEL;