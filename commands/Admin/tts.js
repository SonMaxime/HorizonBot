const discordTTS = require('discord-tts');

module.exports.run = async (client, message, args) => {
    const argsJoin = args.join(" ");
    const broadcast = client.voice.createBroadcast();
    var channelId = message.member.voice.channelID;
    var channel = client.channels.cache.get(channelId);
    channel.join().then(connection => {
    broadcast.play(discordTTS.getVoiceStream(argsJoin));
    const dispatcher = connection.play(broadcast);
   });
}

module.exports.help = {
    name: "tts",
    aliases: ['tts'],
    category: 'admin',
    description: "test tts",
    cooldown: 3,
    usage: '<value>',
    isUserAdmin: false,
    permissions: true,
    args: true
}