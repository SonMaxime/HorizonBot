const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings) => {
  let channel = message.guild.channels.cache.get(c => c.name === settings.logChannel)
  if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply(message.guild.language.specifyNumberBetweenOneAnd100);

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  });

  message.delete();
  await message.channel.bulkDelete(messages);

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#287db5")
    .setDescription(`**Action**: purge\n**Nbr de messages**: ${args[0]}\n**Channel**: ${message.channel}`)
    
  channel.send(embed);
};

module.exports.help = {
  name: "purge",
  aliases: ['purge'],
  category: 'moderation',
  description: "Purge un nombre de message spécifié.",
  cooldown: 10,
  usage: '<nbr_messages>',
  isUserAdmin: false,
  permissions: true,
  args: true
}