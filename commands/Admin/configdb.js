const { MESSAGES } = require('../../util/constants');

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
    case "logChannel": {
      if (newSetting) {
        await client.updateGuild(message.guild, { logChannel: newSetting });
        return message.channel.send(message.guild.language.logChannel + `: \`${settings.logChannel}\`-> \`${newSetting}\``);
      }
      message.channel.send(message.guild.language.logChannelActual + `: \`${settings.logChannel}\``);
      break;
    }
    case "welcomeMessage": {
      if (newSetting) {
        await client.updateGuild(message.guild, { welcomeMessage: newSetting });
        return message.channel.send(message.guild.language.welcomeMessage + `: \`${settings.welcomeMessage}\`-> \`${newSetting}\``);
      }
      message.channel.send(message.guild.language.welcomeMessageActual + `: \`${settings.welcomeMessage}\``);
      break;
    }
  }
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIG;
