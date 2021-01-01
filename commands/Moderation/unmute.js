const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, settings) => {
  let channel = message.guild.channels.cache.get(c => c.name === settings.logChannel)
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

  if (!user.roles.cache.has(muteRole.id)) return message.reply(message.guild.language.isNotMuted);
  user.roles.remove(muteRole.id);
  message.channel.send(`<@${user.id}> ` + message.guild.language.isUnmuted);

  const embed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
    .setColor("#35f092")
    .setDescription(`**Action**: unmute`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
    
  channel.send(embed);
};

module.exports.help = {
  name: "unmute",
  aliases: ['unmute'],
  category: 'moderation',
  description: "Unmute un utilisateur.",
  cooldown: 10,
  usage: '<@user>',
  isUserAdmin: true,
  permissions: true,
  args: true
}