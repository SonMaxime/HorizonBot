const config = require('./../../config');

module.exports.run = async (client, message, args) => {
    this.client = message.client;

    let i0 = 0;
    let i1 = 1;
    let page = 1;

    let description = `Nombre de serveurs : ${this.client.guilds.cache.size}n\ ` + this.client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).map((r) => r)
    .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Membres`)
    .slice(0, 10)
    .join("\n"); 
};

module.exports.help = {
    name: "serverlist",
    aliases: ['sl'],
    category: 'owner',
    description: "Afficher la liste des serveurs sur lesquels le bot se trouve.",
    cooldown: 0,
    usage: '',
    isUserAdmin: false,
    permissions: true,
    args: false,
    inDev: false
};