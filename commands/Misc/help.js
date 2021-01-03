const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args, settings) => {
  if (!args.length) {
    const embed = new MessageEmbed()
      .setColor("#36393F")
      .addField("Liste des commandes", `Une liste de toutes les sous-catégories disponibles et leurs commandes.\nPour plus d'informations sur une commande, tapez \`${settings.prefix}help <command_name>\`.`)
      .addFields(
        { name: 'Admin', value: `configdb, dm, eval ` + message.guild.language.et +` reload` },
        { name: 'Fun', value: `8ball ` + message.guild.language.et + ` rps` },
        { name: 'Misc', value: `botinfo, help, invite, poll, say ` + message.guild.language.et + ` stats` },
        { name: 'Modération', value: `ban, kick, language, mute, purge, unban, unmute ` + message.guild.language.et + ` votekick` },
        { name: 'Musique', value: `nowplaying, play, playlist, queue, remove, search` + message.guild.language.et + `skipto` },
        { name: 'Reedit', value: `anime, hmmm ` + message.guild.language.et + ` meme` },
        { name: 'Stats', value: `apex, fortnitedevbuild ` + message.guild.language.et + ` fortnite` },
        { name: 'Xp', value: `addxp, removexp, exp, leaderboard, level ` + message.guild.language.et + ` removexp` }
      );
    return message.channel.send(embed);
  } else {
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.reply(message.guild.language.commandNoExist);

    const embed = new MessageEmbed()
      .setColor("#36393F")
      .setTitle(`\`${command.help.name}\``)
      .addField("Description", `${command.help.description} (cd: ${command.help.cooldown}secs)`)
      .addField("Usage", command.help.usage ? `${settings.prefix}${command.help.name} ${command.help.usage}` : `${settings.prefix}${command.help.name}`, true)
      .setFooter(`Permission: ${command.help.permissions ? "Admin only" : "@everyone"}`)

    if (command.help.aliases.length > 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
    return message.channel.send(embed);
  }
};

module.exports.help = {
  name: "help",
  aliases: ['help'],
  category: 'misc',
  description: "Renvoie une liste de commandes ou les informations sur une seule.",
  cooldown: 3,
  usage: '<command_name>',
  isUserAdmin: false,
  permissions: false,
  args: false
}