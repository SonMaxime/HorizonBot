const { MESSAGES } = require('../../util/constants');

module.exports.run = async (client, message, args, settings) => {
  await message.delete();
  await message.channel.send(message.guild.language.restartBot);
  process.exit();
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;