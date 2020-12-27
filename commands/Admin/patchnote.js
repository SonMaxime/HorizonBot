const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require('../../util/constants');

module.exports.run = async (client, message, args) => {
    const Embed = new MessageEmbed()
      .setTitle("**Patch Note**\nv1.4.0")
      .setDescription(
        "```diff\n+ Amélioration de la traduction.```"
      )
      .setFooter("Mis à jour le 24/12/2020 PDT")
      .setColor(0xffa500);
    message.channel.send(Embed);
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.PATCHNOTE;