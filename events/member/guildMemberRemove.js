const { MessageEmbed } = require("discord.js");

module.exports = (client, message, member, settings) => {
  const channel = settings.logChannel;
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#dc143c")
    .setFooter(message.guild.language.userLeave)
    .setTimestamp();

  channel.send(embed);
}