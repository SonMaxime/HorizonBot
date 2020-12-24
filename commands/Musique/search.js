const { MessageEmbed } = require("discord.js");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI("AIzaSyAhPLtjqee-H0lINdBEP5a_2rO6UuRtICM");
const { MESSAGES } = require("./../../util/constants");

module.exports.run = async (client, message, args, settings) => {
    message.delete();
    if (!args.length)
      return message
        .reply(`Usage: ${message.client.prefix}${module.exports.name} <Video Name>`)
        .catch(console.error);
    if (message.channel.activeCollector)
      return message.reply(message.guild.language.alreadyCollector)
      .then(msg => {
    msg.delete({ timeout: 3000 })
  })
  .catch(console.error);
    if (!message.member.voice.channel)
      return message.reply(messsage.guild.language.needVocal)
      .then(msg => {
        msg.delete({ timeout: 3000 })
      })
      .catch(console.error);

    const search = args.join(" ");

    let resultsEmbed = new MessageEmbed()
      .setTitle(message.guild.language.replyWithNumber)
      .setDescription(`Results for: ${search}`)
      .setColor("#F8AA2A");

    try {
      const results = await youtube.searchVideos(search, 10);
      results.map((video, index) => resultsEmbed.addField(video.shortURL, `${index + 1}. ${video.title}`));

      let resultsMessage = await message.channel.send(resultsEmbed);

      function filter(msg) {
        const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/g;
        return pattern.test(msg.content);
      }

      message.channel.activeCollector = true;
      const response = await message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] });
      const reply = response.first().content;

      if (reply.includes(",")) {
        let songs = reply.split(",").map((str) => str.trim());

        for (let song of songs) {
          await message.client.commands
            .get("play")
            .execute(message, [resultsEmbed.fields[parseInt(song) - 1].name]);
        }
      } else {
        const choice = resultsEmbed.fields[parseInt(response.first()) - 1].name;
        message.client.commands.get("play").execute(message, [choice]);
      }

      message.channel.activeCollector = false;
      resultsMessage.delete().catch(console.error);
      response.first().delete().catch(console.error);
    } catch (error) {
      console.error(error);
      message.channel.activeCollector = false;
      message.reply(error.message).catch(console.error);
    }
  }

module.exports.help = MESSAGES.COMMANDS.MUSIQUE.SEARCH;