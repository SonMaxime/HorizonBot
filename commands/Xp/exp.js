const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings, dbUser) => {
  const user = message.guild.member(message.mentions.users.first());

  if (args[0]) {
    const mentionnedUser = await client.getUser(user);
    const mentionnedEmbed = new MessageEmbed()
    .setColor('BLACK')
    .setDescription(`${user} possède ${mentionnedUser.experience} points d'expérience!`)
    message.channel.send(mentionnedEmbed);
  } else {
    const userEmbed = new MessageEmbed()
    .setColor('BLACK')
    .setDescription(`Vous possédez ${dbUser.experience} points d'expérience !`)
  }
};

module.exports.help = MESSAGES.COMMANDS.XP.EXP;