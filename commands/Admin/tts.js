const discordTTS = require('discord-tts');

module.exports.run = async (client, message, args) => {
    message.delete();
    const argsJoin = args.join(" ");
    const queue = message.client.queue.get(message.guild.id);
    if (queue) {
        queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id).catch(console.error));
    } else {
        const broadcast = client.voice.createBroadcast();
        var channelId = message.member.voice.channelID;
        var channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream(argsJoin));
            const dispatcher = connection.play(broadcast);
        });
    }
}

module.exports.help = {
    name: "tts",
    aliases: ['tts'],
    description: "test tts",
    cooldown: 3,
    usage: '<args>',
    isUserAdmin: false,
    permissions: false,
    args: true
}
