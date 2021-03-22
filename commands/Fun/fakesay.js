const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    message.delete();

    const cible = message.mentions.users.first() || message.guild.users.cache.get(args[0]);
    if (!cible) return message.channel.send(`Veuillez provenir un membre existant/valide`)

    let mensagem = args.slice(1).join(' ')
    if (!mensagem) return message.channel.send(`Veuillez provenir votre message après avoir memtionner un membre.`)

    let avatar = cible.displayAvatarURL({ dynamic: true });
    message.channel.createWebhook(cible.username, { avatar: avatar }).then(webhook => {
        webhook.send(mensagem)
    })
};

module.exports.help = {
  name: "fakesay",
  aliases: ['fs'],
  category: 'fun',
  description: "🇫🇷 PLACEHOLDER. \n🇬🇧 PLACEHOLER",
  cooldown: 3,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: true
}
