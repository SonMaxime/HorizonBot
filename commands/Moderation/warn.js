const Warn = require('../../models/warn');

module.exports.run = async (message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (member.user.bot) return message.delete();

    if (member.id === message.author.id) return message.delete();

    const memberPosition = member.roles.highest.position;
    const moderationPosition = message.member.roles.highest.position;

    if (message.member.ownerID !== message.author.id && !(moderationPosition > memberPosition)) {
        return message.channel.send(`Vous ne pouvez pas avertir une personne plus haute que vous dans la hiérachie !`)
    }

    const reason = args.slice(1).join(" ");
    if (!reason) {
        return message.channel.send(`Veuillez indiquer une raison !`)
    }

    let warndb = await Warn.find({ serverID: message.guild.id, userID: member.id })
    if (warndb) {
        const newWarn = new Warn({
            serverID: `${message.guild.id}`,
            userID: `${member.id}`,
            reason: `${reason}`,
            date: new Date,
            moderator: `${message.author.id}`
        }).save().then(async() => {
            member.send(`Bonjour ${member.user.tag}, Vous avez été avertit sur ${message.guild.name} pour la raison ${reason}.`).catch(() => {
                return message.channel.send(`Je n'ai pas pus MP ${member.user.tag} mais le warn a bien été enregistré. `)
            });

            message.channel.send(`J'ai bien avertit ${member.user.tag} en MP . Il a désormais ${warndb.length || '1'} warn(s)`)
        });

    } else {
        const newWarn = new Warn({
            serverID: `${message.guild.id}`,
            userID: `${member.id}`,
            reason: `${reason}`,
            date: Date.now(),
            moderator: `${message.author.id}`
        }).save().then(() => {
            member.send(`Bonjour ${member.user.tag}, Vous avez été avertit sur ${message.guild.name} pour la raison ${reason}.`).catch(() => {
            return message.channel.send(`Je n'ai pas pus MP ${member.user.tag} mais le warn a bien été enregistré. `)
        });
        message.channel.send(`J'ai bien avertit ${member.user.tag} en MP . C'est son premier warn`)
    });


    }
},

module.exports.help = {
  name: "warn",
  aliases: ['warn'],
  category: 'moderation',
  description: "PLACEHOLDER",
  cooldown: 10,
  usage: '<@user> <reason>',
  isUserAdmin: true,
  permissions: true,
  args: true,
  inDev: true
}