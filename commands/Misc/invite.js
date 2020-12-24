const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
     message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
}

module.exports.help = MESSAGES.COMMANDS.MISC.INVITE;