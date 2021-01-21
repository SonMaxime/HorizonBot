const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    message.delete();
};

module.exports.help = {
  name: "shop",
  aliases: ['sh'],
  category: 'economy',
  description: "🇫🇷 PLACEHOLDER. \n🇬🇧 PLACEHOLER",
  cooldown: 3,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: true
}