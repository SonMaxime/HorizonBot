const config = require('./../../config');

module.exports.run = async (client, message) => {
  if (message.author.id !== "492402867953467392") return message.delete();
  let bot = message.client;
  message.channel.send(`Rédémarage de \`${message.client.user.tag}\` en cours....`).then(() => bot.destroy()).then(() => bot.login(config.token)).then(() => message.channel.send(`Le bot a redémarré avec succès.`));
  process.exit();
};

module.exports.help = {
  name: "reload",
  aliases: ['reload'],
  category: 'owner',
  description: "Relancer le bot.",
  cooldown: 3,
  usage: '',
  isUserAdmin: false,
  permissions: true,
  args: false,
  inDev: false
}