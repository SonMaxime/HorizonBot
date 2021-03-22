module.exports.run = async (client, message, args, settings) => {
  const getSetting = args[0];
  const newSetting = args.slice(1).join(" ");

  switch(getSetting) {
    case "prefix": {
      if (newSetting) {
        await client.updateGuild(message.guild, { prefix: newSetting });
        return message.channel.send(message.guild.language.prefix + `: \`${settings.prefix}\`-> \`${newSetting}\``);
      }
      message.channel.send(message.guild.language.prefixActual + `: \`${settings.prefix}\``);
      break;
    }
  }
};

module.exports.help = {
  name: "configdb",
  aliases: ['configdb'],
  category: 'admin',
  description: "Modifier la base de données (prefix, welcomeMessage et logChannel)",
  cooldown: 3,
  usage: '<key> <value>',
  isUserAdmin: false,
  permissions: true,
  args: true
}
