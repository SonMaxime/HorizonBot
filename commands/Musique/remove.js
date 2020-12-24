const { canModifyQueue } = require("./../../util/util");
const { MESSAGES } = require("./../../util/constants");

module.exports.run = (client, message, args, settings) => {
    message.delete();
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(message.guild.language.noQueue).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`)
    .then(msg => {
      msg.delete({ timeout: 3000 })
    })
    .catch(console.error);
    if (isNaN(args[0])) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`)
    .then(msg => {
      msg.delete({ timeout: 3000 })
    })
    .catch(console.error);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌` + message.guild.language.aRetiré +  `**${song[0].title}**` + message.guild.language.fromQueue)
    .then(msg => {
      msg.delete({ timeout: 3000 })
    })
    .catch(console.error);
  }

module.exports.help = MESSAGES.COMMANDS.MUSIQUE.REMOVE;