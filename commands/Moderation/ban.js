const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, settings) => {
  let channel = message.guild.channels.cache.get(c => c.name === settings.logChannel)
  let user = message.mentions.users.first();
  let reason = (args.splice(1).join(' ') || message.guild.language.noReason);
  user ? message.guild.member(user).ban(reason) : message.channel.send(message.guild.language.userNoExist);

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#dc143c")
    .setDescription(`**Action**: ban\n**Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
    
  channel.send(embed);
};

module.exports.help = {
  name: "ban",
  aliases: ['ban'],
  category: 'moderation',
  description: "Ban un utilisateur.",
  cooldown: 10,
  usage: '<@user> <raison>',
  isUserAdmin: true,
  permissions: true,
  args: true
}