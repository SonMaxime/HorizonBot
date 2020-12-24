const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#ad14da")
    .setDescription(args.join(" "))
    .addField(message.guild.language.replyPollWithReact,
    `
    🟩 -` + message.guild.language.pour `
    🟦 -` + message.guild.language.neutre `
    🟥 -` + message.guild.language.contre `
    `)
    .setTimestamp()
    .setFooter(message.guild.language.nePasHesiterARefaireUnSondage)

  const poll = await message.channel.send(embed);
  await poll.react("🟩");
  await poll.react("🟦");
  await poll.react("🟥");
};

module.exports.help = MESSAGES.COMMANDS.MISC.POLL;