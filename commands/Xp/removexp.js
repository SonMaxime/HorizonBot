const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  const expToRemove = parseInt(args[1]);
  if (isNaN(expToRemove)) return message.reply("faut entrer un nombre.");
  client.removeExp(client, user, expToRemove);
  message.channel.send(`Vous avez enlevé avec succès ${expToRemove} points d'expérience à l'utilisateur ${user}!`);
};

module.exports.help = MESSAGES.COMMANDS.XP.REMOVEXP;