const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    message.delete();
    if (!args[0])
    return message.channel.send(`Veuillez provenir une durée de 14 jours ou moins (1s/m/h/d)`);
    let time = ms(args[0]);
    if (!time || time > 1209600000)
    return message.channel.send(`Veuillez provenir une durée de 14 jours ou moins (1s/m/h/d)`);
  
    let reason = args.slice(1).join(" ")
    if (!reason) {
      return message.channel.send(`Veuillez provenir une raison.`);
   } else {
      message.channel.send(`Je vous rapelle de ${reason} dans ${args[0]}.`);
   }
};

module.exports.help = {
  name: "reminder",
  aliases: [],
  category: 'general',
  description: "🇫🇷 PLACEHOLDER. \n🇬🇧 PLACEHOLER",
  cooldown: 3,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: true
}
