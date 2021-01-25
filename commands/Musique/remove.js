const { canModifyQueue } = require("./../../util/util");
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/g;

module.exports.run = (client, message, args, settings) => {
  message.delete();
  const queue = message.client.queue.get(message.guild.id);
  if (!queue) return message.channel.send(message.guild.language.noQueue).catch(console.error);
  if (!canModifyQueue(message.member)) return;

  if (!args.length) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);

  const arguments = args.join("");
  const songs = arguments.split(",").map((str) => str.trim());
  let removed = [];

  if (pattern.test(arguments) && songs.every((value) => value < queue.songs.length)) {
    queue.songs = queue.songs.filter((item, index) => {
      if (songs.every((value) => value - 1 != index)) {
        return true;
      } else {
        removed.push(item);
      }
    });

    queue.textChannel.send(
      `${message.author} ❌ ${message.guild.language.aRetiré} **${removed.map((song) => song.title).join("\n")}** ${message.guild.language.fromQueue}`
    );
  } else if (!isNaN(args[0]) && args[0] >= 1 && args[0] <= queue.songs.length) {
    return queue.textChannel.send(
      `${message.author} ❌ ${message.guild.language.aRetiré} **${queue.songs.splice(args[0] - 1, 1)[0].title}** ${message.guild.language.fromQueue}`
    );
  } else {
    return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);
  }
}

module.exports.help = {
  name: "remove",
  aliases: ['rm'],
  description: "🇫🇷 Retire un son de la file d'attente. \n🇬🇧 Remove a song from the queue.",
  cooldown: 3,
  usage: '<Queue Number>',
  isUserAdmin: false,
  permissions: false,
  args: true,
  inDev: false
}