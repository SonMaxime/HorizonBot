const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings, dbUser) => {
  const user = message.guild.member(message.mentions.users.first());

  const userEmbed = new MessageEmbed()
  .setColor('BLACK')
  .setDescription(`Vous possédez ${dbUser.experience} points d'expérience !`)
};

module.exports.help = {
  name: "exp",
  aliases: ['exp'],
  category: 'xp',
  description: "Renvoie l'expérience de l'utilisateur.",
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
}