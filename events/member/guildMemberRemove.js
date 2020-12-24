const { MessageEmbed } = require("discord.js");

module.exports = (client, member, settings) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#dc143c")
    .setFooter("Un utilisateur a quitté")
    .setTimestamp();

  message.channel.send(embed);
}