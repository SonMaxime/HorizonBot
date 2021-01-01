const { MessageEmbed } = require("discord.js");

module.exports = (client, message, member, settings) => {
   let channel = message.guild.channels.cache.get(c => c.name === settings.welcomeChannel);
  
   const embed = new MessageEmbed()
   .setColor('BLACK')
   .setDescription(`Welcome ${user}`)
}
