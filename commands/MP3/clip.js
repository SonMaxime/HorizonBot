module.exports.run = async (client, message, args) => {
      const { channel } = message.member.voice;
      const queue = message.client.queue.get(message.guild.id);
  
      if (!args.length) return message.reply("Usage: /clip <name>").catch(console.error);
      if (queue) return message.reply("Can't play clip because there is an active queue.");
      if (!channel) return message.reply(message.guild.language.needVocal).catch(console.error);
  
      const queueConstruct = {
        textChannel: message.channel,
        channel,
        connection: null,
        songs: [],
        loop: false,
        volume: 100,
        playing: true
      };
  
      message.client.queue.set(message.guild.id, queueConstruct);
  
      try {
        queueConstruct.connection = await channel.join();
        const dispatcher = queueConstruct.connection
          .play(`./sounds/${args[0]}.mp3`)
          .on("finish", () => {
            message.client.queue.delete(message.guild.id);
            channel.leave();
          })
          .on("error", err => {
            message.client.queue.delete(message.guild.id);
            channel.leave();
            console.error(err);
          });
      } catch (error) {
        console.error(error);
    }
}

module.exports.help = {
    name: "clip",
    aliases: ['clip'],
    category: 'mp3',
    description: "Joue un meme dans un salon vocal",
    cooldown: 3,
    usage: '',
    isUserAdmin: false,
    permissions: false,
    args: false
}