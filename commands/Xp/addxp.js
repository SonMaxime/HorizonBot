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

module.exports.help = {
  name: "addxp",
  aliases: ['addexperience', 'addexp'],
  category: 'xp',
  description: "Ajoute de l'expérience de l'utilisateur.",
  cooldown: 10,
  usage: '<user> <amount_of_experience>',
  isUserAdmin: false,
  permissions: true,
  args: true
}