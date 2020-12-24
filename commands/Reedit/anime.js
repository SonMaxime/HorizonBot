const fetch = require("node-fetch");
const { MessageEmbed, Message } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const anime = await fetch(`https://www.reddit.com/user/emdix/m/animemes/top/.json?sort=top&t=day&limit=500`)
    .then(res => res.json())
    .then(json => json.data.children);

  const img = anime[Math.floor(Math.random() * anime.length)].data;
  
  const embed = new MessageEmbed()
    .setDescription(img.title)
    .setImage(img.url)
    .setFooter('API by r/animemes');

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.REEDIT.ANIME;