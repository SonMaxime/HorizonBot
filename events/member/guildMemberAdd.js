const { MessageEmbed } = require("discord.js");

module.exports = async (client, member, settings) => {
  let channel = message.guild.channels.cache.get(c => c.name === settings.welcomeChannel);
  
  const embed = new MessageEmbed()
  .setColor('BLACK')
  .setDescription(`Welcome ${user}`)

  await client.createUser({
    guildID: member.guild.id,
    guildName: member.guild.name,
    userID: member.id,
    username: member.user.tag,
  });
}
