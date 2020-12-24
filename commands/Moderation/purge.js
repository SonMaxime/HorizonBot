const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args, settings) => {
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
    
  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.PURGE;