const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, settings) => {
  let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
  if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

  const reason = args[1] || "no reason";

  toBan.ban({
      reason: reason
  }).catch(console.error)
  const embed = new MessageEmbed()
  .setColor('BLACK')
  .setDescription(`${toBan} banned!`)
  .addField(`Reason: ${reason}`)
  message.channel.send(embed)
};

module.exports.help = {
  name: "ban",
  aliases: ['ban'],
  category: 'moderation',
  description: "🇫🇷 Ban un utilisateur. \n🇬🇧 Ban a user.",
  cooldown: 10,
  usage: '<@user> <reason>',
  isUserAdmin: true,
  permissions: true,
  args: true
}