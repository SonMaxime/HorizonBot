const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = (client, message, args) => {
    message.delete();
    let user = message.mentions.members.first() || message.author;
    let text = args.join(" ");
  
    if (!text) {
       return message.channel.send(`${emoji.error} Veuillez indiquer un texte`)
    }

    const m = await message.channel.send(`Génération de l'image en cours , veuillez patienter.`);

    try {
     const imagelink = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${user.username}&image=${user.displayAvatarURL({ format: "png", size: 512 })}&text=${text}`));
     const json = await imagelink.json();
     const attachment = new Discord.MessageAttachment(json.message, "phcomment.png");
     message.channel.send(attachment);
     m.delete();
   } catch (e) {
     console.log(e);
   }
};

module.exports.help = {
  name: "commentph",
  aliases: ['cph'],
  category: 'fun',
  description: "🇫🇷 PLACEHOLDER. \n🇬🇧 PLACEHOLER",
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false,
  inDev: true
}
