const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings) => {
  let channel = message.guild.channels.cache.get(c => c.name === settings.logChannel)
  let user = await client.users.fetch(args[0]);
  if (!user) return message.reply(message.guild.language.userNoExist);
  message.guild.members.unban(user);

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
    .setColor("#35f092")
    .setDescription(`**Action**: unban`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
    
  channel.send(embed);
};

module.exports.help = {
  name: "unban",
  aliases: ['unban'],
  category: 'moderation',
  description: "Unban un utilisateur.",
  cooldown: 10,
  usage: '<user_id>',
  isUserAdmin: false,
  permissions: true,
  args: true
}