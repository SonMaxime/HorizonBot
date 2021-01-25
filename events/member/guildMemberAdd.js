const { MessageEmbed } = require("discord.js");
const GuildSettings = require("../../models/guild");

module.exports = async (client, message) => {
  await client.createUser({
    guildID: message.guild.id,
    guildName: message.guild.name,
    userID: message.user.id,
    username: message.user.tag,
  });
}