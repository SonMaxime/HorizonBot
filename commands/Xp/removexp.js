module.exports.run = (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  const expToRemove = parseInt(args[1]);
  if (isNaN(expToRemove)) return message.reply("faut entrer un nombre.");
  client.removeExp(client, user, expToRemove);
  message.channel.send(`Vous avez enlevé avec succès ${expToRemove} points d'expérience à l'utilisateur ${user}!`);
};

module.exports.help = {
  name: "removexp",
  aliases: ['removeexperience', 'remexp'],
  category: 'xp',
  description: "Enleve de l'expérience de l'utilisateur.",
  cooldown: 10,
  usage: '<user> <amount_of_experience_',
  isUserAdmin: false,
  permissions: true,
  args: true
}