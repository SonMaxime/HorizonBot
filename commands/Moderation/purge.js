module.exports.run = async (client, message, args, settings) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(message.guild.language.noPermToUse);

        const amount = parseInt(args[0]) + 1;
        const exRes = new MessageEmbed()
        .setColor("00FF00")
        .setTitle("Purge command")
        if (isNaN(amount)) {
                return message.reply(exRes);
        } else if (amount <= 1 || amount > 100) {
          return message.reply(message.guild.language.specifyNumberBetweenOneAnd100);
        }

        (async () => {
                try {
                        message.channel
                                .bulkDelete(amount, true)
                                .catch((err) => {
                                      console.error(err);
                                         message.channel.send(
                                                `:warning: ${message.guild.language.discordLimitations}`
                                         );
                                 });
                          message.reply(
                                  `🗑️ I've deleted \`${
                                          amount - 1
                                  }\`  messages for you`
                          )
                                  .then((msg) => {
                                          msg.delete({
                                                  timeout: 5000,
                                          }).catch(console.error);
                                  })
                                  .catch(console.error);
                  } catch (err) {
                          console.log(err);
                  }
          })();
},

module.exports.help = {
  name: "purge",
  aliases: ['purge'],
  category: 'moderation',
  description: "🇫🇷 Purge un nombre de message spécifié. \n🇬🇧 Purge a specific number of messages.",
  cooldown: 10,
  usage: '<nbr_messages> (100 limit + only messages from 14 days ago.)',
  isUserAdmin: false,
  permissions: true,
  args: true,
  inDev: true
}