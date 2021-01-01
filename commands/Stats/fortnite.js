const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../config");

const Client = require("fortnite");
const ft = new Client (config.FORTNITE);

module.exports.run = async (client, message, args) => {
    const platforms = ["pc", "xb1", "psn"];

        const lastWord = args[args.length - 1].toLowerCase();

        let platform, usermame;
        
        if (platforms.includes(lastWord)) {
            username = args.slice(0, args.length - 1).join(" ");
            platform = lastWord;
        } else {
            usermame = args.join(" ");
            platform = "pc";
        }

        const search = await ft.user(usermame, platform);

        if (!search.username) {
            return message.reply("Je ne trouve personne de ce nom, réessayez.")
            .then(m => m.delete(5000))
        }

        const lifetime = search.stats.lifetime;
        const solo = search.stats.solo;
        const duo = search.stats.duo;
        const squad = search.stats.squad;

        const statsEmbed = new MessageEmbed()
        .setTitle(`${search.username} (${search.platform})`)
        .setURL(search.url)
        .setColor("#9d4dbb")
        .setFooter(`Stats FTN via fortnitetracker.com`, message.author.displayAvatarURL())
        .setTimestamp()
        .addField("Solo:", stripIndents`**- Victoires :** ${solo.wins}
        **- KD :** ${solo.kd}
        **- Kills :** ${solo.kills}
        **- Kills/Games :** ${solo.kills_per_match}`, true)
        .addField("Duo:", stripIndents`**- Victoiries :** ${duo.wins}
        **- KD :** ${duo.kd}
        **- Kills :** ${duo.kills}
        **- Kills/Games :** ${duo.kills_per_match}`, true)
        .addField("Squad:", stripIndents`**- Victoiries :** ${squad.wins}
        **- KD :** ${squad.kd}
        **- Kills :** ${squad.kills}
        **- Kills/Games :** ${squad.kills_per_match}`, true)
        .addField("Lifetime :", stripIndents`**- Victoiries :** ${lifetime.wins}
        **- KD :** ${lifetime.kd}
        **- Kills :** ${lifetime.kills}`, false)

        message.channel.send(statsEmbed)

}

module.exports.help = {
    name: "fortnite",
    aliases: ['ftn'],
    category: 'stats',
    description: "Affiche les stats d'un joueur ou la boutique du jour.",
    cooldown: 10,
    usage: "<pseudo [pc,xb1,psn] | store>",
    isUserAdmin: false,
    permissions: false,
    args: true
}