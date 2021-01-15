const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings) => {
  let toBan = await client.users.fetch(args[0])

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
  if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

  const reason = args[1] || "no reason";

  message.guild.members.unban(toBan, reason).catch(console.error);

  message.channel.send(`${toBan} unban`)
};

module.exports.help = {
  name: "unban",
  aliases: ['unban'],
  category: 'moderation',
  description: "🇫🇷 Unban un utilisateur. \n🇬🇧 Unban a user.",
  cooldown: 10,
  usage: '<user_id>',
  isUserAdmin: false,
  permissions: true,
  args: true
}