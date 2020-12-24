const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message) => {
  const embed = new MessageEmbed()
    .setTitle(message.guild.language.top4OfUsers)
    .setColor("#a41f14")
    .setTimestamp()
    .setFooter("Experience")

  await client.getUsers(message.guild).then(p => {
    p.sort((a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 4).forEach(e => {
      embed.addField(e.username, `${e.experience} XP - Level ${e.level}`);
    });
  });

  message.channel.send(embed);

};

module.exports.help = MESSAGES.COMMANDS.XP.LEADERBOARD;