const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const randomPuppy = require("random-puppy");

module.exports.run = async (client, message, args) => {
    const subReddits = ["dankmeme", "meme", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`de /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
}

module.exports.help = MESSAGES.COMMANDS.REEDIT.MEME;