const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  const expToAdd = parseInt(args[1]);
  if (isNaN(expToAdd)) return message.reply(message.guild.language.needToTag);
  client.addExp(client, user, expToAdd);
  const addEmbed = new MessageEmbed()
  .setColor('BLACK')
  .setDescription(message.guild.language.vousAvezAjoute + `${expToAdd}` + message.guild.language.pointsUser + `${user}!`)
  message.channel.send(addEmbed);
};

module.exports.help = MESSAGES.COMMANDS.XP.ADDXP;